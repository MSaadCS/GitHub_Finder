import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
export const Navbar = ({header_text}) => {
  return (
    
            <section className = "navbar mb-5">
                <div className = "container">
                    <div className = "row w-100">
                        <div className = "col-12 d-flex">
                            <div className = "col-4 d-flex align-items-center">
                                <img alt="logo" src = {logo} />
                                <p className = "text-white font-weight-bold">{header_text}</p>
                            </div>
                            <div className = "col-6 d-flex align-items-center justify-content-end">
                                <Link to = '/' className = "font-weight-bold text-white mx-3">HOME</Link>
                                <Link to = '/about' className = "font-weight-bold text-white">ABOUT</Link>
                            </div>
                        </div>
                    </div>
            </div>
            </section>
        
  )
}
