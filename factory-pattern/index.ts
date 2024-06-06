import { Factory, RandomFactory, BalancedFactory } from "./factories";
import { Entity } from "./entities";

const factoryA:Factory = new RandomFactory();
factoryA.getEntity().print();
factoryA.getEntity().print();
factoryA.getEntity().print();


const factoryB:Factory = new BalancedFactory();
factoryB.getEntity().print();
factoryB.getEntity().print();
factoryB.getEntity().print();
