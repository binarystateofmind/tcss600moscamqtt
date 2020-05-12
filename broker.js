// MQTT broker
var mosca = require('mosca')
var settings = {port: 1883}
var broker = new mosca.Server(settings)

broker.on('ready', ()=> {
    console.log('broker is ready')
})

broker.on('published', (packet)=> {
    console.log(`This is the payload ${packet.payload.toString()}`)
})