import React, { Component, Fragment, createContext } from "react";
import "./Home.css";
import BlogPost from "../pages/BlogPost/BlogPost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LifeCycleComponent from "../pages/LifeCycleComponent/LifeCycleComponent";
import Product from "../pages/Product/Product";
import YoutubePage from "../pages/YoutubePage/YoutubePage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "../../context/context";
// import PostNotFound from "../pages/BlogPost/DetailPost/PostNotFound";


class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Life Cycle</Link>
                        <Link to="/youtube">Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path='/details/:id' component={DetailPost} />
                    {/* <Route path='*' component={PostNotFound} /> */}
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComponent} />
                    <Route path="/youtube" component={YoutubePage} />
                </Fragment>
            </Router>
        )
    }
}
export default GlobalProvider(Home);