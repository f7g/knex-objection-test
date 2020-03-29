var { Model } = require("objection");

class UserAccountModel extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "user_accounts";
  }
}

export default UserAccountModel;
