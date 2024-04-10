import { StyledOl } from "./styles"

const Instructions = () => {
  return (
    <>
      <h2>Instructions</h2>
      <StyledOl>
        <li>
          <span>Beat the eggs: </span> 
          <span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</span> 
        </li>
        <li>
          <span>Heat the pan: </span><span>Place a non-stick frying pan over medium heat and add butter or oil.</span>
        </li>
        <li>
          <span>Cook the omelette: </span><span>Once the butter is melted and bubbling, pour in the eggs. Tilt
          the pan to ensure the eggs evenly coat the surface.</span>
        </li>
        <li>
          <span>Add fillings (optional): </span><span>When the eggs begin to set at the edges but are still slightly runny in the
          middle, sprinkle your chosen fillings over one half of the omelette.</span>
        </li>
        <li>
          <span>Fold and serve: </span><span>As the omelette continues to cook, carefully lift one edge and
          fold it over the fillings. Let it cook for another minute, then slide it
          onto a plate.</span>
        </li>
        <li>
          <span>Enjoy: </span><span>Serve hot, with additional salt and pepper if needed.</span>
        </li>
      </StyledOl>
    </>
  )
}

export default Instructions 