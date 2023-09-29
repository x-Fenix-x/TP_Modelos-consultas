module.exports = (sequelize, dataTypes) => {
    const alias = 'Genre';

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true,
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1,
        },
    };

    const config = {
        tableName: 'Genres',
        timestamps: false,
        underscored: true,
    };

    const Genre = sequelize.define(alias, cols, config);

    return Genre;
};
