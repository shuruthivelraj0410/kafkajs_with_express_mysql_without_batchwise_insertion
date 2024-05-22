
import  { Kafka } from 'kafkajs';
import { createData } from './query/create.js';
import Chance from 'chance';
import {createRequire} from 'module';
const require = createRequire(import.meta.url)
const prompt = require('prompt-sync')()
const n = parseInt(prompt('n data : '),10)

const chance = new Chance();

const kafka = new Kafka({
    clientId :"with chance",
    brokers:['localhost:9092']
})

const producer = kafka.producer()
const consumer = kafka.consumer({
    groupId:"123456"
});

(async()=>{
await producer.connect()
await consumer.connect()
for(let i=0;i<n;i++){
    let data = {
        name:chance.name(),
        email:chance.email()
    }
    data = JSON.stringify(data)
    await producer.send({
        topic :"abcd",
        messages:[{value:data}]
    })
}
await consumer.subscribe({
    topic:"abcd",
    fromBeginning:true
})
await consumer.run({
    eachMessage:async({topic,message})=>{
        let data = message.value
        createData(data)
    }
})

})()
