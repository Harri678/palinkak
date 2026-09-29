import { fruits } from "../data/data"

function Gallery(){
     return(
     <div className="row mb-1">
      {fruits.map((fruit) => (
        <div
          className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100"
          key={fruit.id}
        >
          <h2>{fruit.name}</h2>

          <img
            src={fruit.image}
            className="img-fluid"
            alt={fruit.alt}
          />

          <p className="mt-2">{fruit.description}</p>
        </div>
      ))}
    </div>
     )
}

export default Gallery