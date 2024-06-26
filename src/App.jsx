import Footer from "./components/Footer"
import Header from "./components/Header"
import Ingredients from "./components/Ingredients"
import Instructions from "./components/Instructions"
import Nutrition from "./components/Nutrition"
import PrepTime from "./components/PrepTime"
import { StyledWrapper } from "./components/styles"

const App = () => {
  return (
    <>
      <StyledWrapper> 
        <Header />
        <PrepTime />
        <Ingredients />
        <Instructions />
        <Nutrition />
        <Footer />
      </StyledWrapper> 
    </>
  )
}

export default App