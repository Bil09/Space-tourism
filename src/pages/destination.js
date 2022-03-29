import InfoDest from "../componets/destination/infoDest";
import SelectDest from "../componets/destination/selectDest";
import Nav from "../componets/nav/nav";
import '../styles/destination.css';
const Destination = () => {
   return(
      <div className="destination">
         <Nav />
         <SelectDest />
         <InfoDest />
      </div>
   );
};

export default Destination;