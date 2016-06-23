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
  

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-79380214-1', 'auto');
  ga('send', 'pageview');

console.log('Event Created');
ga('send', {
  hitType: 'eventnew',
  eventCategory: 'hello',
  eventAction: 'action',
  eventLabel: 'label'
});
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
function openGripper(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/speech');
nRef.set("open_gripper");
}
function closeGripper(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/speech');
nRef.set("close_gripper");
}
function neutralGripper(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/speech');
nRef.set("neutral_gripper");
}
function rightUp(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/speech');
nRef.set("right_up");
}
function resting(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/speech');
nRef.set("resting");
}
function pick(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/speech');
nRef.set("pick");
}
function clearspeech(){
                    var nRef = new Firebase('https://robotface.firebaseio.com/speech');
nRef.set(" ");
}


function eventGeneration(event,cat,action,label){
ga('send', {
  hitType: event,
  eventCategory: cat,
  eventAction: action,
  eventLabel: label
});
}
    var artyomCommands = [
        //Simple Command Example
        {
            indexes: ['hello'],
            action : function(i){
                 facetalk();
                artyom.say("How's going !");
               
                facehappy(); 
		eventGeneration('Speech','Speech','hello','label');

           
            }
        },
           {
            indexes: ['hi'],
            action : function(i){
                 facetalk();
                artyom.say("How's going !");
               
                facehappy();
		eventGeneration('Speech','Speech','How is Going','label');

           
            }
        },
         {
        indexes: ['recognize'],
            action : function(i){
                 facetalk();
                artyom.say("recognizing");

               var getRef = new Firebase('https://fypvoicerobo.firebaseio.com/rosdata');
getRef.on("value",function(snapshot){
artyom.say("I see "+snapshot.val());
eventGeneration('Recognize','Speech','Recognition',snapshot.val());
},function (errorObject) {
    // body...
    console.log("Error");
});

                
            }
        },
        {
        indexes: ['open'],
            action : function(i){
                 facetalk();
                artyom.say("Openning Gripper");
eventGeneration('Gripper','Open','Open','label');

               
                openGripper();
            }
        },
        {
         indexes: ['close'],
            action : function(i){
                 facetalk();
                artyom.say("Close Gripper");
               eventGeneration('Gripper','Movement','Close','label');

                closeGripper();
            }
        },
         {
         indexes: ['easy'],
            action : function(i){
                 facetalk();
                artyom.say("Easy Gripper");
               eventGeneration('Gripper','Movement','Easy','label');

                neutralGripper();
            }
        },
         {
         indexes: ['raise'],
            action : function(i){
                 facetalk();
                artyom.say("Raising Arm");
               eventGeneration('Gripper','Movement','Raise','label');

                rightUp();
            }
        },
        {
         indexes: ['lower'],
            action : function(i){
                 facetalk();
                artyom.say("Lowering Arm");
                eventGeneration('Arm','Movement','Lower','label');

              
                resting();
            }
        },
         {
         indexes: ['Coca-Cola Can'],
            action : function(i){
                 facetalk();
                artyom.say("picking the can");
 eventGeneration('Arm','picking','can','label');

              
               
                pick();
            }
        },
          {
            indexes: ['Are you Happy'],
            action : function(i){
                artyom.say("Yes master I am Happy");
                var nRef = new Firebase('https://robotface.firebaseio.com/mouth');
facetalk();
                facehappy();
 eventGeneration('mood','happy','happy','label');
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
 eventGeneration('mood','sad','sad','label');
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


