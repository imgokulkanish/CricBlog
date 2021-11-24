import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.unsplash.com/photo-1600885094287-94258fe8a91c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80" alt="" className="singlePostImg" />
           <h1 className="singlePostTitle">
               Lorem ipsum dolor sit
               <div className="singlePostEdit">
               <i className="singlePostIcon far fa-edit"></i>
               <i className="singlePostIcon far fa-trash-alt"></i>
               </div>
           </h1>
           <div className="singlePostInfo">
               <span className="singlePostAuthor">Author:<b>Gokul Kanish</b></span>
               <span className="singlePostDate">1 hour ago</span>
           </div>
           <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam autem veritatis eaque quis aut et? Dolore animi quos rem voluptatem quam reiciendis. Odio id voluptate pariatur temporibus eum modi earum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia omnis iusto maxime accusantium et voluptas velit similique eos, tenetur, doloremque repellendus rerum ab voluptates deserunt debitis hic quibusdam nulla cupiditate.
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, excepturi? Provident deleniti in corporis ullam consectetur minus exercitationem natus quaerat neque ab, iure culpa ut blanditiis? Sit tempore dolore sequi.
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure molestias ut doloremque accusantium nemo, odio voluptates maiores laborum natus veniam quae est fugit ipsum atque minima quaerat consequatur officia rem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perspiciatis. Voluptates recusandae maiores commodi inventore aliquid at, aspernatur, iste quasi consequatur modi provident rem officia autem accusamus reiciendis alias similique.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam ipsam, amet est itaque, eligendi consequatur nobis ut magnam incidunt odio minima iste! Maxime delectus, amet deleniti voluptate ex sunt consequatur?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut aperiam obcaecati magni? Impedit voluptatibus quasi, nam amet quae explicabo temporibus ab repellat aliquam. Illo incidunt placeat porro voluptatum maiores impedit?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ipsa consequuntur, architecto laborum dolores ea numquam placeat consequatur rerum cum minima, eaque reiciendis iure sint incidunt officiis labore aspernatur consectetur.
           </p>
            </div> 
        </div>
    )
}
