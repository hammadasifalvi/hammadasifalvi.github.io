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
  
function facesad(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
nRef.set("sad");
}
function facehappy(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
nRef.set("happy");
}
function facewow(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
nRef.set("wow");
}
function facetalk(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
nRef.set("talk");
}
function faceninja(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
nRef.set("ninja");
}
function facecute(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
nRef.set("cute");
}
function clearspeech(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/speech');
nRef.set(" ");
}
    var artyomCommands = [
        //Simple Command Example
        {
            indexes: ['hello'],
            action : function(i){
                 facetalk();
                artyom.say("How's going !");
               
                facehappy();
            }
        },
          {
            indexes: ['Are you Happy'],
            action : function(i){
                artyom.say("Yes master I am Happy");
                var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
facetalk();
                facehappy();
            }
        },
         {
            indexes: ['ninja'],
            action : function(i){
                artyom.say("Ninja Mode on");
                var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
facetalk();
                faceninja();
            }
        },
         {
            indexes: ['cute'],
            action : function(i){
                artyom.say("Cute Mode on");
                var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
facetalk();
                facecute();
            }
        },
{
            indexes: ['Are you Sad'],
            action : function(i){
                artyom.say("Yes master I am Sad");
                var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
facetalk();
                facesad();
            }
        },
        {
            indexes: ['Are you Amazed'],
            action : function(i){
                artyom.say("Yes master I am Amazed");
                var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
facetalk();
                facewow();
            }
        },
        //Smart Command Example
        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i){
                 facetalk();
                artyom.say("How's going !");
               
                facewow();
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
    
       var ref = new Firebase("https://fypvoice.firebaseio.com/");
       



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
        facehappy();
         facetalk();
        artyom.say(comment);
         clearspeech();
       
              

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


