import MainPage from "../page/mainPage.js";

export default async function handleMainPage() {
  const mainPage = new MainPage();
  await mainPage.getApi();
  mainPage.setPageFrame();
  mainPage.renderPage();
}
