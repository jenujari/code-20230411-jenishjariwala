## Health API

Inital steps.

```
npm install

```



#### Inital database setup
Steps to perform for creating migration and seed data

```
npx sequelize-cli migration:create --name users
npx sequelize-cli seed:generate --name entries
npx sequelize-cli db:seed --seed 20230410120652-entries
```