const baseUrl = "http://43.201.103.199/";

const endPoint = {
  loadPosts: "posts",
  loadOnePost: "post/:postId",
  uploadPost: "post",
  loadComment: "comment/:postId",
  deleteComment: "comment/:commentId",
};

const randomImageUrl = "http://source.unsplash.com/random";

export { baseUrl, endPoint, randomImageUrl };
