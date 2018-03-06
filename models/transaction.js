module.exports = function (sequelize, DataTypes) {
    var Transaction = sequelize.define("Transaction", {
        due_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        is_returned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    Transaction.associate = function (models) {
        // foriegn key linking to owner
        Transaction.belongsTo(models.User, {
            foreignKey: {
                name:'owner_id',
                allowNull: false
            }
        });
        Transaction.belongsTo(models.Item, {
            foreignKey: {
                name: 'item_id',
                allowNull: false
            }
        });
        Transaction.belongsTo(models.User, {
            foreignKey: {
                name: 'borrower_id',
                allowNull: false
            }
        });
    };
   

    return Transaction;
};
