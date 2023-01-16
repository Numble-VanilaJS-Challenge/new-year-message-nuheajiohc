export default class DetailPostView {
  constructor() {
    this.postInfoList;
  }

  getPostApi() {
    console.log(1);
    return fetch("http://43.201.103.199/post/:postId");
  }

  renderView() {}
}
