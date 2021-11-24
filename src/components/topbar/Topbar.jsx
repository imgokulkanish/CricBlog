import "./topbar.css"

export default function Topbar() {
    return (
        <div className="top">
            <div className="topLeft">
            <img src="logomakr.com/app/7V36bO" alt=""></img>
                Unpopular Cricket</div>
                <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LIVE SCORES</li>
          {/* <li className="topListItem">NEWS</li> */}
          {/* <li className="topListItem">PLAYERS</li> */}
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
            <div className="topRight">
                <img className="topImage"src="https://images.unsplash.com/photo-1566184584410-17834bb28e02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt=""></img>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
