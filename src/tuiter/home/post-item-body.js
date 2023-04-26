const PostItemBody = (
    {
        post = { "_id": 123, "topic": "Space", "userName": "SpaceX",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "time": "2h",   "image": "tesla.png" }
    }
) => {
    console.log("post", post)
    return(
        <li className="list-group-item">

            <div className="row">
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"></i>
                    <div>{post.name} . {post.date}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.postText}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={post.image}/>
                </div>
            </div>

        </li>



    );
}
export default PostItemBody;