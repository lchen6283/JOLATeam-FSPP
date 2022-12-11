import "../App.css"

const Gallery = ({ images, speed = 40000 }) => {
  // console.log(images)
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map((image, i) => (

            <div className="image" >
              {/* {console.log(image)} */}
              <img src={image} alt={i} />
            </div>
          ))}
        </section>

        <section style={{ "--speed": `${speed}ms` }}>
          {images.map((image, i ) => (
            <div className="image" >
              <img src={image} alt={i} />
            </div>
          ))}
        </section>

        <section style={{ "--speed": `${speed}ms` }}>
          {images.map((image, i) => (
            <div className="image" >
              <img src={image} alt={i} />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { Gallery };