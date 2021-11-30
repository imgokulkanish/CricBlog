import { useState } from "react"
import "./write.css"

export default function Write() {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [file,setFile] = useState(null)
    return (
        <div className="write">
            <img className="writeImage" src="https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"alt=""/>
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                  <input type="file" id="fileInput" style={{display:"none"}}/>
                  <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Write Your Blog..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
