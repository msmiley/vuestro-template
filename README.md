# Vuestro Template

This is a template project for a Vuestro/Vue/Webpack based project. It takes care of all the boilerplate setup for a Webpack/Vue project and includes Vuestro, a simple and easy to use Vue.js component library.

## Development

```
git clone git@github.com:msmiley\vuestro-template
cd vuestro-template
npm i
npm run dev
```

## Release

This template is set up to build using Webpack down to a static Vue.js Web app. The Web app is then ready to be served up by any web server that can serve static files.

A `Dockerfile` is included to build a Docker image that uses nginx to serve the Vue app.


```
npm run build
docker build .
```

## License

ISC

