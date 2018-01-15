myApp.directive('gotHouses',function() {
	return{
		restrict : 'E',
		templateUrl:'views/house-view.html'

	}
});

myApp.directive('gotChars',function(){
	return{
		restrict:'E',
		templateUrl:'views/char-view.html'
	}
});

myApp.directive('gotBooks',function(){
	return{
		return:'E',
		templateUrl:'views/book-view.html'
	}
});