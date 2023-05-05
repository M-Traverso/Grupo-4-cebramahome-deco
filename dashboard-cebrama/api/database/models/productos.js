module.exports=(sequelize,DataTypes)=>{
    let alias='Products';
    let cols={
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      name:{
        type:DataTypes.STRING(100),
        notNull:true
      },
      description:{
        type:DataTypes.TEXT,
        notNull:true,
      },
      image:{
        type:DataTypes.TEXT,
        defaultValue: '../../public/img/default.png'
      },
      price:{
        type:DataTypes.DECIMAL(5,0),
        notNull:true,
      },
      category_id:{
        type:DataTypes.INTEGER
      }

    };
    let config={
      tableName:'products',
      paranoid:true,//esto sirve para hacer un softdelete
      deletedAt:'softdelete',
      timestamps:true
    }
  const products=sequelize.define(alias,cols,config);

  products.associate = function(models){
       products.belongsTo(models.Categories,{
         as:'Categories',
         foreignKey:"category_id"
       })
       products.belongsToMany(models.User, {
        as: "users",
        through: "sales",
        foreignKey: "product_id",
        otherKey: "user_id",
        timestamps:false
      });
  }
  return products
}