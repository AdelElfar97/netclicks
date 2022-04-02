import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { getProductDetails } from "../network/productsAPIs";
import { useParams } from "react-router-dom";

import { axiosInstance } from "../network/axiosConfig";
import ProductCard from "./../components/ProductCard";

export default function Fav() {
  const [movieFavs, setMovieFavs] = useState([]);
  const params = useParams();
  const [color, setColor] = useState({
    col: "",
  });
  const makeRed = (id) => {
    if(document.getElementById(id).color !=="red"){
    setColor("red")
    document.getElementById(id).color ="red"

    }
    else{
    setColor("")
    document.getElementById(id).color =""

    }
    
  };

  const favs = useSelector((state) => state.favs);


useEffect(() => {
    setMovieFavs(favs)
}, []);


  return (
    <> 
  
    
      <h2>favs</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movieFavs.length > 0 &&
          movieFavs.map((product) => {
            return (
              <div className="col mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
      </div>


    </>
  );
}