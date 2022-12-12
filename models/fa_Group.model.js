const Model = require("../database");

// List model.
class Group extends Model {
  static get tableName() {
    return "Group";
  }
}
module.exports =Group;
