interface IFlyStratergy{
    run():void;
}

class SimpleFlyBehaviour implements IFlyStratergy{
    run(): void {
        console.log("this is simple fly")
    }
}

class FastFlyBehaviour implements IFlyStratergy{
    run(): void {
        console.log("this is fast fly")
    }
}

export {
    IFlyStratergy, FastFlyBehaviour, SimpleFlyBehaviour
}