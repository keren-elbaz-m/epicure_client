import spicyBig from '@/../public/images/dishType/spicyBig.svg';
import veganBig from '@/../public/images/dishType/veganBig.svg';
import vegitarianBig from '@/../public/images/dishType/vegitarianBig.svg';
import { TypeDishIcon } from "@/types";

export const dishIcons = [
  { type: TypeDishIcon.SPICY, src: spicyBig, label: "Spicy" },
  { type: TypeDishIcon.VEGETARIAN, src: vegitarianBig, label: "Vegetarian" },
  { type: TypeDishIcon.VEGAN, src: veganBig, label: "Vegan" },
];