import { createContext , useReducer } from "react";
import gitHubReducer from "./GitHubReducer";

const REACT_APP_GITHUB_API = process.env.REACT_APP_GITHUB_API;
const REACT_APP_GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

const GitHubContext = createContext();

export const GitHubProvider = ({children})=>{
    // const [usersList , setUsersList] = useState([]);
    // const [Spinner , setSpinner] = useState(true);

    const initialState = {
        usersList : [],
        Spinner : false,
        search_text : '',
        userData : {},
        userRepos : []
    }

    const [state , dispatch] = useReducer(gitHubReducer , initialState);

       
    const userRequestAPI = async(search_text)=>{
        //first make the loader is true to show it
        setLoading();

        const fetchAPI = await fetch(REACT_APP_GITHUB_API + `/search/users?q=${search_text}`,{
            header : {
                'Accept' : 'application/json , text/plain, */**',
                'content-type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${REACT_APP_GITHUB_API_KEY}`,
            },
        });

        const api_response = await fetchAPI.json();

        const search_result = api_response.items;
        // setUsersList(api_response);
        // setSpinner(false);

        // then make loader equal false to hide it
        dispatch({
            type : 'GET_USERS',
            payload : search_result
        })

        
    }

    const userDataAPI = async(userLogin)=>{

        const fetchAPI = await fetch(REACT_APP_GITHUB_API + `/users/${userLogin}`,{
            header : {
                'Accept' : 'application/json , text/plain, */**',
                'content-type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${REACT_APP_GITHUB_API_KEY}`,
            },
        });

        
        if (fetchAPI.status === 404) {
           window.location.href = "/not-found";
        }else{
            const user_infos = await fetchAPI.json();
            dispatch({
                type : 'GET_USER',
                payload : user_infos
            })
            console.log(user_infos);
        }
     
        
        // setUsersList(api_response);
        // setSpinner(false);

        // then make loader equal false to hide it
       

        
    }

    const userReposAPI = async(userLogin)=>{

        const params = new URLSearchParams({
            sort : 'created',
            per_page : 10
        })

        const fetchAPI = await fetch(REACT_APP_GITHUB_API + `/users/${userLogin}/repos?${params}`,{
            header : {
                'Accept' : 'application/json , text/plain, */**',
                'content-type' : 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${REACT_APP_GITHUB_API_KEY}`,
            },
        });

        
       
            const user_repos = await fetchAPI.json();
            dispatch({
                type : 'GET_USER_REPOS',
                payload : user_repos
            })
            console.log(user_repos);
       

        
    }


    const clearusers = ()=>dispatch({
        type : 'CLEAR_USERS'
    })

    
    

    const setLoading = ()=> dispatch({
        type : 'SET_LOADING'
    })

    return <GitHubContext.Provider value={{
        usersList : state.usersList,
        Spinner : state.Spinner,
        search_text : state.search_text,
        userData : state.userData,
        userRepos : state.userRepos,
        userRequestAPI,
        clearusers,
        userDataAPI,
        userReposAPI
    }}>

                {children}
    
    </GitHubContext.Provider>
}

export default GitHubContext;