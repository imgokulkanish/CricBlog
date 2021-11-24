import "./sidebar.css"

export default function Sidebar() {
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
                <li className="sidebarlistitem">Tests</li>
                <li className="sidebarlistitem">ODI</li>
                <li className="sidebarlistitem">T20I</li>
                <li className="sidebarlistitem">IPL</li>
                <li className="sidebarlistitem">WOMENS</li>
                <li className="sidebarlistitem">PREVIEWS</li>
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
