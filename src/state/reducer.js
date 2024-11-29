const initialState={
    content: [],
    newsContent:[]
}

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'STORE_CONTENT' : return { ...state, content: action.payload };
        case 'STORE_NEWS' :return{...state,newsContent:action.payload};
        case  'STORE_BLOGS':return{...state,blogsContent:action.payload}
        default: return state;
    }
}

export default rootReducer;