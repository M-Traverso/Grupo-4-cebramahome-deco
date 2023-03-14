if (process.env.NODE_ENV!='production') {
  require('dotenv').config()
}
module.exports={
  "development": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql",
  },
  "test": {
    "username": "root",
    "password": " ",
    "database": "productos_db",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": " ",
    "database": "productos_db",
    "host": "localhost",
    "dialect": "mysql"
  }
}
