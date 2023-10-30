import Foreground from "./components/Foreground"
import Corner from "./components/Corner"
import {corners, triangleLength} from "./components/corners"

function App() {

  return (
    <>
      <Corner triangleLength={triangleLength} {...corners.topLeft} />
      <Corner triangleLength={triangleLength} {...corners.topRight} />
      <Corner triangleLength={triangleLength} {...corners.bottomLeft} />
      <Corner triangleLength={triangleLength} {...corners.bottomRight} />
      <Foreground triangleLength={triangleLength} />
    </>
  )
}

export default App