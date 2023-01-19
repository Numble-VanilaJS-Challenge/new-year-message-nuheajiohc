import { baseUrl, documentTitle } from "../util.js";

export default class DetailPage {
  constructor() {
    document.title = documentTitle.detail;
    this.postInfoList;
    this.commentsInfoList;
    const backLink = document.querySelector(".back-link");
    backLink.classList.remove("hidden");
  }

  async getPostApi(endPoint) {
    const response = await fetch(`${baseUrl}${endPoint.slice(1)}`);
    const { data } = await response.json();
    const { post, comments } = data;
    this.postInfoList = post;
    this.commentsInfoList = comments;
  }

  renderPostView() {
    const sectionTagSelector = document.querySelector("section");
    sectionTagSelector.className = "detail-section";
    const { title, content, createdAt, image } = this.postInfoList;
    const createdDate = createdAt.slice(0, 10);
    sectionTagSelector.innerHTML = `
    <article class="post-article">
      <img src=${image} class="post-img">
      <strong class="post-title">${title}</strong>
      <span>${createdDate}</span>
      <p class="post-content">${content}</p>
      <div class="btn-wrapper">
        <button class="post-edit-btn"><img class="icon" src="../icon/editIcon.png"></button>
        <button class="post-delete-btn"><img class="icon" src="../icon/deleteIcon.png"></button>
      </div>
    </article>`;
  }

  renderCommentView() {
    const sectionTagSelector = document.querySelector("section");
    sectionTagSelector.innerHTML += `
    <section class="comment-section">
      <form>
        <input>
        <button type="submit">게시</button>
      </form>
      <ul class="comment-list"></ul>
    </section>`;

    this.commentsInfoList.forEach(comment => {
      const { content } = comment;
      const commentList = document.querySelector(".comment-list");
      commentList.innerHTML += `
      <li class="comment">
        <p>${content}</p>
        <button class="comment-delete-btn">삭제</button>
      </li>`;
    });
  }
}
