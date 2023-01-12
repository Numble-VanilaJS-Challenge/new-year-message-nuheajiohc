const urlTitle = "HPNY 2023";

document.addEventListener("click", e => {
  const { target } = e;
  if (!target.matches("div a")) {
    return;
  }
  e.preventDefault();
  urlRoute();
});

const urlRoutes = {
  404: {
    template: "/templates/404.html",
    title: `${urlTitle} | 404`,
    description: "Page not found",
  },
  "/": {
    template: "/templates/mainPage.html",
    title: `${urlTitle} | main`,
    description: "This is main Page",
  },
  "/post-input": {
    template: "/templates/postingPage.html",
    title: `${urlTitle} | posting-page`,
    description: "This is posting Page",
  },
  "/post-detail": {
    template: "/templates/postViewPage.html",
    title: `${urlTitle} | posts View Page`,
    description: "This if postis View Page",
  },
};

const urlRoute = event => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  urlLocationHandler();
};

const urlLocationHandler = async () => {
  const location = window.location.pathname;
  if (location.length === 0) {
    location = "/";
  }

  const route = urlRoutes[location] || urlRoutes[404];
  const html = await fetch(route.template).then(response => response.text());
  document.querySelector("#content").innerHTML = html;
  document.title = route.title;
};

//뒤로가기,앞으로가기 구현
window.onpopstate = urlLocationHandler;
window.route = urlRoute;

//첫 시작부터 메인페이지 띄우는 기능
urlLocationHandler();
