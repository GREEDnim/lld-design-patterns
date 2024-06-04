import { Component, ConcreteComponent } from "./component";
class Decorator implements Component{
    component: Component;
    constructor(component:Component) {
        this.component = component;
    }

    cost():number{
        return this.component.cost();
    }
}

class Add2Decorator extends Decorator{
    // constructor of super is called without specifying . nice

    cost():number{
        return 2 + super.cost();
    }
}

class Add3Decorator extends Decorator {
    cost():number{
        return 3 + super.cost();
    }
}

export {
    Add2Decorator, Add3Decorator
}