export default class HomeView {
  constructor() {
    this.postsInfoList;
  }

  getApi() {
    return fetch("http://43.201.103.199/posts")
      .then(res => res.json())
      .then(({ data }) => {
        this.postsInfoList = data.posts;
      });
  }

  renderView() {
    const ul = document.createElement("ul");
    ul.className = "post-list";
    const content = document.querySelector(".content");
    content.innerHTML = "";
    content.appendChild(ul);
    document.querySelector(".left-arrow-img").classList.add("hidden");
    this.postsInfoList.forEach(el => {
      const { postId, title, content, image, createdAt, updatedAt } = el;
      const li = document.createElement("li");
      li.className = "post";
      ul.appendChild(li);
      li.innerHTML = `<a class="pressable-button"href="/post/${postId}">
      <img src="${image}">
      <div>
        <strong>${title}</strong>
        <p>${content}</p>
      </div>
      </a>`;
    });
  }
}
