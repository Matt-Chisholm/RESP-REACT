import Home from "../PortfolioContainer/Home/Home";

export const totalScreens = [
  {
    screen_name: "Home",
    component: Home,
  },
];

export const getScreenIndex = (screenName) => {
  if (!screenName) {
    return -1;
  }
  for (let i = 0; i < totalScreens.length; i++) {
    if (totalScreens[i].screen_name === screenName) {
      return i;
    }
  }
  return -1;
};
