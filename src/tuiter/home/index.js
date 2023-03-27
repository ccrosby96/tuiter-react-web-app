import PostItemBody from "./post-item-body";
import posts from "./posts.json";
import PostItemBasic from "./post-item-basic";
import postsArray from "../post-summary-list/posts.json";
import PostSummaryItem from "../post-summary-list/post-summary-item";
import React from "react";
import TuitSummaryList from "../tuits";
import whatsHappening from "./whats-happening";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(

       <>
           <WhatsHappening/>

           <TuitSummaryList/>
       </>
    );
}
export default HomeComponent;