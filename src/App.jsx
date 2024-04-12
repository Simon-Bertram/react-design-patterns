import SplitScreen from "./components/SplitScreen"
import Sidebar from "./components/Sidebar"

const LeftHandComponent = () => {
  return <h1 className="bg-green-700 text-white">Left Hand Component</h1>
}

const RightHandComponent = () => {
  return <p className="bg-blue-800 text-white">Right Hand Component</p>
}

function App() {
  return <SplitScreen left={Sidebar} right={RightHandComponent} />
}

export default App
