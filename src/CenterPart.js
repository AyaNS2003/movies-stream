import Favorites from "./Favorites";
import SearchBar from "./SearchBar";

const CenterPart = () => {
    return ( 
        <div className="CenterPart">
            <SearchBar/>
            <Favorites/>
        </div>
     );
}
 
export default CenterPart;