//var myApp=angular.module('GOT',['ngRoute']);
myApp.controller('maincontroller',['$http','gotData',function($http,gotData) {
	var url1='https://www.anapioficeandfire.com/api/houses';
	var main=this;
	this.alldata=[];
	this.housedata;
	this.chardata;
	this.bookdata;

	
	this.gethousename=function(){
		gotData.getHouse(). then(
		function successCallback(response){
			//console.log(response);
			main.housedata=response.data;
			//console.log(response.data);
			main.alldata=main.alldata.concat(main.housedata);
			console.log(main.alldata);
		},
		function errorCallback(response)
		{
			console.log('Some error occurred');
			console.log(response);
		}
		);
	}
	this.gethousename();

	this.getcharname=function(){
		gotData.getCharacter().then(
			function successCallback(response){
				main.chardata=response.data;
				main.alldata=main.alldata.concat(main.chardata);
			},
			function errorCallback(response){
				console.log('Some error occurred');
				console.log(response);
			}
			);
	}
	this.getcharname();
	this.getbookname=function(){
		gotData.getBook().then(
			function successCallback(response){
				main.bookdata=response.data;
				main.alldata=main.alldata.concat(main.bookdata);
			},
			function errorCallback(response){
				console.log('Some error occurred');
				console.log(response);
			}
			);
	}
	this.getbookname();
}]);//end ctrl