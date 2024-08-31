import ContinueWatching from "./ContinueWatching";
import Favorites from "./Favorites";
import SearchBar from "./SearchBar";

const CenterPart = () => {
    return ( 
        <div className="CenterPart">
            <SearchBar />
            <Favorites />
            <ContinueWatching />
        </div>
     );
}
 
export default CenterPart;