myApp.service('gotData',['$http',function($http) {
	var urlHouse='https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50';
	var urlCharacter='https://www.anapioficeandfire.com/api/characters?page=1&pageSize=60';
	var urlBook='https://www.anapioficeandfire.com/api/books?page=1&pageSize=25';
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
myApp.service('gotfullData',['$http',function($http){
	var urlHouse='https://www.anapioficeandfire.com/api/houses/';
	var urlCharacter='https://www.anapioficeandfire.com/api/characters/';
	var urlBook='https://www.anapioficeandfire.com/api/books/';
	this.getbookdetail=function(num)
	{
		return $http.get(urlBook+num);
	}
	this.getchardetail=function(num)
	{
		return $http.get(urlCharacter+num);
	}
	this.gethousedetail=function(num)
	{
		return $http.get(urlHouse+num);
	}
}]);