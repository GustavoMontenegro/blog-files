(function () {
    'use strict';

    angular.module('registration', [])

        .controller('UserController', function ($scope, $http) {

            $scope.user = {username: '', password: ''};

            $http.get('api/user').then(function (response) {
                $scope.users = response.data;
            });

            $scope.save = function () {
                $http.post('api/user', $scope.user).then(function (response) {
                    $scope.users.push(response.data);
                });

                $scope.user = {username: '', password: ''};
                $scope.statusPassword = {};
            };

            $scope.passwordValidate = function () {
                $scope.statusPassword = {};

                if ($scope.user.password && $scope.user.password.length >= 6) {
                    $scope.statusPassword.cssClass = 'has-success';
                    $scope.statusPassword.icon = 'glyphicon-ok';
                    $scope.statusPassword.msg = 'Senha forte';
                }else {
                    $scope.statusPassword.cssClass = 'has-error';
                    $scope.statusPassword.icon = 'glyphicon-remove';
                    $scope.statusPassword.msg = 'Senha fraca';
                }
            };
        });

})();

