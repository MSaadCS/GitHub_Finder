import { useContext } from "react";
import GitHubProvider  from "../../Context/GitHub/GitHubContext";
import { UserItem } from "./UserItem";
import { Loader } from "../Loader";
export const UserRequest = () => {
    const ctxData = useContext(GitHubProvider);
    if (ctxData.usersList.length === 0) {
        console.log('empty');
    }else{
        console.log(ctxData.usersList.length);
    }
    console.log(ctxData.usersList);
  return (
    <>
    {ctxData.usersList.length !== 0 ? 
        <div className="container">
        <div className="row justify-content-center align-items-center">
                {ctxData.Spinner ? <Loader/> : 
                    ctxData.usersList.map((element)=>(      
                            <UserItem key={element.id} userData={element} />
                    ))
                }
        </div>
        </div>  
    :  <p className="text-white text-center">NO RESULTS FOUND!</p>}
        
    </>
    
  )
}
