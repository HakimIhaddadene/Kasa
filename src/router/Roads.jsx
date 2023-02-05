import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import AccommodationSheet from "../pages/AccommodationSheet"
import PageNotFound from "../pages/PageNotFound"

function Roads() {
	return (
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<AboutUs />} />
                        <Route path="/accommodationsheet/:id" element={<AccommodationSheet />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </main>
                <Footer />    
            </Router>
	);
}

/*
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import AccommodationSheet from '../pages/AccommodationSheet'
import PageNotFound from '../pages/PageNotFound'

function Roads() {
	return (
		<Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/AboutUs">
                <AboutUs />
            </Route>
            <Route path="/AccommodationSheet">
                <AccommodationSheet />
            </Route>
            <Route path="/PageNotFound">
                <PageNotFound />
            </Route>
        </Router>
	);
}
*/

export default Roads;