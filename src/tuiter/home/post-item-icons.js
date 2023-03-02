const postItemIcons = (
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
    return (
        <div className="mt-2">
            <ul className="w-100 nav p-0">
                <li className="list-group-item m-auto ms-0 bg-transparent wd-filter-grey">
                    <img className="float left wd-filter-grey wd-margin-none "
                         src="../../icons/comment-regular.svg"
                         width="20px"
                         height="20px"></img>
                    ${post.comment}
                </li>
                <li className="list-group-item m-auto ms-0 bg-transparent wd-filter-grey">
                    <img className="float left wd-filter-grey wd-margin-none "
                         src="../../icons/retweet-solid.svg"
                         width="20px"
                         height="20px"></img>
                    ${post.retweet}
                </li>
                <li className="list-group-item m-auto ms-0 bg-transparent wd-filter-red">
                    <img className="float left wd-filter-grey wd-margin-none "
                         src="../../icons/heart-solid.svg"
                         width="20px"
                         height="20px"></img>
                    ${post.like}
                </li>
                <li className="list-group-item m-auto ms-0 bg-transparent wd-filter-grey">
                    <img className="float left wd-filter-grey wd-margin-none "
                         src="../../icons/share-solid.svg"
                         width="20px"
                         height="20px"></img>
                </li>
            </ul>
        </div>
    )

}
export default postItemIcons;