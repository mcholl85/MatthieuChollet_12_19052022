<p  align="center">

<img  src="https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png">

</p>

# SportSee

## Technologies

- HTML
- CSS
- JS
- RECHART
- REACT

## Prerequisites

- [NodeJS (**version 17.0.1**)](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Setup

### Back-End - Micro API

#### Installation

1. Clone the repository of the Back-End :
   ```
   git clone https://github.com/mcholl85/P9-front-end-dashboard.git
   ```
2. Install the dependencies with :
   ```
   npm install
   ```
3. Launch the micro API (default port: 3000) :
   ```
   npm run start
   ```

#### Endpoints

##### Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

##### Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

### Front-End

#### Installation

1. Clone the repository of the Front-End :
   ```
   git clone https://github.com/mcholl85/MatthieuChollet_12_19052022
   ```
2. Install the dependencies with :
   ```
   npm install
   ```
3. Launch the project (default port: 3001) :
   ```
   npm run start
   ```

## Author

Matthieu Chollet
