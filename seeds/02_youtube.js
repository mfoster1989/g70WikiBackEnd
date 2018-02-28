
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("video").del()
    .then(function () {
      // Inserts seed entries
      return knex("video").insert([
        { id: 1, description: "cat fails", url: "https://www.youtube.com/watch?v=1Wh8RzcQZr4" },
        { id: 2, description: "hello my future girlfriend", url: "https://www.youtube.com/watch?v=ge7mozA-ptI" },
        { id: 3, description: "how to wash your cat", url: "https://www.youtube.com/watch?v=Xvc3QcFr9X8" }
      ]);
    })
    .then(function () {
      return knex.raw("ALTER SEQUENCE video_id_seq RESTART WITH 4;")
    })
};
