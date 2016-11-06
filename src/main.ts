/// <reference path="../typings/angularjs/angular.d.ts" />

var hybridApp = angular.module('hybridApp', []);

hybridApp.controller('hybridCtrl', function hybridCtrl($scope) {
  $scope.msg = "Angular1";
}).directive('angularOne', function () {
  return {
    template: '<h1>Hello from {{msg}}</h1>'
  };
});

import { UpgradeAdapter } from '@angular/upgrade';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

const upgradeAdapter = new UpgradeAdapter(AppModule);
upgradeAdapter.bootstrap(document.body, ['hybridApp']);
