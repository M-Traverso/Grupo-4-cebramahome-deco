
module.exports={
  "development": {
    "username":  process.env.USERN ||  "u32jjbp8ybomoguo",
    "password":  process.env.PASSWORD ||  "LSYz2uUOuPhZ8u4FXARI",
    "database":  process.env.DATABASE ||  "bxv7weneyybimckcu43s",
    "host":  process.env.HOST ||  "bxv7weneyybimckcu43s-mysql.services.clever-cloud.com",
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
