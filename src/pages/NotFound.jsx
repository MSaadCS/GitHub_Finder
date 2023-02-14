import { Link } from "react-router-dom"
export const NotFound = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-5">
            <h1 className="text-white font-weight-bold">Oops!</h1>
            <h2 className="text-white mb-5">404-Page Not Found!</h2>
            <Link to = "/" style={{
                    textDecoration : 'none' , color : 'white' , backgroundColor: 'purple',
                    padding: '10px',
                    borderRadius: '10px'
                    }}>
              Back To Home
            </Link>
        </div>
      </div>

    </div>
  )
}
