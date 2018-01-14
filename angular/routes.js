myApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl : 'views/index-view.html',
		controller: 'maincontroller',
		controllerAs:'mainctr'
	});
}])