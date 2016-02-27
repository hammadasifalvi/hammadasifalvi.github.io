var myApp=angular.module('myApp',[]);


myApp.controller('mainController',['$scope',function($scope){

    $scope.name='Hammad';
   

}]);
myApp.controller('secondController',['$scope',function($scope){

    $scope.name='Sara';
   

}]);

(function(window){
    'use strict';
    
    /**
     * Example Artyom Commands
     * @type Array
     */
    var artyomCommands = [
        //Simple Command Example
        {
            indexes: ['hello'],
            action : function(i){
                artyom.say("How's going !");
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