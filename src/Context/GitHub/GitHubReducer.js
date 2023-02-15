const gitHubReducer = (state , action)=>{
    switch (action.type){
        case 'GET_USERS':
            return {
            ...state,
            usersList : action.payload,
            Spinner : false
            }
        case 'NO_USERS_FOUND':
            return {
                ...state,
                usersList : [],
                response_msg : action.payload,
                Spinner : false
            }
        case 'GET_USER':
            return {
                ...state,
                userData : action.payload,
                Spinner : false
            }
        case 'GET_USER_REPOS':
        return {
            ...state,
            userRepos : action.payload
        }
        case 'SET_LOADING':
            return {
            ...state,
            Spinner : true
            }
            case 'CLEAR_USERS':
                return {
                    ...state,
                    usersList : []
                }

        default : return state
    }
   
}
export default gitHubReducer;