import "./post.css"

export default function Post() {
    return (
        <div className="post">
             <img className="postImg"src="https://images.unsplash.com/photo-1631194758628-71ec7c35137e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt=""></img>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Test</span>
                <span className="postCat">Wtc</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio, impedit suscipit facere ut placeat distinctio hic, ipsa deserunt, neque repellat mollitia itaque! Voluptatibus assumenda suscipit nihil mollitia quasi quisquam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eaque. Cum ex repudiandae unde debitis quam veritatis illum, ab eius saepe corporis quod doloribus fugiat tenetur sequi repellat iste placeat?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit recusandae exercitationem quasi maxime commodi sunt ut aliquid? Quis laboriosam corrupti nihil aut maxime ex dolores, minus at nobis, quisquam placeat.
        </p>
        </div>
    )
}
