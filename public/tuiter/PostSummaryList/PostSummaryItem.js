const PostSummaryItem = (post) => {
    return (` <li class = "list-group-item list-group-item-action mt-1 mb-0" style="border: none" >
                    <i class="fa fa-ellipsis-h float-end" aria-hidden="true"></i>
                    <p class = "fg-color-grey-link mt-0 mb-0" >${post.topic}</p>
                    <b class = "mb-0 mt-0">${post.userName}</b>
                    <b class = "mb-0 mt-0">${post.title}</b>
                    <p class = "fg-color-grey-link mt-0" >4,953 Tweets</p>
                </li>`)

}
export default PostSummaryItem