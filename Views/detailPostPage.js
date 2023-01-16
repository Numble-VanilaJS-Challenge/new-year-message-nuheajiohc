export default class DetailPostView {
  constructor() {
    this.postInfoList;
    this.commentsInfoList;
  }

  getPostApi(postId) {
    return fetch(`http://43.201.103.199/post/${postId}`)
      .then(res => res.json())
      .then(({ data }) => {
        const { post, comments } = data;
        this.postInfoList = post;
        this.commentsInfoList = comments;
      });
  }

  renderPostView() {
    const selectorContent = document.querySelector(".content");
    const { title, content, createdAt, image } = this.postInfoList;
    selectorContent.innerHTML = `<article id="post-article"><img src=${image} id="post-img"><strong>${title}</strong><span>${createdAt}</span><p>${content}</p><button id="post-update-button">수정 📝</button><button id="post-delete-button">삭제 🗑</button></article>\n`;
  }

  renderCommentView() {
    const selectorContent = document.querySelector(".content");
    selectorContent.innerHTML += `<section id="comment-section"><form><input><button type="submit">게시</button></form><ul id="comment-list"></ul></section>`;
    this.commentsInfoList.forEach(comment => {
      const { content } = comment;
      const commentList = document.querySelector("#comment-list");
      commentList.innerHTML += `<li id="comment"><p>${content}</p><button id="comment-delete-btn">삭제</button></li>\n`;
    });
  }
}
