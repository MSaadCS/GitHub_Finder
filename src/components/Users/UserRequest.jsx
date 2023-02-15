import { useContext } from "react";
import GitHubProvider  from "../../Context/GitHub/GitHubContext";
import { UserItem } from "./UserItem";
import { Loader } from "../Loader";
export const UserRequest = () => {
    const ctxData = useContext(GitHubProvider);
    console.log(ctxData.usersList.length);
    
  return (
    <>
   
        <div className="container">
        <div className="row justify-content-center align-items-center">
                {ctxData.Spinner ? <Loader/> : 
                    ctxData.usersList.length !== 0 ? 
                        ctxData.usersList.map((element)=>(      
                                <UserItem key={element.id} userData={element} />
                        ))
                    : <p className="text-center text-white">{ctxData.response_msg}</p>
                }
        </div>
        </div>  
   
        
    </>
    
  )
}
