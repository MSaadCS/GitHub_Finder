import { UserRequest } from "../components/Users/UserRequest";
import { UserSearch } from "../components/Users/UserSearch";
export const Home = () => {
  return (
    <>
   
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center mb-3">
              <UserSearch/>
          </div>
        </div> 
      </div>

      <UserRequest/>
    </>
  )
}
