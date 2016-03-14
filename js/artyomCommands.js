/**
 * artyom.js can't do anything without commands , this file will set up
 * artyom for it's final use
 * 
 * @dependencies [artyom.js]
 * @copyright 2015, Deutschland.
 * @author Carlos Delgado
 * @param {type} window
 * @Description Artyom JS Core - See Documentation for further information
 * @see http://sdkcarlos.github.io/artyom.html
 * @ignore 27.07.2015 17:17
 * @returns {object}
 */


(function(window){
    'use strict';
    
    /**
     * Example Artyom Commands
     * @type Array
     */
  


    var artyomCommands = [
        //Simple Command Example
        {
    description:"If my database contains the name of a person say something",
    smart:true,
    // Ways to trigger the command with the voice
    indexes:["Do you know who is *","I don't know who is *","Is * a good person"],
    // Do something when the commands is triggered
    action:function(i,wildcard){
        var database = ["Carlos","Bruce","David","Joseph","Kenny"];

        //If the command "is xxx a good person" is triggered do, else
        if(i == 2){
            if(database.indexOf(wildcard.trim())){
                artyom.say("I'm a machine, I dont know what is a feeling");
            }else{
                artyom.say("I don't know who is " + wildcard + " and i cannot say if is a good person");
            }   
        }else{
            if(database.indexOf(wildcard.trim())){
                artyom.say("Of course i know who is "+ wildcard + ". A really good person");
            }else{
                artyom.say("My database is not big enough, I don't know who is " + wildcard);
            }   
        }
    }
},
     {
    description:"Bring Items",
    smart:true,
    // Ways to trigger the command with the voice
    indexes:["Bring me *","Bring me the *","Bring me a *","Pick up the *","Pick up a *"],
    // Do something when the commands is triggered
    action:function(i,wildcard){
        var database = ["Cup","Book","Cane","Stick","Pen"];

        //If the command "is xxx a good person" is triggered do, else
        if(i == 2){
            if(database.indexOf(wildcard.trim())){
                artyom.say("I'm a machine, I dont know what is a feeling");
            }else{
                artyom.say("I don't know who is " + wildcard + " and i cannot say if is a good person");
            }   
        }else{
            if(database.indexOf(wildcard.trim())){
                artyom.say("Where is the "+ wildcard + " Please tell its location");

            }else{
                artyom.say("Not found " + wildcard);
            }   
        }
    }
},
        {
            indexes: ['hello'],
            action : function(i){
                artyom.say("How's going !");
            }
        },
         {
            indexes: ['take photo'],
            action : function(i){
                artyom.say("Taking Photo now!");
                  artyom.say("Say Cheese!!");
            }
        },
        //Smart Command Example
        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i){
                artyom.say("How's going !");
            }
        },
        {
            indexes: ['open google',"go to google"],
            action : function(i){
               window.location.href = "https://google.com";
            }
        },
        {
            indexes: ['what time is it'],
            action : function(i){
               alert(new Date() + " You can create something more awesome than this. This is just a demo !");
            }
        },
        //Continue adding your own commands here
    ];
    
       var ref = new Firebase("https://fypvoicerobo.firebaseio.com/");
       



ref.on("child_added", function(snapshot) {
  var comment = snapshot.val();
    addComment(comment.name, comment.comment);
    firebaseCommands(comment.name, comment.comment);
});

function addComment(name,comment) {
  var comments = document.getElementById("comments");
 comments.innerHTML = "<hr><p>" + name +" </p><p>"  + "</p>" + comments.innerHTML;
}
function firebaseCommands(name,comment){
   artyomCommands.push({
    indexes:[name],
    action:function(i){
        artyom.say(comment);
    }
   })

}
    /**
     * Artyom Commands Functions
     * 
     * @returns {artyomCommands_L13.ArtyomCommands.artyCommands}
     */
    function ArtyomCommands(){
        var artyCommands = {}; 
        
        /**
         * This functions is called in the artyom.js file
         * is necessary to load this file when you use artyom.
         * 
         * @param {type} lang
         * @returns {Array}
         */
        artyCommands.getCommands = function(lang){
            return artyomCommands;
        };
        
        
        /**
         * Create explicits commands in other views where this commands is not
         * needed all the time
         * 
         * @param {type} commands
         * @returns {Array}
         */
        artyCommands.extend = function(commands){
            commands.forEach(function(comando) {
                artyomCommands.push(comando);
            });
            
            return artyomCommands;
        };
        
        return artyCommands;
    }
    
    if(typeof(artyCommands) === 'undefined'){
        window.artyCommands = ArtyomCommands();
    }
})(window);



