const Model = require("../database");

// List model.
class CompHard extends Model {
  static get tableName() {
    return "Computer Hardware";
  }
}
module.exports = CompHard;
