import { baseUrl, endPoint, randomImageUrl, documentTitle } from "../util.js";

export default class UploadPage {
  #imageUrl;

  constructor() {
    document.title = documentTitle.upload;
    this.#imageUrl;
  }

  submitPostApi() {
    const $ = selector => document.querySelector(selector);
    return fetch(baseUrl + endPoint.uploadPost, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: $(".input-title").value,
        content: $(".textarea-content").value,
        image: this.#imageUrl,
      }),
    });
  }

  renderPage() {
    const sectionTagSelector = document.querySelector("section");
    sectionTagSelector.className = "upload-section";
    const backLink = document.querySelector(".back-link");
    backLink.classList.remove("hidden");
    sectionTagSelector.innerHTML = `
    <button class="img-add-btn">랜덤 이미지 추가하기</button>
    <input placeholder="글 제목을 작성해주세요." class="input-title" maxlength="50">
    <textarea placeholder="글 내용을 작성해주세요." class="textarea-content" maxlength="500"></textarea>
    <button class="submit-btn" disabled="">글 작성하기</button>`;
  }

  async addImage() {
    const response = await fetch(randomImageUrl);
    this.#imageUrl = response.url;
  }
}
