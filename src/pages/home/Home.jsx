import GalleryHome from "./components/GalleryHome";
import LandingPage from "./components/LandingPage";
import News from "./components/News";


const Home = ({products}) => {
  return (
   <div>
      <LandingPage/>
      <GalleryHome/>
      <News/>
    </div>
  );
};

export default Home;
