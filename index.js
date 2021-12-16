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
    channels: ['saqzzy']
}

const client = new tmi.client(options);
var ergAnt;
var erg;
client.connect();

client.on('connected', (address, port) => {
    console.log('Verbindungsaufbau Erfolgreich')
})

client.on('chat', (channel, user, message ,self) =>{
    if(message == '!Timer2' || message == '!timer2' || message == '!Timer 2' || message == '!timer 2'){
        client.action('saqzzy', '2 Min Timer gestartet.')
        setTimeout(timerFunc, 120000)
        function timerFunc(){
            client.action('saqzzy', '2 Min Timer Done. :O')
        }
    }

    if(message == '!Timer5' || message == '!timer5' || message == '!Timer 5' || message == '!timer 5'){
        client.action('saqzzy', '5 Min Timer gestartet.')
        setTimeout(timerFunc, 300000)
        function timerFunc(){
            client.action('saqzzy', '5 Min Timer Done. :O')
        }
    }
    
    if(message == '!Miri' || message == '!miri' || message == '!mirjam' || message == '!Mirjam' || message == '!mirii' || message == '!Mirii') {
        client.action('saqzzy', 'Miri ist cute. <3')
    }
    
    if(message == '!cute') {
        client.action('saqzzy', 'Miri <3 Philip')
    }
    
    if(message == '!bra') {
        var x = Math.floor(Math.random() * (100 - 1) + 1);
        client.action('saqzzy', 'Du bist zu ' + x + '% Bratan B)')
    }
    
    if(message == '!rechnung') {
        var x = Math.floor(Math.random() * (4 - 1) + 1);
        if(x == 1){
            var r1 = Math.floor(Math.random() * (1000 - 1) + 1);
            var r2 = Math.floor(Math.random() * (1000 - 1) + 1);
            client.action('saqzzy', 'Rechenaufgabe: ' + r1 + ' + ' + r2 + ' = ?')
            erg = r1+r2;
        }
        if(x == 2){
            var r1 = Math.floor(Math.random() * (500 - 1) + 1);
            var r2 = Math.floor(Math.random() * (500 - 1) + 1);
            client.action('saqzzy', 'Rechenaufgabe: ' + r1 + ' - ' + r2 + ' = ?')
            erg = r1-r2;
        }
        if(x == 3){
            var r1 = Math.floor(Math.random() * (15 - 1) + 1);
            var r2 = Math.floor(Math.random() * (15 - 1) + 1);
            client.action('saqzzy', 'Rechenaufgabe: ' + r1 + ' * ' + r2 + ' = ?')
            erg = r1*r2;
        }
        
        for(var i=0;i<20;i++){
            setTimeout(add, 1000)
            function add(){
                if(i == 0){
                    console.log('Start');
                }
                if(i == 10){
                    console.log('10 SEK');
                }
            }
            
        }
    }
    
    if(message == erg){
        ergAnt = message;
        client.action('saqzzy', user + ' hatte am schnellsten die richtige Antwort!')
        erg = 123123123;
    }
})
