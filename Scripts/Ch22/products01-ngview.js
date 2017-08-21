angular.module("exampleApp", ["increment", "ngResource", "ngRoute"])
.constant("baseUrl", "http://localhost:2403/products/")
.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    // Tip: Always specify the value of the templateUrl with a leading / character
    $routeProvider.when("/list", {
        templateUrl: "/Scripts/Ch22/_tableView-initial.html"
    });

    $routeProvider.when("/edit", {
        templateUrl: "/Scripts/Ch22/_editorView_initial.html"
    });

    $routeProvider.when("/create", {
        templateUrl: "/Scripts/Ch22/_editorView_initial.html"
    });

    // The otherwise method is used to define a route that is used when no other one matches the current URL path.
    // It is good practice to provide such a fallback route,
    $routeProvider.otherwise({
        templateUrl: "/Scripts/Ch22/_tableView-initial.html"
    });
})
.controller("defaultCtrl", function ($scope, $http, $resource, $location, baseUrl) {
    $scope.currentProduct = null;
    $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" }, { create: { method: "POST" }, save: { method: "PUT" } });

    $scope.listProducts = function () {
        $scope.products = $scope.productsResource.query();
    }

    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {
            $scope.products.splice($scope.products.indexOf(product), 1);
        });
        $location.path("/list");
    }

    $scope.createProduct = function (product) {
        new $scope.productsResource(product).$create().then(function (newProduct) {
            $scope.products.push(newProduct);
            $location.path("/list");
        });
    }

    $scope.updateProduct = function (product) {
        product.$save();
        $location.path("/list");
    }

    $scope.editProduct = function (product) {
        $scope.currentProduct = product;
        $location.path("/edit");
    }

    $scope.saveEdit = function (product) {
        if (angular.isDefined(product.id)) {
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }
        $scope.currentProduct = {};
    }

    $scope.cancelEdit = function () {
        if ($scope.currentProduct && $scope.currentProduct.$get) {
            $scope.currentProduct.$get();
        }
        $scope.currentProduct = {};
        $location.path("/list");
    }
    $scope.listProducts();
});