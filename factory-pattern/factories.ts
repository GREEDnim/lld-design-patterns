import { Entity, ConcreteEntity } from "./entities"
interface Factory{
    getEntity():Entity;
}

class BalancedFactory implements Factory{
    state = 0;
    getEntity():Entity{
        const entity = new ConcreteEntity(this.state);
        this.state ++;
        return entity;
    }
}

class RandomFactory implements Factory{
    getEntity():Entity{
        return new ConcreteEntity(Math.floor(Math.random() * 100));
    }
}

export {
    Factory, BalancedFactory, RandomFactory
}