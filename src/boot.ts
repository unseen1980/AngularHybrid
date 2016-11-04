import {adapter} from './adapter';
import {AngularTwoOneComponent} from './hybrid-component/angular-two-one.component';
import {AngularTwoComponent} from './ng2-directive/angular-two.directive';
 
myApp.directive('angularTwo', adapter.downgradeNg2Component(AngularTwoComponent));
myApp.directive('angularTwoOne', adapter.downgradeNg2Component(AngularTwoOneComponent));
 
adapter.bootstrap(document.body, ['integrationApp']);