## Health API

Inital steps.

```
npm install
```
---

To run inital migration and seeding
```
npm run migrate
```
---

To Test the test cases 

```
npm run test
```
---

To start server
```
npm run dev  
```
---

There are two routes made in the express app

One is `GET /cron` that run throug the all user entries and based on thier BMI it will map risk id and bmi category id.
This is made to reduce the computational time while calculating the stuff during the run time.

Second API is `Get /usershealth` that featch all the user along with thier risk and bmi category details.


Use following two url in sequnce as mentioned.

http://localhost:5000/cron

http://localhost:5000/usershealth
