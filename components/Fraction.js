import { getFraction } from "../utils/fraction";
import { Stack } from "@mui/material";
const Fraction = ({ count, ing, serves, index }) => {
  let conversionRate = count / serves[0].numberOfServing;
  // let fraction;
  //   if (conversionRate % 2) {
  //     fraction = getFraction(conversionRate);
  //     console.log("fraction", fraction.numerator);
  //   } else {
  //     fraction = conversionRate;
  //   }
  console.log("index", index);
  return (
    <li>
      <Stack key={index} direction="row">
        {ing.quantity * conversionRate}
        {ing.unit} {ing.description}
      </Stack>
    </li>
  );
};

export default Fraction;
