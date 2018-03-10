module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING
    });
    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Item, {
            onDelete: "cascade"
        });
        User.hasMany(models.Transaction, {
            onDelete: "cascade"
        });
    };
    return User;
};
