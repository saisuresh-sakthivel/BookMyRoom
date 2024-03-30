const { MongoClient } = require("mongodb");
const connectionString = process.env.ATLAS_URI;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: async function (callback) {
    try {
      conn = await client.connect();
    } catch (e) {
      callback(e);
    }
    dbConnection = conn.db("hoteldata");
    callback();
  },

  getDb: function () {
    return dbConnection;
  },
};
