myApp.controller('charviewcontroller',['gotfullData','$routeParams',function(gotfullData,$routeParams) {
	this.chardata;
	var main=this;
	var num=$routeParams.id;
	//console.log('hello');
	this.getdata=function(num){
		gotfullData.getchardetail(num).then(
			function successCallback(response){
				main.chardata=response.data;
				console.log(main.chardata);
			},
			function errorCallback(response){
				console.log('Some error occurred');
				console.log(response);
			}
			);
	}
	this.getdata(num);
}]);