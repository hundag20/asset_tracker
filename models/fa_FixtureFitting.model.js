const Model = require("../database");

// List model.
class FixtureFitting extends Model {
  static get tableName() {
    return "Fixiture & fitting";
  }
}
module.exports = FixtureFitting;
