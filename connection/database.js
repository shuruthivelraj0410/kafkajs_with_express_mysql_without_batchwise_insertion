import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sequelize_test','root','password',{
    host:"localhost",
    port : 3306,
    dialect :"mysql"  
})

sequelize.authenticate().then((data)=>{
    console.log("connected to db : ",data)
}).catch((e)=>{
    console.log("error in connecting db : ",e)
})

export {
    sequelize
}