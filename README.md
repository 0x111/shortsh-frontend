# shortsh-frontend

Yet another URL Shortener.

This was built for a few simple reasons, I was tired of current solutions and languages used to build up the software and wanted to try something new.

The frontend is quite simple, we are using `react` and `react-redux` to manage state on it.

This project can be downloaded, built and then hosted basically anywhere. These are static files only, you simply setup the config ([config.sample.json](https://github.com/0x111/shortsh-frontend/blob/master/src/_config/config.sample.json)) where you provide an API url, build and you can deploy it anywhere.

### Instructions
- Download the project
- Go to folder src/_config
- Copy file `config.sample.json` to `config.json`
```json
{
  "api": {
    "url": "http://localhost:1323"
  }
}
```
- Change url to your API url
- Save the file
- Run `yarn install`
- Then run `yarn build`
- Host the contents of build folder anywhere

Attention: This is just the frontend part, for the whole to work, you need to setup the [shortsh-backend](https://github.com/0x111/shortsh-backend) and also the [shortsh-redirector](https://github.com/0x111/shortsh-redirector) app. You can host the backend and redirector separately, but also on the same host. I recommend using a simplistic setup with nginx reverse proxy, to host the backend and redirector on different ports and virtually add more short domains further.
