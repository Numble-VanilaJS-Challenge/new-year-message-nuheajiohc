function checkPostPageUrl(location) {
  return /\/post\/[0-9]+$/.test(location);
}

const baseUrl = "http://43.201.103.199/";

const endPoint = {
  loadPosts: "posts",
  uploadPost: "post",
};

const randomImageUrl = "http://source.unsplash.com/random";

const documentTitle = {
  main: "HPNY 2023",
  upload: "HPNY 2023 | upload Post",
  detail: "HPNY 2023 | detail Post",
  notFound: "Not Found 404",
};

export { checkPostPageUrl, baseUrl, endPoint, randomImageUrl, documentTitle };
