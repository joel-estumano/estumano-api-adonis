'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.string('stack')
      table.string('color')
      table.boolean('isDeleted').defaultTo(false)
      table.boolean('active').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
