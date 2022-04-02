import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeClassExample from "./pages/HomeClassExample";
import HomeFunctionalExample from "./pages/HomeFunctinalExample";
import AddUser from "./pages/AddUser";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Products from "./pages/Products";
import ProductDetails from './pages/ProductDetails';
import Fav from "./pages/Fav";
import {LanguageContext} from './context/language'
import React, { Suspense, useState } from "react";

function App() {
  const [langContext, setLangContext] = useState("en");

  return (
    <LanguageContext.Provider value={{ langContext, setLangContext }}>
    <Router>
      <Navbar />
      <div className="container my-5">
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/functional" component={HomeFunctionalExample} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/fav" component={Fav} />

          <Route path="*" component={NotFound} />
        </Switch>
      </div>


    </Router>
    </LanguageContext.Provider>

  );
}

export default App;
