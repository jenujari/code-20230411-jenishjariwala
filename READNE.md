## Health API

Inital steps.

```
npm install

```



#### Inital database setup
Steps to perform for creating migration and seed data

```
npx sequelize-cli migration:create --name users
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name entries
npx sequelize-cli db:seed --seed 20230410120652-entries
```

#### Health risk and BMI category

```
npx sequelize-cli migration:create --name health_cart
npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name health_cart
npx sequelize-cli db:seed --seed  20230410124038-health_cart
```