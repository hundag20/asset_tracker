const Model = require("../database");

// List model.
class FreeStandEquip extends Model {
  static get tableName() {
    return "Free stand equipment";
  }
}
module.exports = FreeStandEquip;
