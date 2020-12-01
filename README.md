# Vuestro Template

Screenshot of template starting point:

![alt text](../media/vuestro-template.png?raw=true)

This is a template project for a Vuestro/Vue/Webpack based project with hot-reload for rapid development. It takes care of all the boilerplate setup for a Webpack/Vue project and includes Vuestro, a simple and easy to use Vue.js component library. Also included is a Dockerfile for quick deployment as a container.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Source maps

- `npm run build`: Production ready build.
  - minified JavaScript
  - minified HTML
  - CSS across all components extracted into a single file and minified
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

## Dependencies

- git
- recent Node.js (>=10)
- Docker Engine for a containerized build

## Development (npm run dev)

```
git clone git@github.com:msmiley/vuestro-template
cd vuestro-template
npm i
npm run dev
```

Open a browser to http://localhost:8080 and you should see something like the screenshot above.

## Release (npm run build)

This template is set up to build using Webpack down to a static Vue.js Web app. The Web app is then ready to be served up by any web server that can serve static files.

A `Dockerfile` is included to build a Docker image that uses nginx to serve the Vue app.


```
npm run build
docker build .
```

## License

ISC

