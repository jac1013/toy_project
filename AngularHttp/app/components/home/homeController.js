angular
	.module('angularHttp')
	.controller('HomeController', HomeController);

HomeController.$inject = ['HomeService'];

function HomeController(HomeService){
	var vm = this;
	vm.url;
	vm.doRequest = DoRequest;
	vm.response;

	/**
	 * This function does a request to an URL that the user provides in the homeView
	 * using the response variable inside this controller the response can be accessed
	 * in the view
	 * Depends on the HomeService to do the request
	 */
	function DoRequest(){
		// If the user provides an URL then the HomeService will use that URL instead
		// The HomeService defaults to the omdb API URL using a default query
		if(vm.url != null){
			HomeService.url = vm.url;
		}
		HomeService.request().then(function(data){
			vm.response = data;
		});
	}
}