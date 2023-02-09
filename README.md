# SPORTSEE

This repo contains all the source code for the sports analytics dashboard SportSee.

## Presentation
SportSee is a startup dedicated to sports coaching. 
Today the company will launch a new version of the user profile page. This page will allow the user to track the number of sessions and the number of calories burned.

This project has been developped with React and Recharts librairie.


## Prerequisites
- NodeJS
- Yarn
- Npm

## Launching the project with API

### 1. Install the back-end (API)
- Fork the repository: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API. (port 3000 by default)

### 2. Install the front-end
- Fork the repository: https://github.com/ChimdaProjects/SportSee
- Clone it on your computer.
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the front-end. (Port by default is 3001) 
- Check if the environment variable `REACT_APP_DATAS_MOCKED=false` (in the file `.env`)

## Launching the project without API
### 1. Install the front-end
- Fork the repository: https://github.com/ChimdaProjects/SportSee
- Clone it on your computer.
- The `npm install` command will allow you to install the dependencies.
- The `npm start` command will allow you to run the front-end. (Port by default is 3001) 
- Check if the environment variable `REACT_APP_DATAS_MOCKED=true` (in the file `.env`)

## Endpoints
We have 2 users: 
- http://localhost:3001/user/12
- http://localhost:3001/user/18

