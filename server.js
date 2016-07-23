// For server-side rendering in production. Doesn't currently work.

import express from 'express';
import path from 'path';
import compression from 'compression';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './app/routes.js';

const app = express();

app.use(compression());

// Serve our static stuff like index.css.
app.use(express.static(path.join(__dirname, 'build_prod'), {index: false}))

// Send all requests to index.html so browserHistory works.
app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message);
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            const appHtml = renderToString(<RouterContext {...props}/>);
            res.send(renderPage(appHtml));
        } else {
            res.status(404).send('Not found.');
        }
    })
})

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Yearling's Bobtail</title>
    </head>
    <body>
        <div id="app">${appHtml}</div>
        <script src="./bundle.js"></script>
    </body>
    </html>
   `;
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log('Production server running at localhost:' + PORT);
});
