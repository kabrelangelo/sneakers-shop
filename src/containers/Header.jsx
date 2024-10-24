import React from 'react';
import LoadingOverlay from '../components/LoadingOverlay';
import { Link } from 'react-router-dom';


const Header = () => {
    const [loading, setLoading] = React.useState(true);

  // Simuler un chargement
  React.useEffect(() => {
   const timer= setTimeout(() => {
      setLoading(false);
        return clearTimeout(timer)
    }, 2000); // Ajustez la durée selon vos besoins
    
}, []);


    return (
        <div>
        <div>
      {loading && <LoadingOverlay />}
      {/* Le reste de votre application */}
    </div>
<section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative items-center justify-center mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
      La Mode Qui Vous 

        <strong className="block font-extrabold text-rose-500"> Sublime. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
      Des vêtements qui reflètent votre personnalité, pour un style qui ne passe jamais inaperçu. 
      Trouvez l'inspiration et faites de chaque tenue une œuvre unique.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">

{/* Bottom */}

<Link
  className="group relative inline-block overflow-hidden bg-rose-500 px-12 py-3  border border-rose-600 focus:outline-none focus:ring"
  href="#"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative font-bold text-sm uppercase text-white transition-colors group-hover:text-rose-500"
  >
    Pour Hommes
  </span>
</Link>
<Link
  className="group relative inline-block overflow-hidden  px-12 py-3  border border-rose-600 focus:outline-none focus:ring"
  href="#"
>
  <span
    className="absolute inset-x-0 bottom-0 h-[2px] bg-rose-600 transition-all group-hover:h-full group-active:bg-indigo-500"
  ></span>

  <span
    className="relative text-sm uppercase font-bold text-rose-600 transition-colors group-hover:text-white"
  >
    Pour Femmes
  </span>
</Link>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default Header;