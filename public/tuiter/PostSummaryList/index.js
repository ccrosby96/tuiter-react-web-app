import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
           <ul class="list-group inline align-bottom">
           ${
        posts.map(post => {
            return (PostSummaryItem(post));
        }).join("")
    } 
           </ul>
           `);
}

export default PostSummaryList;

