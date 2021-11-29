import "./header.css"
import logo from "../assets/logo.png"
export default function Header() {
    return (
        <div className="Header">
            <div className="headerTitles">
            <span className="headerTitlessm">A Practical Cricket Blog for Impractical Fans</span>
            {/* <img src={logo} alt="unpopular cricket logo"/> */}
            <span className="headerTitleslg">UnPopular Cricket</span>
            </div>
            <img className="headerImage"src="https://pbs.twimg.com/profile_banners/619548795/1610967452/1500x500" alt=""></img>
        </div>
    )
}
