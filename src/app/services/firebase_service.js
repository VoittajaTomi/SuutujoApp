/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


SuutujoApp.service("FirebaseService", function($firebaseArray){
   
   var ref = new Firebase(FIREBASE_URL+"suutujo-sets");
   
   var sets = $firebaseArray(ref);
   
   this.getAll = function(){
       return sets;
   }
   
   this.createSet = function(set){
       sets.$add(set);
   }
    
   this.updateSet = function(set){
       sets.$save(set);
   }
   
   this.deleteSet = function(set){
       sets.$remove(set);
   }
    
});