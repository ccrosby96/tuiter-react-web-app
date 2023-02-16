
var items = [
    {name: "Home", icon: "fa-home", link: ".../home.html"},
    {name: "Explore", icon: "fa-hashtag", link: ".../explore.html"},
    {name: "Notifications", icon: "fa-bell", link: ".../notifications.html"},
    {name: "Messages", icon: "fa-envelope", link: ".../messages.html"},
    {name: "Bookmarks", icon: "fa-bookmark", link: ".../bookmarks.html"},
    {name: "Top Articles", icon: "fa-fire", link: ".../top_articles.html"},
    {name: "Profile", icon: "fa-user", link: ".../profile.html"},
    {name: "More", icon: "fa-ellipsis-h", link: ".../more.html"}

];
const GenerateNavItem = (item)=> {
    return(`
        <li class = "list-group-item rounded-pill mt-2 mb-2">
             <a href = ${item.link}>
                        <i class = "float-start me-3 d-inline-block fa ${item.icon} text-dark"></i>
                        <p class = "float-start d-inline-block d-none d-xl-block m-0 text-dark">${item.name}</p>
                    </a>
        </li>
    `)

}
const NavigationSidebarTest = () => {
    return (`
        <ul  class = "list-group float-end mb-1 me-0" >
            ${
        items.map(item => {
            return (GenerateNavItem(item));
                }).join("")
            }
            </ul>
            `);
}
const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebarTest;


