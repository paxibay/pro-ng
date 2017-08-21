angular.module("exampleApp", ["increment", "ngResource"])
.constant("baseUrl", "http://localhost:2403/products/")
.controller("defaultCtrl", function ($scope, $http, $resource, baseUrl) {
    $scope.displayMode = "list";
    $scope.currentProduct = null;

    // The result from calling the $resource service function is an access object that can be used to query and modify the server data using the methods
    $scope.productsResource = $resource(baseUrl + ":id", { id: "@id" });

    $scope.listProducts = function () {
        //$scope.products = $scope.productsResource.query();
        $scope.products = $scope.productsResource.query(function (todos) {
            //do something with todos
            angular.forEach(todos, function (todo) {
                if (todo.name == "qq") {
                    todo.name += ' as';
                    todo.$save();
                }
            });
        });
    }

    // param product is Resource opbject 
    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {
            $scope.products.splice($scope.products.indexOf(product), 1);
        });
        $scope.displayMode = "list";
    }

    // Using the new keyword on the access object provides the means to apply the $resource methods to data objects so that they can be saved to the server.
    $scope.createProduct = function (product) {
        new $scope.productsResource(product).$save().then(function (newProduct) {
            $scope.products.push(newProduct);
            $scope.displayMode = "list";
        });
    }

    $scope.updateProduct = function (product) {
        product.$save();
        $scope.displayMode = "list";
    }

    $scope.editOrCreateProduct = function (product) {
        $scope.currentProduct = product ? product : {};
        $scope.displayMode = "edit";
    }

    $scope.saveEdit = function (product) {
        if (angular.isDefined(product.id)) {
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }
    }

    $scope.cancelEdit = function () {
        if ($scope.currentProduct && $scope.currentProduct.$get) {
            $scope.currentProduct.$get();
        }
        $scope.currentProduct = {};
        $scope.displayMode = "list";
    }

    $scope.listProducts();
});