const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://jeseop:0749@cluster0.ymwrffr.mongodb.net/test";

module.exports = function (callback) {
  return MongoClient.connect(uri, callback);
};
