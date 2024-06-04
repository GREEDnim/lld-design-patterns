import { ConcreteComponent } from "./component";
import { Add2Decorator, Add3Decorator } from "./decorators";

const component:ConcreteComponent = new ConcreteComponent();
console.log(component.cost()) // return 1;

const componentWithplus2 = new Add2Decorator(component);
console.log(componentWithplus2.cost()) // return 3;

const componentWithplus2plus3 = new Add3Decorator(componentWithplus2);
console.log(componentWithplus2plus3.cost()) // return 6