import Card from "../../../components/Card";
import { Link } from "react-router-dom";



const NewSneakers = () => {
   
    return (
        <div className="bg-white">
        <div className="flex justify-between mx-10 my-10">
          <h5 className="uppercase">Nouveautés</h5>
          <Link to="/product">
          <h5 className="uppercase font-bold hover:text-gray-500">Tout afficher</h5>
          </Link>
        </div>
        <div className="mx-4  py-1 sm:px-6 sm:py-12 lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div>
            <Card />
          </div>
          </div>
          </div>
    );
};

export default NewSneakers;