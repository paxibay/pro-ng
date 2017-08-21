angular.module("exampleApp", ["increment", "ngResource", "ngRoute"])
.constant("baseUrl", "http://localhost:2403/products/")
.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    //$routeProvider.when("/list", {
    //    templateUrl: "/Scripts/Ch22/_tableView_routeParameters.html"
    //});

    $routeProvider.when("/edit/:id", {
        templateUrl: "/Scripts/Ch22/_editorView_initial.html",
        controller: "editCtrl"
    });

    //$routeProvider.when("/edit/:id/:data*", {
    //    templateUrl: "/Scripts/Ch22/_editorView_initial.html"
    //});

    $routeProvider.when("/create", {
        templateUrl: "/Scripts/Ch22/_editorView_initial.html",
        controller: "editCtrl"
    });

    $routeProvider.otherwise({
        templateUrl: "/Scripts/Ch22/_tableView_routeParameters.html"
    });


})
.controller("defaultCtrl", function ($scope, $http, $resource, $location, baseUrl) {
    $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" }, { create: { method: "POST" }, save: { method: "PUT" } });

    $scope.listProducts = function () {
        $scope.products = $scope.productsResource.query();
    }

    $scope.createProduct = function (product) {
        new $scope.productsResource(product).$create().then(function (newProduct) {
            $scope.products.push(newProduct);
            $location.path("/list");
        });
    }

    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {
            $scope.products.splice($scope.products.indexOf(product), 1);
        });
        $location.path("/list");
    }

    $scope.listProducts();
})
.controller("editCtrl", function ($scope, $routeParams, $location) {
    $scope.currentProduct = null;

    if ($location.path().indexOf("/edit/") == 0) {
        var id = $routeParams["id"];
        for (var i = 0; i < $scope.products.length; i++) {
            if ($scope.products[i].id == id) {
                $scope.currentProduct = $scope.products[i];
                break;
            }
        }
    }

    $scope.cancelEdit = function () {
        if ($scope.currentProduct && $scope.currentProduct.$get) {
            $scope.currentProduct.$get();
        }
        $scope.currentProduct = {};
        $location.path("/list");
    }

    $scope.updateProduct = function (product) {
        product.$save();
        $location.path("/list");
    }

    $scope.saveEdit = function (product) {
        if (angular.isDefined(product.id)) {
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }
        $scope.currentProduct = {};
    }
});