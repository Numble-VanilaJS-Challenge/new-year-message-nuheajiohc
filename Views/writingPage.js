export default class WritingView {
  constructor() {
    this.image;
  }

  getApi() {
    return fetch("http://43.201.103.199/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: document.querySelector("#textarea-title").value,
        content: document.querySelector("#textarea-content").value,
        image: this.image,
      }),
    });
  }

  renderView() {
    const content = document.querySelector(".content");
    content.innerHTML = `<button class="add-random-image">랜덤 이미지 추가하기</button>
    <input placeholder ="글 제목을 작성해주세요" id="textarea-title">
    <textarea placeholder="글 내용을 작성해주세요." id="textarea-content" maxlength="500"></textarea>
    <button id="submit-button">글 작성하기</button>`;
  }

  manipulateView() {
    const submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", async e => {
      await this.randomImage();
      await this.getApi();
    });
  }

  randomImage() {
    return fetch("http://source.unsplash.com/random").then(res => {
      console.log(res.url);
      this.image = res.url;
    });
  }
}
