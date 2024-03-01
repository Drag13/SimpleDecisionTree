import { calculateEntropy } from "./entropy";

test(`For the same values, entropy should be 0`, ()=> {
  const DATA = ["1" , "1", "1"];
  expect(calculateEntropy(DATA, DATA[0])).toBe(0);
})