import DetailPage from "../page/detailPage.js";
import { baseUrl } from "../util.js";
import handleMainPage from "./mainHandler.js";

export default async function handleDetailPage(pathname) {
  const detailPage = new DetailPage();
  await detailPage.getPostApi(pathname);
  detailPage.renderPostView();
  detailPage.renderCommentView();

  const editBtn = document.querySelector(".post-edit-btn");
  editBtn.addEventListener("click", async () => {
    await fetch(`${baseUrl}${pathname.slice(1)}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "제목",
        content: "내용",
      }),
    });
  });

  const postdeleteBtn = document.querySelector(".post-delete-btn");
  postdeleteBtn.addEventListener("click", async () => {
    await fetch(`${baseUrl}${pathname.slice(1)}`, { method: "DELETE" });
    window.history.pushState({}, "", "/");
    handleMainPage();
  });
}
