module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
            len: [1]
            }
        },
        is_borrowed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    Item.associate = function (models) {
     //Foreign key to link item to it's owner
        Item.belongsTo(models.User, {
            foreignKey: {
                name:'owner_id',
                allowNull: false
            }
        });
    };

    return Item;
};