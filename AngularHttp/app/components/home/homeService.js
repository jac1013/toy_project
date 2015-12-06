angular
	.module('angularHttp')
	.service('HomeService', HomeService);

HomeService.$inject = ['$http'];

function HomeService($http){
	var vm = this;
	vm.getMethod = 'GET';
	vm.url = 'http://www.omdbapi.com/?t=batman&y=2015&plot=full&r=json';
	vm.request = Request;

	/**
	 * Function that applies the http service to do a request
	 * Defaults to the omdb API
	 */
	function Request(){
		return $http({
			method: vm.getMethod,
			url: vm.url
		});
	}
}