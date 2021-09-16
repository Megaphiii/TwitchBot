const tmi = require('tmi.js')

const options = {
    options: {
        debug: true
    },
    connections: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'xovioo',
        password: 'oauth:j4pf78mc6w3t13gcbt2odg28v3jh61'
    },
    channels: ['Schmiriii']
}

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    console.log('Verbindungsaufbau Erfolgreich')
})

client.on('chat', (channel, user, message ,self) =>{
    if(message === '!Timer2' || message === '!timer2' || message === '!Timer 2' || message === '!timer 2'){
        client.action('Schmiriii', '2 Min Timer gestartet.')
        setTimeout(timerFunc, 120000)
        function timerFunc(){
            client.action('Schmiriii', '2 Min Timer Done. :O')
        }
    }

    if(message === '!Timer5' || message === '!timer5' || message === '!Timer 5' || message === '!timer 5'){
        client.action('Schmiriii', '5 Min Timer gestartet.')
        setTimeout(timerFunc, 300000)
        function timerFunc(){
            client.action('Schmiriii', '5 Min Timer Done. :O')
        }
    }
})
