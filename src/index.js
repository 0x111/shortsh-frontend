import { AppContainer } from 'react-hot-loader';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootReducer from './_reducers';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [routerMiddleware(history), thunk];

if (process.env.NODE_ENV === `development`) {
    const loggerMiddleware = createLogger();

    middlewares.push(loggerMiddleware);
}

const store = createStore(
    rootReducer(history),
    composeEnhancer(
        applyMiddleware(
            ...middlewares
        ),
    ),
);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
};

render();

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
        render()
    });

    // Reload reducers
    module.hot.accept('./_reducers', () => {
        store.replaceReducer(rootReducer(history))
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
