import { IObserver } from "./observer";
interface IObservable{
    observers:IObserver[];
    add(observer: IObserver):void;
}

class Observerable implements IObservable{
    state: number;
    observers:IObserver[];
    constructor(){
        this.state = 0;
        this.observers = [];
    }

    add(observer:IObserver) {
        this.observers.push(observer);
    }
    remove(observer:IObserver){
        this.observers = this.observers.filter((ele)=>!(ele === observer));
    }
    getState():number{
        return this.state;
    }

    setState(newState:number):void{
        this.state = newState;
        this.notify();
    }
    private notify():void{
        for(let observer of this.observers){
            observer.update(this.getState());
        }
    }  
}

export {
    IObservable, Observerable
}