const ids = require("./ids");

function newUser(member){

    var message = "Hola " + member.user.username + ", bienvenido a la comunidad! Esperamos que disfrutes de tu estadia en esta pseudo-cafetería. Por ser tu primer visita te otorgamos un __café gratis__ mientras usas estos **5 minutos** para poder leer las **reglas/normas** del café en el **siguiente enlace** o en el **canal de reglas del servidor**. \n\n https://github.com/ovcafe/normas \n\n *Le dejo su café* :coffee: \n *- " + member.user.username + ": Procede a leer las normas mientras toma un sorbo*";

    member.send(message);

    // Get channel #👋-hall-de-entrada
    var channel = member.guild.channels.cache.get(ids.hallEntrada);

    // Get role Miembro
    var roleMiembro = member.guild.roles.cache.get(ids.rolMiembro);

    setTimeout(function(){
        member.roles.add(roleMiembro);
        channel.send("Diganle hola a <@" + member.user.id + ">  👋. Disfruta de tu estadía");
    }, 300000);

}

exports.newUser = newUser;