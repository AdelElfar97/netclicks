import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../network/productsAPIs";

export default function ProductDetails(props) {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    getProductDetails(params)
      .then((res) => {setProductDetails( res.data.results)} )
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h3>ProductDetails</h3>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
             src={`http://image.tmdb.org/t/p/w500/${props.location.state.poster_path}`}
              className="img-fluid rounded-start"
              alt={productDetails.overview}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.location.state.title}</h5>
              <p className="card-text">{props.location.state.popularity} $</p>
              <p className="card-text">{props.location.state.overview}</p>
              <p className="card-text">
                <small className="text-muted"> {productDetails.release_date}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
