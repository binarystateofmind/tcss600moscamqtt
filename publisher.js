// MQTT publisher
var mqtt = require('mqtt')

var client = mqtt.connect('mqtt:localhost:1883')
var topic = 'test'

var message = 'Hello World'

client.on('connect', ()=> {
    setInterval(() => {
        client.publish(topic, message)
        console.log("Message Sent", message)
    },5000);
})