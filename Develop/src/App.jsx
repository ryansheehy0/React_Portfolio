import Foreground from "./components/Foreground"
import Corner from "./components/Corner"
import {corners, triangleLength} from "./components/corners"
import Page from "./components/Page"
  import AboutMe, {pageTitle, openEvent} from "./components/AboutMe"

function App() {

  return (
    <>
      {/* Corners */}
        <Corner triangleLength={triangleLength} {...corners.topLeft} />
        <Corner triangleLength={triangleLength} {...corners.topRight} />
        <Corner triangleLength={triangleLength} {...corners.bottomLeft} />
        <Corner triangleLength={triangleLength} {...corners.bottomRight} />
      <Foreground triangleLength={triangleLength} />
      {/* Pages */}
        <Page pageTitle={pageTitle} openEvent={openEvent} PageComponent={AboutMe}/>
    </>
  )
}

export default App