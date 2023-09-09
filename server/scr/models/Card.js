const {DataTypes}=require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define(
        'Card',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
            },
            name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            status:{
                type: DataTypes.STRING,
                allowNull: false, 
            },
            species:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            origin:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            gender:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            image:{
                type: DataTypes.STRING,
                allowNull: false,
                isURL: true,
            },
        },
        {timestamp: false},
    );
};