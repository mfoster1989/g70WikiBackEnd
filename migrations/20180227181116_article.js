exports.up = function (knex, Promise) {
    return knex.schema.createTable("article", function (table) {
        table.increments("id").primary()
        table.text("description")
        table.string("url")
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists(article)
};