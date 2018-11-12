# About
This is part of noddy test application to be deployed to a kubernetes cluster.
All part of playing a few technologies and experimenting.

It interacts with the following API's:
* [go_cake_api_bake](https://github.com/terrortylor/go_cake_api_bake)
* [go_cake_api_mix](https://github.com/terrortylor/go_cake_api_mix)
* [go_cake_api_ice](https://github.com/terrortylor/go_cake_api_ice)

#React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Docker

## Build Docker image
```
docker image build . --tag cake_factory
```
## Run container locally
```
docker run -d -p 80:3000 --name cake_factory cake_factory
```
