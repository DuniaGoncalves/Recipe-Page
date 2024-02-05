import omelette from '../assets/images/omelette.jpeg'

const Header = () => {
  return (
    <>
      <img src={omelette} alt="omelette" />
      <h1>Simple Omelette Recipe</h1>
      <p> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
    </>
  )
}

export default Header 