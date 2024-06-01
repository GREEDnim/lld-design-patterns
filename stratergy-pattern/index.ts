import { Duck } from "./duck";
import { SimpleFlyBehaviour, FastFlyBehaviour } from "./stratergies/fly";
import { SimpleQuackBehaviour, LoudQuackBehaviour } from "./stratergies/quack";

const typeA : Duck = new Duck(new SimpleQuackBehaviour(), new SimpleFlyBehaviour());
const typeB : Duck = new Duck(new SimpleQuackBehaviour(), new FastFlyBehaviour());
const typeC : Duck = new Duck(new LoudQuackBehaviour(), new SimpleFlyBehaviour());
const typeD : Duck = new Duck(new LoudQuackBehaviour(), new FastFlyBehaviour());

typeA.execute();
typeB.execute();
typeC.execute();
typeD.execute();