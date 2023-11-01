import Foreground from "./components/frontPage/Foreground"
import Corner from "./components/frontPage/Corner"
import {corners, triangleLength} from "./components/frontPage/corners"
import React from "react"
import {Route, Routes} from "react-router-dom"
import Page from "./components/Page"
  import AboutMe, {pageTitle as pageTitleAboutMe} from "./components/pages/AboutMe"
  import Portfolio, {pageTitle as pageTitlePortfolio} from "./components/pages/Portfolio"

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            {/* Corners */}
              <Corner triangleLength={triangleLength} {...corners.topLeft} />
              <Corner triangleLength={triangleLength} {...corners.topRight} />
              <Corner triangleLength={triangleLength} {...corners.bottomLeft} />
              <Corner triangleLength={triangleLength} {...corners.bottomRight} />
            <Foreground triangleLength={triangleLength} />
          </>
        }/>
        {/* Pages */}
        <Route path="/about-me" element={
          <Page pageTitle={pageTitleAboutMe} PageComponent={AboutMe}/>
        }/>
        <Route path="/portfolio" element={
          <Page pageTitle={pageTitlePortfolio} PageComponent={Portfolio}/>
        }/>
      </Routes>
    </>
  )
}