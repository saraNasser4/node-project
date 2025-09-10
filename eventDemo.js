import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler (name) {
    console.log(`Hello ${name}`);
}

function goodbyHandler (name) {
    console.log(`goodbye ${name}`);
}

// register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyHandler);

// emit event
myEmitter.emit('greet', 'Sara');
myEmitter.emit('goodbye', 'Sara');

// handle error
myEmitter.on('error', (err)=> console.log(`Error Occured: ${err}`))
myEmitter.emit('error', new Error('Something Went wrong'));