import PostItemBody from "./post-item-body";
import posts from "./posts.json";
import PostItemBasic from "./post-item-basic";
import postsArray from "../post-summary-list/posts.json";
import PostSummaryItem from "../post-summary-list/post-summary-item";
import React from "react";

const HomeComponent = () => {
    return(

        posts.map((post, i)  => {
            return(
                <div key={i} className="border-secondary border-bottom pb-4 pt-3">
                    {PostItemBasic(post)}
                </div>);
        })

    );
}
export default HomeComponent;