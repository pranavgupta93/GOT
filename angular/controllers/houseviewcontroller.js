myApp.controller('houseviewcontroller',['gotfullData','$routeParams',function(gotfullData,$routeParams){
	this.housedata;
	var main=this;
	var num=$routeParams.id;
	this.getdata=function(num){
		gotfullData.gethousedetail(num)
		.then(
			function successCallback(response){
				main.housedata=response.data;
			},
			function errorCallback(response)
			{
				console.log('error');
				console.log(response);
			}
			);
	}
	this.getdata(num);
}]);