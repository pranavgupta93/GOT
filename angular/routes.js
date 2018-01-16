myApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl : 'views/index-view.html',
		controller: 'maincontroller',
		controllerAs:'mainctr'
	})
	.when('/char/:id',{
		templateUrl : 'views/char-detail-view.html',
		controller  : 'charviewcontroller',
		controllerAs: "charview" 
	})
	.when('/house/:id',{
		templateUrl : 'views/house-detail-view.html',
		controller: 'houseviewcontroller',
		controllerAs: "houseview" 
	})
	.when('/book/:id',{
		templateUrl:'views/book-detail-view.html',
		controller:'bookviewcontroller',
		controllerAs:'bookview'
	})
	;
}])