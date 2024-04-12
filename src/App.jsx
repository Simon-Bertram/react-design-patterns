import SplitScreen from "./SplitScreen"

const LeftHandComponent = () => {
  return <h1>Left Hand Component</h1>
}

const RightHandComponent = () => {
  return <p>Right Hand Component</p>
}

function App() {
  return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />
}

export default App
