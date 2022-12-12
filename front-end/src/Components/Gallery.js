import "../App.css"

const Gallery = ({ restaurants, speed = 40000 }) => {
  console.log(restaurants)
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {restaurants.map(({ image_url, category}) => (
            <div className="image relate mx-4 border-[10px] border-gray-200 rounded-lg shadow-xl" >
              <div className=" absolute bg-[#000] opacity-50" >
                <p className="block py-2 px-4 text-lg font-bold text-white font-[Open Sans]">{category.label}</p>
              </div>  
              <img 
                className="border-0 border-gray-600 rounded-0"
                src={image_url}  />
            </div>
          ))}
        </section>

        <section style={{ "--speed": `${speed}ms` }}>
          {restaurants.map(({ image_url, category}) => (
            <div className="image relate mx-4 border-[10px] border-gray-200 rounded-lg shadow-xl" >
            <div className=" absolute bg-[#000] opacity-50" >
              <p className="block py-2 px-4 text-lg font-bold text-white font-[Open Sans]">{category.label}</p>
            </div>  
            <img 
              className="border-0 border-gray-600 rounded-0"
              src={image_url}  />
          </div>
          ))}
        </section>

        <section style={{ "--speed": `${speed}ms` }}>
          {restaurants.map(({ image_url, category}) => (
            <div className="image relate mx-4 border-[10px] border-gray-200 rounded-lg shadow-xl" >
            <div className=" absolute bg-[#000] opacity-50" >
              <p className="block py-2 px-4 text-lg font-bold text-white font-[Open Sans]">{category.label}</p>
            </div>  
            <img 
              className="border-0 border-gray-600 rounded-0"
              src={image_url}  />
          </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Gallery };
