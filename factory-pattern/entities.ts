interface Entity{
    state:number;
    print():void;
}

class ConcreteEntity implements Entity{
    state;
    constructor(state:number){
        this.state = state;
    }
    print():void{
        console.log(this.state);
    }
}

export { Entity, ConcreteEntity}