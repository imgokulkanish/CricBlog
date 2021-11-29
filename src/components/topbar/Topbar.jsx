import "./topbar.css"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
export default function Topbar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
            <img className="topLogo"src={logo} alt=""></img>
                Unpopular Cricket</div>
                <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
              <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
             <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
             <Link className="link" to="/contact">CONTACT</Link>
          </li>
          <li className="topListItem">
             <Link className="link" to="/write">WRITE</Link>
          </li>
          <li className="topListItem">
             {user && "LOGOUT"}
          </li>
        </ul>
      </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImage"src="https://images.unsplash.com/photo-1566184584410-17834bb28e02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""></img>
                    ) : (
                        <ul className="topList">
                        <li className="topListItem">
                        <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                        </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
