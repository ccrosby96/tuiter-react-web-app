import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row  mb-2 mt-0">
               <div class="input-group">
                        <span class="bg-transparent border-0 input-group-text" id="basic-addon1">
                        <img src="../../../src/icons/magnifying-glass-solid.svg" class="ps-1 wd-fill-gray" width="25" height="25" />
                        </span>
                    <input type="text" class=" w-100 shadow-none border-0 bg-white rounded-pill form-control ml-0" placeholder="Search Tuiter" aria-label="Search Tuiter" aria-describedby="basic-addon1">
                   
                </div>      
                 <i class="fa-solid fa-gear float-end"></i> 
           </div>
           <ul class="nav nav-tabs w-100">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#"> Sports </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                </li>
            </ul>
           <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                 height="350px"
                 width = "100%">
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
