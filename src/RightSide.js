import Genre from "./Genre";
import MediaService from "./MediaService";

const RightSide = () => {
    return ( 
        <div className="RightSide">
            <MediaService/>
            <Genre/>
        </div>
     );
}
 
export default RightSide;