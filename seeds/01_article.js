
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("article").del()
    .then(function () {
      // Inserts seed entries
      return knex("article").insert([
        { id: 1, description: "Malcolm's Github", url: "http://github.com/mfoster1989" },
        { id: 2, description: "Malcolm's LinkedIn", url: "http://linkedin.com/in/mfoster1989" },
        { id: 3, description: "Malcolm's website", url: "http://malcolmfoster.net" }
      ]);
    })
    .then(function () {
      return knex.raw("ALTER SEQUENCE article_id_seq RESTART WITH 4;")
    })
};