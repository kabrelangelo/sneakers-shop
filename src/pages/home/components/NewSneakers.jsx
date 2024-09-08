import { Link } from "react-router-dom";

const NewSneakers = () => {
    const news=[
        {id: 1, image: "/images/news/new1.jpg"},
        {id: 2, image: "/images/news/new2.jpg"},
        {id: 3, image: "/images/news/new3.webp"},
        {id: 4, image: "/images/news/new4.jpg"},
        {id: 5, image: "/images/news/new5.webp"},
        {id: 6, image: "/images/news/new6.jpg"},
        {id: 7, image: "/images/news/new7.jpg"},
        {id: 8, image: "/images/news/new8.webp"},
        {id: 9, image: "/images/news/new9.webp"},
        {id: 10, image: "/images/news/new10.webp"},
        {id: 11, image: "/images/news/new11.webp"},
        {id: 12, image: "/images/news/new12.jpg"},
    ]
    return (
        <div className="my-20">
            <div className="flex justify-between mx-10 ">
                <h5 className=' uppercase '>
                    Nouveautés
                </h5>
                <Link to=''>
                <h5 className=' uppercase font-semibold text-gray-700 hover:text-gray-400'>
                    Tout afficher
                </h5>
                </Link>
            </div>
            <div className="">
                <div className="grid grid-cols-2 lg:grid-cols-4 mx-5">
                {
    news.map((item) => (
        <div key={item.id} className=" rounded overflow-hidden shadow-lg m-4">
            <Link to={''}>
                <img className="w-screen object-cover" src={item.image} alt="" />
            </Link>
           </div>
    ))
}

                    
                </div>
            </div>
        </div>
    );
};

export default NewSneakers;