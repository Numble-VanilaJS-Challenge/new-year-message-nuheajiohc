import handleMainPage from "./handler/mainHandler.js";
import handleUploadPage from "./handler/uploadHandler.js";
import handleDetailPage from "./handler/detailHandler.js";
import CommonPage from "./page/commonPage.js";
import { checkPostPageUrl } from "./util.js";

const commonPage = new CommonPage();
commonPage.renderPage();

document.addEventListener("DOMContentLoaded", loadPage);
document.addEventListener("click", routePage);
addEventListener("popstate", loadPage);

async function loadPage() {
  let location = window.location.pathname;
  if (checkPostPageUrl(location)) location = "/post";

  const render = pageMap[location] || pageMap[404];
  await render(window.location.pathname);
}

const pageMap = {
  404: a,
  "/": handleMainPage,
  "/upload": handleUploadPage,
  "/post": handleDetailPage,
};

async function routePage(event) {
  event.preventDefault();
  const renderButton = event.target.closest("a");
  if (!renderButton) return;
  window.history.pushState({}, "", renderButton.href);
  await loadPage();
}

function a() {
  console.log("111");
}
