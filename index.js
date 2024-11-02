const { Command } = require('commander');
const express = require('express')
const http = require('http')
const { argv } = require('process')
const app = express()

const program = new Command();
program 
    .requiredOption('-h, --host <host>', 'адреса сервера')
    .requiredOption('-p, --port <port>', 'порт сервера')
    .requiredOption('-C, --cache <cache>', 'адреса кешованих файлів')


program.parse(process.argv);
const { host, port, cache } = program.opts();


const server = http.createServer(app)

server.listen(port, host, () =>{
    console.log(`Сервер запущено на http://${host}:${port}`)
})