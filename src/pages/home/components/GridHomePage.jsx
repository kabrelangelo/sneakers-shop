import React from 'react';

const GridHomePage = () => {
    return (
        <div>
            <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
      <div className=" break-inside-avoid mb-8">
      <img className="h-auto max-w-full rounded-lg" src="/images/grid/grid1.webp" alt="Gallery image" />
      </div>
      <div className=" break-inside-avoid  mb-8">
      <img className="h-auto max-w-full rounded-lg" src="images/grid/grid2.webp" alt="Gallery image" />
      </div>
      <div className=" break-inside-avoid  mb-8">
      <img className="h-auto max-w-full rounded-lg" src="images/grid/grid3.jpg" alt="Gallery image" />
      </div>
     {/*  <div className=" break-inside-avoid  mb-8">
      <img className="h-auto max-w-full rounded-lg" src="images/grid/grid5.webp" alt="Gallery image" />
      </div> */}
      <div className=" break-inside-avoid  mb-8">
      <img className="h-auto max-w-full rounded-lg" src="images/grid/grid4.webp" alt="Gallery image" />
      </div>
      </div>
        </div>
    );
};

export default GridHomePage;