module.exports = (sequelize, DataTypes) => {
    let alias = 'Categories';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.TEXT,
            notNull: true
        }
    };
    let config = {
        tableName: 'categories',
        timestamps: false
    }
    const categories = sequelize.define(alias, cols, config)

    categories.associate = function(models){
        categories.hasMany(models.Products,{
          as:'Products',
          foreignKey:"category_id"
        })
   };
    return categories
}