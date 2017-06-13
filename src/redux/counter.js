/**
 * Reducer for counter - (initialState, action) => nextState
 * state = undefined is initial state should return the first state. 0 in the counter case
 * @param {*} state - initial state
 * @param {*} action - action with type and other optionl fields
 */
function counter(state = 0,action){
    switch(action.type)
    {
        case 'INCREMENT' : 
            return state + 1
        case 'DECREMENT' :
            return state - 1
        default : 
            return state;
    }
}

// console.log(store.getState())
// store.dispatch({type: 'INCREMENT'})
// console.log(store.getState())
// store.dispatch({type: 'DECREMENT'})
// console.log(store.getState())
// store.dispatch({type: 'SOMETHINGELSE'})
// console.log(store.getState())

// store.subscribe(() => {
//     //document.body.innerText = store.getState()
// })

// const render = () => {
//     store.dispatch({type: 'INCREMENT'})
// }

//document.addEventListener(click, render)
// render()

module.exports = counter