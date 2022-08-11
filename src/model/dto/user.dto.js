const User = require('../user');
const UserDto = (result, index = 0) => {
    return User(
        result.rows[index].id,
        result.rows[index].username,
        result.rows[index].email,
    )
}
module.exports = UserDto;
