const ids = require("./ids");

// Prefix commands
const prefix = "!";

function analizar(message){

    if (checkComm(message,"cuenta")){
        limpiar(message);
    }

}

function limpiar(message){

    if(ids.mesas.some(x => x === message.channel.id)){

        purge(message);
        var total = (Math.random() * (3000.00 - 50.00) + 50.00).toFixed(2);
        message.channel.send("<@" + message.author + "> el total es de: AR$" + total + " Dejame una propina rata! :mouse:")
            .then(msg => msg.delete({timeout: 60000}));

    }

}

async function purge(message){

    message.delete();
    let fetched = await message.channel.messages.fetch();
    message.channel.bulkDelete(fetched, true)
        .catch(error => message.channel.send("Error: " + error));

}

function checkComm(message,str){
    return message.content.startsWith(prefix + str);
}

exports.analizar = analizar;
