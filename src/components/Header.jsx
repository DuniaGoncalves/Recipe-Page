import omelette from '../assets/images/omelette.jpeg'
import { StyledHeader } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <img src={omelette} alt="omelette" />
      <h1>Simple Omelette Recipe</h1>
      <p> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
    </StyledHeader>
  )
}

export default Header 