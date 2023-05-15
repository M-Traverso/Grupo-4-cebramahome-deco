module.exports = (sequelize, DataTypes) => {
    let alias = 'Email';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        correo: {
            type: DataTypes.STRING(100),
        },
    };
    let config = {
        tableName: 'emails',
        timestamps: false
    }
    const email = sequelize.define(alias, cols, config)

    return email
}