import { DataTypes } from 'sequelize';
import {sequelize} from '../connection/database.js';

const chance1 = sequelize.define('chance',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
       type:DataTypes.STRING,
       allowNull:false 
    }
})
sequelize.sync().then((data)=>{
    // console.log(data)
}).catch((e)=>{
    console.log(e)
})
export {
    chance1
}