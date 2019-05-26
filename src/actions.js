
//Examples of action creators

export function changeCatName(){
    console.log("DISPATCHING CHANGE_CAT_NAME");
    return function(dispatch){
        dispatch({
            type: 'CHANGE_CAT_NAME',
            payload: {
                newName: 'Mike'
            }
        })
    }
}

export function changeDogName(){
    console.log("DISPATCHING CHANGE_DOG_NAME");
    return function(dispatch){
        dispatch({
            type: 'CHANGE_DOG_NAME',
            payload: {
                newName: 'Doggo'
            }
        })
    }
}

export function addCatAge(){
    console.log("DISPATCHING ADD_CAT_AGE");
    return function(dispatch){
        dispatch({
            type: 'ADD_CAT_AGE',
            payload: {
                age: 7
            }
        })
    }
}

export function addDogAge(){
    console.log("DISPATCHING ADD_DOG_AGE");
    return function(dispatch){
        dispatch({
            type: 'ADD_DOG_AGE',
            payload: {
                age: 8
            }
        })
    }
}