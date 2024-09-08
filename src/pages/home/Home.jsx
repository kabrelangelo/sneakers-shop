import GalleryHome from "./components/GalleryHome";
import GridHomePage from "./components/GridHomePage";
import LandingPage from "./components/LandingPage";
import NewSneakers from "./components/NewSneakers";


const Home = ({products}) => {
  return (
   <div>
      <LandingPage/>
      <GalleryHome/>
      <NewSneakers/>
      <GridHomePage/>
    </div>
  );
};

export default Home;
