'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('login', 50).notNullable().unique()
      table.string('password', 60).notNullable()
      table.boolean('active').defaultTo('true')
      table.string('role', 7).notNullable()
      table.string('email', 254).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
