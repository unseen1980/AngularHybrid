/// <reference path="../typings/angularjs/angular.d.ts" />
"use strict";
var hybridApp = angular.module('hybridApp', []);
hybridApp.controller('hybridCtrl', function hybridCtrl($scope) {
    $scope.msg = "Angular1";
}).directive('angularOne', function () {
    return {
        template: '<h1>Hello from {{msg}}</h1>'
    };
});
var upgrade_1 = require('@angular/upgrade');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
var upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
upgradeAdapter.bootstrap(document.body, ['hybridApp']);
//# sourceMappingURL=main.js.map