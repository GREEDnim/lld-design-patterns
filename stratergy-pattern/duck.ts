import { IFlyStratergy } from "./stratergies/fly";
import { IQuackStratergy } from "./stratergies/quack";

class Duck{
    quack: IQuackStratergy;
    fly: IFlyStratergy;

    constructor( quack:IQuackStratergy,fly:IFlyStratergy ){
        this.quack = quack;
        this.fly = fly;
    }

    public execute():void{
        this.quack.run();
        this.fly.run();
    }
}

export {
    Duck,
}