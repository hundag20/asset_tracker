const Model = require("../database");

// List model.
class Out extends Model {
  static get tableName() {
    return "outstandingCredit";
  }
}
module.exports = Out;
