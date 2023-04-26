import PostItemBody from "./post-item-body";
import PostItemIcons from "./post-item-icons";

const PostItemRegular = (
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
            <PostItemBody post={post}/>

        </>

    );
}
export default PostItemRegular;