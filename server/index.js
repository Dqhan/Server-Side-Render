// import React from 'react';
// import { StaticRouter } from "react-router-dom";
// import { renderToString } from 'react-dom/server';
// import App from '../src/App';
const Koa = require("koa");
const static = require("koa-static");
const path = require("path");
const fs = require("fs");

const app = new Koa();
app.use(static(path.resolve(__dirname, "../src/")));


app.listen(4000,function(err, info){
    console.log('listen 4000')
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

app.listen(3000);
