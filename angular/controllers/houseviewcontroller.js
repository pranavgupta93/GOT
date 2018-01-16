myApp.controller('houseviewcontroller',['gotfulldata','$routeParams',function(gotfulldata,$routeParams){
	this.housedata;
	var main=this;
	var num=$routeParams.id;
	this.getdata=function(num){
		gotfulldata.gethousedetail(num)
		.then(
			function successCallback(response){
				main.housedata=response.data;
			},
			function errorCallback(response)
			{

			}
			);
	}
}]);