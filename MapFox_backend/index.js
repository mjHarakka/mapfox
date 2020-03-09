const express = require('express');
const fetch = require('node-fetch');

const cors = require('kcors');
const Koa = require('koa');
const router = require('koa-router')();

const port = process.env.PORT || 9000;


const mapURI = process.env.MAP_ENDPOINT || 'http://open-api.myhelsinki.fi/v1/places/';



const app = new Koa();

app.use(cors());


const fetchLocations = async () => {
	const endpoint = mapURI;
	const response = await fetch(endpoint);
	return response ? response.json() : {};
};

router.get('/api/apidata', async ctx => {
	const locationData = await fetchLocations();
	ctx.type = 'application/json; charset=utf-8';
	ctx.body = locationData.data ? locationData : {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`Listening port ${port}`);

