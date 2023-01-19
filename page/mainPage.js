import { baseUrl, endPoint, documentTitle } from "../util.js";

export default class MainPage {
  #postsInfoList;

  constructor() {
    document.title = documentTitle.main;
    this.#postsInfoList;
  }

  async getApi() {
    const response = await fetch(baseUrl + endPoint.loadPosts);
    const { data } = await response.json();
    this.#postsInfoList = data.posts;
  }

  setPageFrame() {
    const sectionTagSelector = document.querySelector("section");
    sectionTagSelector.className = "main-section";
    const postButtonTag = document.createElement("div");
    postButtonTag.className = "post-btn-wrapper";
    sectionTagSelector.innerHTML = "";
    sectionTagSelector.appendChild(postButtonTag);

    const postListTag = document.createElement("ul");
    sectionTagSelector.appendChild(postListTag);
    postListTag.className = "post-list";

    const backLink = document.querySelector(".back-link");
    backLink.classList.add("hidden");
  }

  renderPage() {
    const postBtnWrapperSelector = document.querySelector(".post-btn-wrapper");
    postBtnWrapperSelector.innerHTML = `
    <a href="/upload" class="post-btn">
        <img src="./icon/pencilIcon.png" class="pencil-icon" />
      게시글 작성하기
    </a>`;

    const postListSelector = document.querySelector(".post-list");

    this.#postsInfoList.forEach(postInfo => {
      const { postId, title, content, image } = postInfo;

      postListSelector.innerHTML += `
      <li class="post">
        <a href="/post/${postId}">
          <img src="${image}">
          <div>
            <strong class="post-title">${title}</strong>
            <p class="post-content">${content}</p>
          </div>
        </a>
      </li>`;
    });
  }
}
