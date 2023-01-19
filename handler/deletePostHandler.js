export default async function handleDeletePost(event, pathname) {
  return fetch(pathname, { method: "DELETE" });
}
