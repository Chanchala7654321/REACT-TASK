import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {
  const name = "Suman"
  const age = 22


  return (
    <>
    <Header name={name} age={age} />
    <Footer name={name} age={age} />
    </>
  )
}

export default App
