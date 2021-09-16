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
    channels: ['megaphiii']
}

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    console.log('Verbindungsaufbau Erfolgreich')
})

client.on('chat', (channel, user, message ,self) =>{
    if(message === '!Timer2' || message === '!timer2'){
        client.action('megaphiii', '2 Min Timer gestartet.')
        setTimeout(timerFunc, 20000)
        function timerFunc(){
            client.action('megaphiii', '2 Min Timer Done.')
        }
    }

    if(message === '!Timer5' || message === '!timer5'){
        client.action('megaphiii', '5 Min Timer gestartet.')
        setTimeout(timerFunc, 5000)
        function timerFunc(){
            client.action('megaphiii', '5 Min Timer Done.')
        }
    }
})