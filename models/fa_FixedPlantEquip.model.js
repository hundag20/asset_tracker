const Model = require("../database");

// List model.
class FixedPlantEquip extends Model {
  static get tableName() {
    return "Fixed Plant & Equipment";
  }
}
module.exports = FixedPlantEquip;
