
var items = [
    {name: "Home", icon: "fa-home", link: ".../home.html", active: true},
    {name: "Explore", icon: "fa-hashtag", link: ".../explore.html", active: false},
    {name: "Notifications", icon: "fa-bell", link: ".../notifications.html", active: false},
    {name: "Messages", icon: "fa-envelope", link: ".../messages.html", active: false},
    {name: "Bookmarks", icon: "fa-bookmark", link: ".../bookmarks.html", active: false},
    {name: "Top Articles", icon: "fa-fire", link: ".../top_articles.html", active: false},
    {name: "Profile", icon: "fa-user", link: ".../profile.html", active: false},
    {name: "More", icon: "fa-ellipsis-h", link: ".../more.html", active: false}

];
const GenerateNavItem = (item)=> {
    return(`
        <li class = "list-group-item rounded-pill mt-2 mb-2">
             <a href = ${item.link}>
                        <i class = "float-start me-3 d-inline-block fa ${item.icon} text-dark"></i>
                        <p class = "float-start d-inline-block d-none d-xl-block m-0 ${item.active ? "text-primary fw-bold fw-": "text-dark"}">${item.name}</p>
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


