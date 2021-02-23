Project on [node.js](https://nodejs.org/) + [Expressjs](https://expressjs.com/) + [Typescript](https://www.typescriptlang.org/) + [MongoDB](https://www.mongodb.com/).
Is a server for [the client application](https://github.com/vdyakov/culinary-client) and chat-bot.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
The server starts according to the parameters specified in the settings.
By default, this is [http://localhost:8000](http://localhost:8000).

## Available methods

### GET

### `API_URL/api/preference-type/list` - method returns a list of preference types.

### `API_URL/api/recipe/list` - method returns a list of recipes.

### POST

### `API_URL/api/auth/register` - method for registering a user in the system

### `API_URL/api/auth/login` - method for authorizing a user in the system. Returns a token in response.

### `API_URL/api/preference-type/create` - method creates a new entry in preference types.

### `API_URL/api/recipe/create` - method creates a new entry in recipes.

### PUT

### `API_URL/api/preference-type/update` - method updates the record in preference types.

### `API_URL/api/recipe/update` - method updates the record in recipes.

### DELETE

### `API_URL/api/preference-type/delete` - method deletes the entry in preference types.

### `API_URL/api/recipe/delete` - method deletes the entry in recipes.