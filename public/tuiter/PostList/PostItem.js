const postItem = (item) => {
    return (`
    <div class = "container m-2 border-secondary border-bottom p-3" >

        <img class="rounded-circle float-start"
             src="${item.profilePic}"
             width = "48px"
             height = "48px"/>
        <p class = "inline float-start m-1 fw-bold"> ${item.userName}</p>
    <img class="float-start align-bottom" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
         height="20px"
         width="20pxs">
        <p class="inline float-start m-1 wd-fg-color-grey-link"
            style="font-size:13px;"> @${item.userHandle} .  ${item.postDate}</p>
    <br></br>

    <p class = "float-start ms-5 mt-0"> ${item.postText}</p>
    <br></br>
    <div class = "border-secondary border-dashed bg-transparent" >
        <img class=" w-100 h-40  float-start align-bottom rounded-4 border-4 border-white" src="${item.postImage}"
             >

    </div>
    <br></br><br>
    <p class = " wd-margin-none wd-padding-all-around-12 style="font-size: 15px;"> ${item.postImageTitle} </p>
    <p class = " wd-fg-color-grey-link wd-margin-none wd-padding-all-around-12 wd-pos-relative-nudge-up" style="font-size: 12px;">
       ${item.postImageText}</p>

    <div class = "mt-2" >
        <ul class = "w-100 nav p-0" >

            <li class = "list-group-item m-auto ms-0 bg-transparent wd-filter-grey" >
                <img class = "float left wd-filter-grey wd-margin-none "
                     src="../../../src/icons/comment-regular.svg"
                     width = "20px"
                     height = "20px"></a>
                ${item.comment}
            </li>
            <li class = "list-group-item m-auto ms-0 bg-transparent wd-filter-grey" >
                <img class = "float left wd-filter-grey wd-margin-none "
                     src="../../../src/icons/retweet-solid.svg"
                     width = "20px"
                     height = "20px"></a>
                ${item.retweet}
            </li>
            <li class = "list-group-item m-auto ms-0 bg-transparent wd-filter-red" >
                <img class = "float left wd-filter-grey wd-margin-none "
                     src="../../../src/icons/heart-solid.svg"
                     width = "20px"
                     height = "20px"></a>
                ${item.like}
            </li>
            <li class = "list-group-item m-auto ms-0 bg-transparent wd-filter-grey" >
                <img class = "float left wd-filter-grey wd-margin-none "
                     src="../../../src/icons/share-solid.svg"
                     width = "20px"
                     height = "20px"></a>
                ${item.share}
            </li>
        </ul>
    </div>
</div>
    `)
}
export default postItem;