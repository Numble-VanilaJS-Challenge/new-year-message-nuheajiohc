import HomeView from "./Views/home.js";
import WritingView from "./Views/writingPage.js";
import DetailPostView from "./Views/detailPostPage.js";

const checkPressibleButton = event => {
  const { target } = event;
  event.preventDefault();
  const isPressibleButton = target.matches(".pressable-button");
  if (!isPressibleButton) return;
  setupRouting(target);
};

const setupRouting = target => {
  history.pushState({}, null, target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  const location = window.location.pathname;
  const route = views[location];
  //console.log(window.location);
  //console.log(location, "/post/:postId");
  //console.log(location === "/post/:postId");
  route();
};

const views = {
  "/": async () => {
    const homeView = new HomeView();
    await homeView.getApi();
    homeView.renderView();
  },
  "/post/:postId": async () => {
    const detailPostView = new DetailPostView();
    await detailPostView.getApi();
    detailPostView.renderView();
  },
  "/writing-page": () => {
    const writngView = new WritingView();
    writngView.renderView();
    writngView.manipulateView();
  },
};

//뒤로가기,앞으로가기 구현
addEventListener("popstate", urlLocationHandler);
//window.route = urlRoute;

// //첫 시작부터 메인페이지 띄우는 기능
urlLocationHandler();

document.addEventListener("click", checkPressibleButton);
