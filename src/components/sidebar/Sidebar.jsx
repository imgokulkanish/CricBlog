import axios from "axios";
import { useEffect, useState } from "react"
import "./sidebar.css"
import { Link } from "react-router-dom";
export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(()=> {
        const getCats = async ()=> {
            const res = await axios.get("./categories");
            setCats(res.data);
        }
        getCats();
    }, []);
    return (
        <div className="sidebar">
                <div className="sidebarItem">
                <span className="sidebarTitle">About Us</span>
                <img src="https://images.unsplash.com/photo-1565787154274-c8d076ad34e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80" alt=""></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut accusantium molestias explicabo modi magnam hic sequi? Excepturi sequi rem eum! Quisquam dolorem quos corrupti ad facere. Doloremque nemo at accusamus.</p>
                </div>
                <div className="sidebarItem">
                <span className="sidebarTitle">Catogories</span> 
                <ul className="sidebarlist">
                    {cats.map((c)=> (
                        <Link to={`/?cat=${c.name}`}className="link">
                     <li className="sidebarlistitem">{c.name}</li>
                     </Link>
                    ))}            
                </ul>
                </div>
                <div className="sidebarItem">
                <span className="sidebarTitle">Follow Us</span>
                <div className="sidebarsocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
                </div> 
        </div>
    )
}
