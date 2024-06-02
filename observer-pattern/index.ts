import { Observer, IObserver } from "./observer";
import { Observerable } from "./observable";


const observable:Observerable = new Observerable();

const observerA:IObserver = new Observer('observerA');
const observerB:IObserver = new Observer('observerB');

observable.add(observerA);
observable.add(observerB);

observable.setState(1);

observable.remove(observerB);

observable.setState(2);
