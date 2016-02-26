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
            indexes: ['hello','hey','hi','jessica'],
            action : function(i){
                artyom.say("How's going !");
            }
        },
         {
            indexes: ['whats up','what are you upto'],
            action : function(i){
                artyom.say("I am listening to your commands");
            }
        },
         {
            indexes: ['Follow','Follow me'],
            action : function(i){
                artyom.say("following");
            }
        },
             {
            indexes: ['like','do you like me','love me'],
            action : function(i){
                artyom.say("Yes Master.");
            }
        },
             {
            indexes: ['Song'],
            action : function(i){
                artyom.say("Love me like you na na love me like you do!");
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
            indexes: ['Play ','Sports','Cricket','Soccer'],
          
            action : function(i){
                artyom.say("I dont like sports");
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
    
    
function newCommands(xindexes,xaction){ 
   artyomCommands.push([
indexes:['xindexes'],
action:function(i){
    artyom.say(xaction);
}


    ])
     }];}

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