import React from 'react';
import Layout from "./components/layout/Layout";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Characters from "./components/pages/Characters";
import MyWatchList from "./components/pages/MyWatchList";
import InitFilters from "./components/InitFilters";
import OverlayWithSpinner from "./components/shared/UI/overlayWithSpiner/OverlayWithSpinner";

function App() {

    return (
        <Router>
            <Layout>
                <OverlayWithSpinner />
                <InitFilters />
                <Routes>
                    <Route path='' element={<Characters />} />
                    <Route path='/list' element={<MyWatchList />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
