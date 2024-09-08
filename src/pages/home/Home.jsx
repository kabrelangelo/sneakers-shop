import GalleryHome from "./components/GalleryHome";
import LandingPage from "./components/LandingPage";
import NewSneakers from "./components/NewSneakers";


const Home = ({products}) => {
  return (
   <div>
      <LandingPage/>
      <GalleryHome/>
      <NewSneakers/>
    </div>
  );
};

export default Home;
