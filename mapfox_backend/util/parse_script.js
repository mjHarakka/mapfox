const connection = require('./db.js')
const express = require('express')
const http = require('http')
const fs = require('fs')

const url = process.env.MAP_ENDPOINT || 'http://open-api.myhelsinki.fi/v1/places/'

var path = '../datadump/jsonfile.json';
var ws = fs.createWriteStream(path);
var parsedData

http.get(url, (response) => {
  let rawData = ''
  response.on('data', (chunk) => {
    rawData += chunk
  })
  response.on('end', () => {
    try {
      parsedData = JSON.parse(rawData)
      console.log(parsedData)


    } catch (e) {
      console.error(e.message)
    }
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})


