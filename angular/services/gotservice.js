myApp.service('gotData',['$http',function($http) {
	var urlHouse='https://www.anapioficeandfire.com/api/houses?page=1&pageSize=30';
	var urlCharacter='https://www.anapioficeandfire.com/api/characters?page=1&pageSize=30';
	var urlBook='https://www.anapioficeandfire.com/api/books?page=1&pageSize=30';
	this.getHouse=function(){
		return $http.get(urlHouse);
	}
	this.getCharacter=function(){
		return $http.get(urlCharacter);
	}
	this.getBook=function(){
		return $http.get(urlBook);
	}
}]);