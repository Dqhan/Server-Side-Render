// import React from 'react';
// import { StaticRouter } from "react-router-dom";
// import { renderToString } from 'react-dom/server';
// import App from '../src/App';
const Koa = require("koa");
// const static = require("koa-static");
const path = require("path");
const fs = require("fs");
const mount = require('koa-mount');
const { renderToNodeStream } = require('react-dom/server');
// const App = require('../src/App')
import React from 'react';
import App from '../src/App';


const app = new Koa();
// app.use(static(path.resolve(__dirname, "../build/")));

// app.use(mount('/static', path.resolve(__dirname, '../build/')))



app.use(
    mount('/', async (ctx) => {

        ctx.status = 200;
        // ctx.body = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), 'utf-8')
        ctx.response.type = 'html';
        const stream = renderToNodeStream(<App />);
        // ctx.body = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf-8').replace('{{root}}', renderToNodeStream(<App />))
        // ctx.body = renderToNodeStream(<App />);


        let html = "";
        html += "<!DOCTYPE html><html><head><title>My Page</title></head><body>";
        html += "<div id='root'>";
        console.log(html);
        stream.pipe(html);
        html += "</div></body></html>";

        ctx.body = html;
    })
)

// const api_app = new Koa();

// app.use(
//     mount('/api/', api_app)
// )

// api_app.use(
//     mount('/api/test', ctx => {
//         ctx.status = 200;
//         ctx.body = 'test';
//     })
// )

app.listen(5000, function (err, info) {
    console.log('listen 5000')
})

// app.get('/*', (req, res) => {
//     const renderedString = renderToString(
//         <StaticRouter>
//             <App></App>
//         </StaticRouter>
//     );

//     fs.readFile(path.resolve('index.html'), 'utf8', (error, data) => {
//         if (error) {
//             res.send(`<p>Server Error</p>`);
//             return false;
//         }

//         res.send(data.replace('<div id="root"></div>', `<div id="root">${renderedString}</div>`));
//     })
// });

// app.listen(3000);
