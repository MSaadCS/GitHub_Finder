import { useContext } from "react";
import GitHubProvider  from "../../Context/GitHub/GitHubContext";
import { UserItem } from "./UserItem";
import { Loader } from "../Loader";
export const UserRequest = () => {
    const ctxData = useContext(GitHubProvider);
    
  return (
    <>
   
        <div className="container">
        <div className="row justify-content-center align-items-center">
                {ctxData.Spinner ? <Loader/> : 
                    
                    ctxData.usersList.map((element)=>(      
                            <UserItem key={element.id} userData={element} />
                    ))
                }
        </div>
        </div>  
   
        
    </>
    
  )
}
