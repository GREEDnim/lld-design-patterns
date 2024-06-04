interface Component{
    cost():number;
}

class ConcreteComponent implements Component{
    cost():number{
        return 1;
    }
}

export {
    Component, ConcreteComponent
}
