module.exports=(sequelize,DataTypes)=>{
    let alias='User';
    let cols={
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
      },
      firstName:{
        type:DataTypes.STRING(30),
        notNull:true
      },
      lastName:{
        type:DataTypes.STRING(30),
        notNull:true
      },
      email:{
        type:DataTypes.STRING(100),
        notNull:true
      },    
      password:{
        type:DataTypes.STRING(100),
        notNull:true
      },        
      avatar:{
        type:DataTypes.TEXT,
        defaultValue: '../../public/img/users/default.png'
      }
    };
    let config={
      tableName:'users',
      paranoid:true,//esto sirve para hacer un softdelete
      deletedAt:'softdelete',
      timestamps:true
    }
  const User=sequelize.define(alias,cols,config);

  User.associate = function(models){
       User.belongsToMany(models.Products, {
        as: "products",
        through: "sales",
        foreignKey: "user_id",
        otherKey: "product_id",
        timestamps:false
    });
  }
  return User
}