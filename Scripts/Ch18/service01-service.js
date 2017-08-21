var baseLogger = function () {
    this.messageCount = 0;
    this.log = function (msg) {
        console.log(this.msgType + ": " + (this.messageCount++) + " " + msg);
    }
};

var debugLogger = function () { };
debugLogger.prototype = new baseLogger();
debugLogger.prototype.msgType = "Debug";

var errorLogger = function () { };
errorLogger.prototype = new baseLogger();
errorLogger.prototype.msgType = "Error";

angular.module("customServices", [])
    .service("logService", debugLogger)
    .service("errorService", errorLogger);


/*
var Foo = function () {
    var privateVar = "buz";
    function privateMethod() { return privateVar; };
    this.bar = privateMethod();
};

var fooFactory = {
    create: function () { return new Foo(); }
};

var f = fooFactory.create();
console.log(f instanceof Foo);
*/