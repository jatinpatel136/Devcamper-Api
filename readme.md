# DevCamper API

> Backend API for DevCamper application, which is a bootcamp directory website

## Specification can be found at below link 
[DevCamper API Specifications](https://gist.github.com/bradtraversy/01adb248df70fb29e98c30cf659042cf)

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

<!-- The API is live at [https://devcamper-node-api.herokuapp.com/](https://devcamper-node-api.herokuapp.com/) -->

Extensive documentation with examples [here](https://documenter.getpostman.com/view/13840581/TVssjopd)

- Version: 1.0.0
- License: MIT
- Author: Jatin Patel
