//var myApp=angular.module('GOT',['ngRoute']);
myApp.controller('maincontroller',['$http','gotData',function($http,gotData) {
	var url1='https://www.anapioficeandfire.com/api/houses';
	var main=this;
	this.alldata=[];
	this.housedata;

	//console.log('hello');
	this.gethousename=function(){
		gotData.getHouse(). then(
		function successCallback(response){
			//console.log(response);
			main.housedata=response.data;
			//console.log(response.data);
			main.alldata.push(main.housedata);
			//console.log(main.alldata[0][0].name);
		},
		function errorCallback(response)
		{
			console.log('err');
		}
		);
	}
	this.gethousename();
}]);//end ctrl