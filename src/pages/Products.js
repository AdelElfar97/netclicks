import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../network/axiosConfig";
import ProductCard from "./../components/ProductCard";
import React, { useContext } from "react";
import { LanguageContext } from "../context/language";

export default function Products() {
  const dispatch = useDispatch();
  const { langContext, setLangContext } = useContext(LanguageContext);
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState({
    pagenum: 1,
  });
  const [query, setQuery] = useState({
    queryWord: "",
  });

  const pageChange = (num) => {
    if (page.pagenum + num > 0)
      setPage({
        pagenum: page.pagenum + num,
      });
  };

  useEffect(() => {
    if (!query.queryWord) var url = "3/movie/popular";
    else url = "3/search/movie";

    return axiosInstance
      .get(url, {
        params: {
          api_key: "5420c619698ceb25489631bfca2e32df",
          page: page.pagenum,
          query: query.queryWord,
          language: langContext,
        },
      })
      .then((res) => {
        console.log("A")
        (setProducts(res.data.results));
      })
      .catch((err) => console.log(err));
  }, [langContext,query,page]);



  const searching = (e) => {
    setQuery({
      queryWord: e.target.value,
    });
  };

  return (
    <>
      <div class="input-group rounded">
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={searching}
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </div>


      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.length > 0 &&
          products.map((product) => {
            return (
              <div className="col mb-4" key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          })}
      </div>
      {
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link
                onClick={() => {
                  pageChange(-1);
                }}
                className="page-link"
              >
                previous
              </Link>
            </li>
            <li className="page-item">
              <Link onClick={() => pageChange(1)} className="page-link">
                Next
              </Link>
            </li>
          </ul>
        </nav>
      }
    </>
  );
}

// 1- Create products list component
// 2- Define Route
// 3- Define Axios Request -> define path -> accept / reject
