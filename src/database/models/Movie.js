module.exports = (sequelize, dataTypes) => {
    const alias = 'Movie';

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: 0,
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED,
            defaultValue: null,
        },
        genre_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: null,
        },
    };

    const config = {
        tableName: 'Movies',
        timestamps: false, // si no tiene marca de tiempo debe ir en false
        underscored: true, // marcas de tiempo estan escritas con un guión bajo. Si esta camelCase no se coloca.
    };

    const Movie = sequelize.define(alias, cols, config);

    return Movie;
};
