const movieInfoInitialState={};

const movieInfoReducer=(state=movieInfoInitialState,action)=>{
    switch(action.type){
        case 'MOVIE_INFO':
            return {...action.payload};
        default:
            return {...state};
    }
}

export default movieInfoReducer;