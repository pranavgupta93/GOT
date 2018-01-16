myApp.controller('bookviewcontroller',['gotfullData','$routeParams',function(gotfullData,$routeParams) {
	this.bookdata;
	var main=this;
	var num=$routeParams.id;
	this.getdata=function(num) {
		gotfullData.getbookdetail(num)
		.then(
			function successCallback(response){
				main.bookdata=response.data;
			},
			function errorCallback(response){

			}
			);
	}
	this.getdata(num);
}]);