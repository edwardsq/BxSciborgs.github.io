var app = angular.module("Website", ['ngMaterial', 'nvd3']);

app.config(function($mdThemingProvider) {

	$mdThemingProvider.theme('default')
		.dark()
});

app.controller('uiCtrl', function($scope, updateService){
});
