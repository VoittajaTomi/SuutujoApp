/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


SuutujoApp.controller("SetController", function($scope, $timeout, FirebaseService){
   
    $scope.sets = FirebaseService.getAll();
    
    
    var tick = function(){
        $scope.now_time = moment().calendar();
        $timeout(tick,1000);
    }
    
    $timeout(tick,1000);
    
    var dateTimeNow = function(){
        
        return moment.unix(new Date());
        
    }
    
    
    $scope.addSet = function(){
        
        var set = { name: $scope.set_name, times: $scope.set_times, weight: parseInt($scope.set_weight), reps: parseInt($scope.set_reps), datetime: moment().unix(new Date()) }
        
        FirebaseService.createSet(set);
        
    }
    
});