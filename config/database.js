'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {

  connection: 'mongodb',
  mongodb: {
    client: 'mongodb',
    connectionString: 'mongodb+srv://admin:sambli-80681698@cluster0.jp11z.mongodb.net/adonis-api',
    /* connection: {
      host: 'cluster0.jp11z.mongodb.net',
      port: 27017,
      username: 'admin',
      password: 'sambli-80681698',
      database: 'sambli-fastcash',
      options: {
      
      }
    } */
  }
}
