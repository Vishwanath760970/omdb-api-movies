const moviesInitialState=[];

const moviesReducer=(state=moviesInitialState,action)=>{
    switch(action.type){
        case 'MOVIES_LIST':
            return [...action.payload];
        case 'SEARCHED_MOVIES':
            return [...action.payload];
        default:
            return [...state];
    }
}

export default moviesReducer;