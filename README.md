# Mapfox
Mapfox is a team project during Haaga-Helia's software project II -course 2020. 

We were inspired by map interfaces and wanted to create our own map application, that could be used for actions like creating events, sharing event maps and participating events.

Mapfox is a map based mobile application project build with React Native and Node.js.
With the application you can:
* Fetch places from Helsinki API and include selected places to your event
* Save events
* Fetch a list of events
* Select event from a list and see the places included on a map

REST API provided by city of Helsinki is used in this project. 
[http://open-api.myhelsinki.fi/](http://open-api.myhelsinki.fi/)

## Getting Started

### Step 0
As prequisite to get the application up and running you need to 
have installed the following:
* npm
* expo CLI
* expo mobile app in your mobile device OR emulator
See detailed Expo documentation from [https://expo.io/](https://expo.io/)

### Step 1
Clone or download this project

```bash
git clone https://github.com/mjHarakka/mapfox
```
navigate to MapFox directory:
```bash
cd /path_to/mapfox
```
run
```bash
npm install
npm start
```
### Step 2
Open app with your mobile device by reading the QR-code from expo CLI console or use emulator

## Usage
There's separate folders for React Native front-end and Node.js backend.
Usage of back-end, jump to part Back-end documentation.

## Contributing MapFox
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


# Back-end documentation
Example of event object:
```Bash
{
"title": "My event",
"description": "City tour",
"isEventChildFriendly": false,
"pinCode": 1234,
"tags": "Linger on the sidewalk",
"places": 
[
	{
		"name": "Street bar",
		"description": "good music",
		"latitude": 60.196764,
		"longitude": 24.951044
	},
	{
		"name": "Annantalo",
		"description": "coffee",
		"latitude": 60.16767501831055,
		"longitude": 24.934677124023438
	}
	
	
]
}

```
Getting one event:
```Bash
http//path_to/events
```
Geting all events:
```Bash
http//path_to/events/{id}
```
* Possible operations GET, POST, DELETE 
* Back-end is deployed in Digital Ocean server. By changin the configuration you can switch to your favorite host.


### Authors
Mikko Harakka, Aleksanteri Fagerholm, Olli Eloranta, Noora Eteläniemi,Sanna Arvilommi

### Acknowledgements
Thanks to the City of Helsinki for api data. 
Pat on the back for everybody involved.

### License
[MIT](https://choosealicense.com/licenses/mit/)

