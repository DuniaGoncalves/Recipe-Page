import { StyledUl } from './styles'

const Nutrition = () => {
  return (
    <>
      <h2>Nutrition</h2>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <StyledUl>
          <li><span>Calories</span><span>277kcal</span></li>
          <li><span>Carbs</span><span>0g</span></li>
          <li><span>Protein</span><span>20g</span></li>
          <li><span>Fat</span><span>22g</span></li>
        </StyledUl>
    </>
  )
}

export default Nutrition 