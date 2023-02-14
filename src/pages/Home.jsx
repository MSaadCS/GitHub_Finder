import { useContext } from "react";
import GitHubProvider  from "../Context/GitHub/GitHubContext";
import { UserRequest } from "../components/Users/UserRequest";
import { UserSearch } from "../components/Users/UserSearch";


export const Home = () => {
  const ctxData = useContext(GitHubProvider);
  return (
    <>
   
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-3">
              <UserSearch/>
          </div>
        </div> 
      </div>
      {ctxData.usersList.length !== 0 ? 
      <UserRequest/>
      : ctxData.usersList }
    </>
  )
}
