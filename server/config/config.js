var config = {
    PORT : 3306,
    HOST : 'localhost',
    USER : 'root',
    PASSWORD : 'Midas2001',
    DB : 'csis_279_db',
    multipleStatements: true ,
    mongoUri:`mongodb://localhost:27017/hirePT`
  }
  
  module.exports = {
    config: config,
    JWT_SECRET: 'SPSJwtSec',
  } ;