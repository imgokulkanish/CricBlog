import "./topbar.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import logo from "../assets/logo.png"

export default function Topbar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };
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
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg"src={user.profilePic} alt=""></img>
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
