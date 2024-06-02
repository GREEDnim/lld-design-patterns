interface IObserver{
    update(state: number):void;
}

class Observer implements IObserver {
    id:string;
    constructor(id:string){
        this.id = id;
    }
    update(state:number):void{
        console.log(`the current state got in ${this.id} is : ${state}`);
    }
}


export {
    IObserver, Observer
}