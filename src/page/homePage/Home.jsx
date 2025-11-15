import Banner from "./banner/Banner";
import Card from "./card/Card";
import DealPage from "./dealpage/DealPage";
import Hero from "./hero/Hero";
import MiniCard from "./miniCard/MiniCard";
import Suport from "./supportPage/Suport";
import Tesmosial from "./tesmosialPage/Tesmosial";

const Home = () => {
    
    return (
        <div>
          <Hero/>
          <MiniCard/>
          <Card/>
          <Banner/>
          <DealPage></DealPage>
          <Tesmosial/>
          <Suport/>
        </div>
    );
};

export default Home;