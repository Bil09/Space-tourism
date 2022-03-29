
import Content from "../componets/home/content";
import ExploreBtn from "../componets/home/exploreBtn";
import Nav from "../componets/nav/nav";
import '../styles/home.css';
const Home = () => {
   return(
      <div className="home">
         <Nav />
         <Content />
         <ExploreBtn />
      </div>
   );
};

export default Home;