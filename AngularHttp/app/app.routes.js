angular
	.module('angularHttp')
	.config(['$routeProvider', function($routeProvider){
			$routeProvider
			.when('/home', {
				templateUrl: 'components/home/homeView.html',
				controller: 'HomeController'
			})
			.otherwise({
				redirectTo: '/home'
			});
		}]);