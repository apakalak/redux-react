import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import counter from './redux/counter';
const { createStore } = require('redux')
const store = createStore(counter)

const render = () => { ReactDOM.render(<Counter
                        value= {store.getState()} 
                        onDecrement = {()=>{
                            store.dispatch({type: 'DECREMENT'})
                        }}  
                        onIncrement = {()=>{
                            store.dispatch({type: 'INCREMENT'})
                        }}/>, document.getElementById('root'));
                      }              
registerServiceWorker();

store.subscribe(render)
render()