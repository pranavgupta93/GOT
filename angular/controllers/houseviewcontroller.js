myApp.controller('houseviewcontroller',['gotfullData','$routeParams',function(gotfullData,$routeParams){
	this.housedata;
	var main=this;
	/*this.ind=1;
	this.incrementindex=function(){
		console.log('called');
		main.ind++;
	}*/

	var num=$routeParams.id;
	this.getdata=function(num){
		gotfullData.gethousedetail(num)
		.then(
			function successCallback(response){
				main.housedata=response.data;
			},
			function errorCallback(response)
			{
				console.log('Some error occurred');
				console.log(response);
			}
			);
	}
	this.getdata(num);
}]);