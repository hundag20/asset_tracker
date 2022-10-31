const Model = require("../database");

// List model.
class Vehicle extends Model {
  static get tableName() {
    return "1vehicles";
  }
}
module.exports = Vehicle;
