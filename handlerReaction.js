const ids = require("./ids");


function addRole(reaction, user){

    var rolId = getRolId(reaction.emoji.name)

    if(rolId === null){
        return;
    }

    const guild = reaction.message.guild;

    const role = guild.roles.cache.get(rolId);
    const member = guild.members.cache.find(member => member.id === user.id);

    member.roles.add(role);

}

function removeRole(reaction, user){

    var rolId = getRolId(reaction.emoji.name)

    if(rolId === null){
        return;
    }

    const guild = reaction.message.guild;

    const role = guild.roles.cache.get(rolId);
    const member = guild.members.cache.find(member => member.id === user.id);

    member.roles.remove(role);

}

function getRolId(lang){

    var rolId = null;

    switch(lang){

        case "cssLang":
            rolId = ids.rolCss;
            break;
            
        case "rubyLang":
            rolId = ids.rolRuby;
            break;
           
        case "luaLang":
            rolId = ids.rolLua;
            break;

        case "rLang":
            rolId = ids.rolR;
            break;

        case "phpLang":
            rolId = ids.rolPhp;
            break;
            
        case "goLang":
            rolId = ids.rolGo;
            break;
            
        case "pythonLang":
            rolId = ids.rolPython;
            break;

        case "javaLang":
            rolId = ids.rolJava;
            break;

        case "htmlLang":
            rolId = ids.rolHtml;
            break;
            
        case "kotlinLang":
            rolId = ids.rolKotlin;
            break;
            
        case "jsLang":
            rolId = ids.rolJs;
            break;

        case "typescriptLang":
            rolId = ids.rolTypescript;
            break; 

        case "swiftLang":
            rolId = ids.rolSwift;
            break;
            
        case "haskellLang":
            rolId = ids.rolHaskell;
            break;
            
        case "cplusLang":
            rolId = ids.rolCplus;
            break;

        case "csharpLang":
            rolId = ids.rolCsharp;
            break;

        case "cLang":
            rolId = ids.rolC;
            break;     

    }

    return rolId;

}

module.exports = {

    addRole: addRole,
    removeRole: removeRole

}