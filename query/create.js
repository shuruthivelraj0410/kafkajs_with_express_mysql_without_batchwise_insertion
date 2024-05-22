import { chance1 } from "../models/chance.js";


const createData = async(val)=>{
  let args = val.toString()
  args = JSON.parse(args)
    await chance1.findOrCreate({
        where:{
            email : args.email
        },
        defaults:{
            name : args.name,
            email : args.email
        }
    })
}

export{
    createData
}