const PostItemBody = (
    {
        post = {
            profilePic: "",
            name: "",
            handle: "",
            date: "",
            image: "",
            imageText:  "",
            postText: "",
            comment: "",
            like: "",
            retweet: ""
        }
    }
) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-10">
                        <div>{post.name} . {post.date}</div>
                        <div className="fw-bolder">{post.handle}</div>
                        <div>{post.postText}</div>
                    </div>
                    <div className="col-2">
                        <img alt="" width={70} className="float-end rounded-3" src={post.image}/>
                    </div>
                </div>
            </li>
        </>

    );
}
export default PostItemBody;