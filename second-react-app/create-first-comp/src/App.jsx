import { Demo } from "./multiple named function";
import { First } from "./multiple named function";
import DpButton from "./dpButton";

import Apple from './Appl.jsx'
import Default, { Named } from "./oneNamedOneDefault.jsx";
import Hello from "./dynamicComp.jsx";
import Random from "./Random.jsx";

function App() {
  return (
    <>
      <h1>Hello React !</h1>
      <h2>I am divya prakash</h2>
      <DpButton />
      {/* <Demo /> */}
      {/* <First /> */}
      {/* <h6>This all from App</h6> */}
      {/* <Apple /> */}
      {/* <p>nameddefault start</p> */}
      {/* <Named/> */}
      {/* <Default/> */}
      <Hello />
      <Random />
      <Random />
    </>
  )
}

export default App;

