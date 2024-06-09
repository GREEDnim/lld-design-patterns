class Singleton{
    private static ref: Singleton ;
    private constructor(){}

    static getInstance():Singleton{
        if (!Singleton.ref) Singleton.ref = new Singleton();
        return this.ref;
    }
}

export {
    Singleton
}