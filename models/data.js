const topMeals = [
  {
    id: 1,
    name: "Chicken Teriyaki",
    price: 15.99,
    image: "./media/Chicken_Teriyaki.jpg",
  },
  {
    id: 2,
    name: "Beef Gratin",
    price: 12.49,
    image: "./media/Beef_Gratin.jpg",
  },
  {
    id: 3,
    name: "Bombay Spiced Chicken",
    price: 55.99,
    image: "./media/Bombay_Spiced_Chicken.jpg",
  },
  {
    id: 4,
    name: "Coconut Curry Shrimp",
    price: 14.34,
    image: "./media/Coconut_Curry_Shrimp.jpg",
  },
  {
    id: 5,
    name: "Garlic Butter Salmon",
    price: 15.3,
    image: "./media/Garlic_Butter_Salmon.jpg",
  },
  {
    id: 6,
    name: "Pan Roast Mushroom Chicken",
    price: 17.99,
    image: "./media/Pan_Roast_Mushroom_Chicken.jpg",
  },
  {
    id: 7,
    name: "Roasted Chicken and Gravy",
    price: 11.55,
    image: "./media/Roasted_Chicken_and_Gravy.jpg",
  },
  {
    id: 8,
    name: "Sun-dried Tomato and Basil",
    price: 14.99,
    image: "./media/Sun-dried_Tomato_and_Basil.jpg",
  },
];

const topMealPackages = [
  {
    id: 1,
    name: "Weight Loss",
    price: 145,
    image: "./media/WEIGHTLOSS.jpg",
    description:
      "High protein, low-calorie meals with a nutrient profile tuned for weight loss",
  },
  {
    id: 2,
    name: "Muscle Gain",
    price: 175,
    image: "./media/MUSCLEGAIN.jpg",
    description:
      "Higher protein and calorie portions to support your muscle gain momentum",
  },
  {
    id: 3,
    name: "Keto",
    price: 159,
    image: "./media/KETO.jpg",
    description:
      "High fat, low carb meals with moderate protein to achieve and sustain ketosis",
  },
  {
    id: 4,
    name: "Fat Burner",
    price: 145,
    image: "./media/FATBURNER.jpg",
    description:
      "Low carb, nutrient-rich meals with fat-burning profiles to support fat loss",
  },
];

module.exports = Object.freeze({
  topMeals: topMeals,
  topMealPackages: topMealPackages,
});
