import React from 'react';
import { Link } from 'react-router-dom';

class NoMatch extends React.Component {
    render() {
        return(
            <div>
                <p>No route found!</p>
                Go to <Link to="/">Home</Link>
            </div>
        )
    }
}

export default NoMatch;