var app = angular.module('app', []);

//Create MathService (Custom service)
app.service('MathService', function() {
    this.add = function(a, b) { 
    	return a + b 
    };
    this.subtract = function(a, b) { 
    	return a - b 
    };
    this.multiply = function(a, b) { 
    	return a * b 
    };
    this.divide = function(a, b) { 
    	return a / b 
    };
});

//Create CalculatorService (Custom service) and add MathService as parameter
app.service('CalculatorService', function(MathService){
    this.square = function(a) { 
    	return MathService.multiply(a,a); 
    };
    this.cube = function(a) { 
    	return MathService.multiply(a, MathService.multiply(a,a)); 
    };
});

// add CalculatorService as a service
app.controller('CalculatorController', function($scope, CalculatorService) {
    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    }

    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }
});