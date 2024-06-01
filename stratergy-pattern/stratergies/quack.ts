interface IQuackStratergy{
    run():void;
}

class SimpleQuackBehaviour implements IQuackStratergy{
    run(): void {
        console.log("this is simple quack")
    }
}

class LoudQuackBehaviour implements IQuackStratergy{
    run(): void {
        console.log("this is loud quack")
    }
}
export {
    IQuackStratergy, LoudQuackBehaviour, SimpleQuackBehaviour
}
