var slider = document.getElementById('font-size');
// var slider = document.getElementById('font-size');
  var p = document.querySelector(".tab");
slider.addEventListener('input', function() {
    var size = slider.value;
    // this sets the body's font size property, but you can set whatever you need to
    p.style.fontSize = size + "px";
});

const app=angular.module('myapp',[]);
app.controller('AddtaskController',function($scope,$rootScope){
     var arr=[];
    $scope.add=function(){
      arr.push($scope.data);
      $scope.tasks=arr;
      $scope.data=null;    
  }
  $scope.deleteObject=function(index){
      confirm('Are you sure') && $scope.tasks.splice(index,1);
  }
});