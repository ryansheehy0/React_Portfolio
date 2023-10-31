import Foreground from "./components/Foreground"
import Corner from "./components/Corner"
import {corners, triangleLength} from "./components/corners"
import React from "react"
import {Route, Routes} from "react-router-dom"
import Page from "./components/Page"
  import AboutMe, {pageTitle as pageTitleAboutMe, openEvent as openEventAboutMe} from "./components/AboutMe"
  import Portfolio, {pageTitle as pageTitlePortfolio, openEvent as openEventPortfolio} from "./components/Portfolio"

function App() {

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
            <Page pageTitle={pageTitleAboutMe} openEvent={openEventAboutMe} PageComponent={AboutMe}/>
          }/>
          <Route path="/portfolio" element={
            <Page pageTitle={pageTitlePortfolio} openEvent={openEventPortfolio} PageComponent={Portfolio}/>
          }/>
        </Routes>
    </>
  )
}

export default App