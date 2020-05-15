# Mapfox

<img src="https://raw.githubusercontent.com/mjHarakka/mapfox/master/mapfox_pictures/mapfox%20mainscreen.png" width="200px" > <img src="https://raw.githubusercontent.com/mjHarakka/mapfox/master/mapfox_pictures/mapfox%20event%20creation.png" width="200px" > <img src="https://raw.githubusercontent.com/mjHarakka/mapfox/master/mapfox_pictures/mapfox%20event%20info%20screen.png" width="200px" >



Mapfox is a team project during Haaga-Helia's software project II -course 2020.

We were inspired by map interfaces and wanted to create our own map application, that could be used for actions like creating events, sharing event maps and participating events.

Mapfox is modern a fullstack application that has been made for the users to use it on their mobile phones, this project was build with React Native, Node.js, MongoDB and express.

With the application you can:

- Fetch places from Helsinki API and include selected places to your event
- Save events
- Fetch a list of events created in MapFox
- Select event from a list and see the places included on a map

REST API provided by city of Helsinki is used in this project.
[http://open-api.myhelsinki.fi/](http://open-api.myhelsinki.fi/)

## Folder structure

There are separate folders for the front-end with and backend.
The folder structure, might need to be reworked in to their own repositories in order to keep the backend logic a little more secret when the application is published for the customers to use.
Usage of back-end, jump to part Back-end documentation.

## Contributing MapFox

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Contributing should be done alongside the technologies currently used, but feel free to contact us with request of changes.

## Getting Started with the frontend

### Step 0

As prequisite to get the application up and running you need to
have installed the following:

- npm
- expo CLI
- expo mobile app in your mobile device OR emulator
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
expo start
```

### Step 2

Open app with your mobile device by reading the QR-code from expo CLI console or use an emulator, hot reload works for the front-end, so the changes can be seen changing in real time. Your frontend should be now all set.


## Getting Started with the Backend

Clone or download this project

```bash
git clone https://github.com/mjHarakka/mapfox/
```

navigate to MapFox directory:

```bash
cd mapfox_backend
```
run

```bash
npm install
node index.js
```
(This might come handy in developing the backend https://www.npmjs.com/package/nodemon)

### Step 2

Open the mapfox_backend file on your code editor and start editing, the default port is `8000` and you can use the same endpoints that the one one serverside uses by simply just removing the ip address and replacing it with `localhost:8000`, for example `localhost:8000/events`.

# Back-end documentation

The backend is built on Node JS alongside with MongoDB as the database, the backend is running on a Linux Ubuntu server. For development you only need to have the node JS installed locally and currently there is no API for testing on our server so it is advisable to use local MongoDB installation.

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

Fetching all the events must be done with http GET request from this endpoint:

```Bash
http://128.199.36.67/events
```

Fetching a single event must be done with http GET request from this endpoint:

```Bash
http://128.199.36.67/events/{id}
```

Posting a single event must be done with http POST request from this endpoint:

```Bash
http://128.199.36.67/events
```

```Bash

EXAMPLES OF API CALL WITH ALL OBJECT FIELDS:

http://128.199.36.67/events (METHOD POST)

API REQUEST BODY:

[

{
"title": "Uusi tapahtuma",
"description": "kaupunkikävely, aloitus Mustasta härästä",
"isEventChildFriendly": true,
"pinCode": 1234,
"tags": "kaljan juontia",
"places":
[
	{
		"name": "Musta Härkä",
		"description": "kaljaa",
		"latitude": 60.196764,
		"longitude": 24.951044
	},
	{
		"name": "Annantalo",
		"description": "kahvia",
		"latitude": 60.16767501831055,
		"longitude": 24.934677124023438
	}


]
}

]

API RESPONSE:

{ Status 200 ok }
```

Deleting a single event must be done with http DELETE request from this endpoint:

```Bash
http://128.199.36.67/events/{id}
```

```Bash

EXAMPLES OF API CALL WITH DELETE ID SUPPLIED IN THE END OF THE ENDPOINT:

http://128.199.36.67/events/5eb68cb6e386416dfcf5d747 (METHOD DELETE)


API RESPONSE:

{ Status 200 ok }
```

```Bash
http://128.199.36.67/events/{id}
```

Updating an existing event must be done with http PATCH request from this endpoint:

```Bash
http://128.199.36.67/events/{id}
```

```Bash

EXAMPLES OF API CALL WITH ALL OBJECT FIELDS:

http://128.199.36.67/events/5eb68cb6e386416dfcf5d747 (METHOD PATCH)

API REQUEST BODY:

[

{
"description": "kaupunkikävely, aloitetaan sittenkin tuolta Kaislasta",
"places":
[
	{
		"name": "Musta Härkä",
		"description": "kaljaa",
		"latitude": 60.196764,
		"longitude": 24.951044
	},
	{
		"name": "Annantalo?",
		"description": "kahvia",
		"latitude": 60.16767501831055,
		"longitude": 24.934677124023438
	},
	{
		"name": "Kaisla",
		"description": "Kaljaa ja kahvia",
		"latitude": 60.16767501831055,
		"longitude": 24.934677124023438
	}


]
}

]

API RESPONSE:

{ Status 200 ok }
```

For deleting you only need to give the id in the post message that you want to delete

For the update you need to supply the id and all the fields you wish to update with the updated values

- All possible operations GET, POST, DELETE, UPDATE

### Roadmap
See the open issues for a list of proposed features (and known issues).

### Contributing
This is an open source project licensed under MIT.

- Fork the Project
- Create your Feature Branch
- Commit your Changes
- Push to the Branch
- Open a Pull Request


If a pull requested is merged into the master then it will pushed into production. There are currently only few people who have the root access and/or user setup on our server but if needed and it is someone we would trust it would be possible to grant someone non-root access to the server.

### Authors

Mikko Harakka, Aleksanteri Fagerholm, Olli Eloranta, Noora Eteläniemi,Sanna Arvilommi

### Acknowledgements

Thanks to the City of Helsinki for api data.
Pat on the back for everybody involved.

### License

[MIT](https://choosealicense.com/licenses/mit/)
