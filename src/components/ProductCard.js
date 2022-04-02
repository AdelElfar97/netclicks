import React from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  const [color, setColor] = useState({
    col: "",
  });
  
  const dispatch = useDispatch();
  const favs = useSelector((state) => state.favs);

  const favsHandler = (id) => {
    dispatch({ type: "addFav", newFav: product });
  };


  
  useEffect(() => {
    for(var i=0; i<favs.length; i++) {

      setColor("red")
      document.getElementById(favs[i].id).color ="red"
    }

  },[] );


  const makeRed = (id) => {



    var __FOUND = 0;
    for(var i=0; i<favs.length; i++) {
      if(favs[i].id === id) {
        // __FOUND is set to the index of the element
        __FOUND = 1;
      }
    }

    if(!__FOUND){
    setColor("red")
    document.getElementById(id).color ="red"

    }
    else{
    setColor("")
    document.getElementById(id).color =""

    }
    
  };
  return (
    <div className="card h-100">
      <img
        src={`http://image.tmdb.org/t/p/w500/${product.poster_path}`}
        className="card-img-top"
        alt={product.title}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title} </h5>
        <Link
          to={{
            pathname: `/products/${product.id}`,
            state: product,
          }}
        >
          Details
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-bookmark-heart-fill"
          id={product.id}
          viewBox="0 0 16 16"
          onClick={() => {
            favsHandler(product.id);
            makeRed( product.id );
          }}
          color={color}
        >
          <path
            fill-rule="evenodd"
            d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
          />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
        </svg>
      </div>
    </div>
  );
}
