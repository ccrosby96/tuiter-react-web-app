const WhoToFollowListItem = (who) => {
  return (`<li class = "list-group-item list-group-item-action" style="border: none" >
                        <img class="rounded-corners-all-around start-0 mb-0" src= ${who.avatarIcon}
                             height="35px"
                             width="35pxs">
                        <b class = "mb-0 mt-0">${who.userName}.</b>
                        <img class="rounded-corners-all-around start-0 mb-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1200px-Twitter_Verified_Badge.svg.png"
                             height="20px"
                             width="20pxs">
                        <button type="submit" class="btn btn-primary btn-sm rounded-pill float-end" style="vertical-align: middle">Follow</button>
                        <p class = "fg-color-grey-link margin-left mt-0" >@${who.userHandle}</p>
                    </li>`)
}
export default WhoToFollowListItem;

