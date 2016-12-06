export function setNav(page) {
  console.log("setting nav to page:", page);
  return {
    type: "SET_PAGE",
    payload: page
  }
}

export function setNavHome() {
  console.log("setting nav to home page!!!");
  return {
    type: "SET_HOME_PAGE",
    payload: null
  }
}
