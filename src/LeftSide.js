import BtnsPart from "./BtnsPart";
import Logout from "./Logout";
import Users from "./Users";

const LeftSide = () => {

    return ( 
        <div className="LeftSide">
            <BtnsPart />
            <Users />
            <Logout/>
        </div>
     );
}
 
export default LeftSide;