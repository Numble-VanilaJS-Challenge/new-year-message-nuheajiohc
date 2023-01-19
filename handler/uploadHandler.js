import UploadPage from "../page/UploadPage.js";
import handleMainPage from "./mainHandler.js";

export default function handleUploadPage() {
  const uploadPage = new UploadPage();
  uploadPage.renderPage();

  const imgAddBtn = document.querySelector(".img-add-btn");
  const submitBtn = document.querySelector(".submit-btn");
  const inputTitle = document.querySelector(".input-title");
  const textareaContent = document.querySelector(".textarea-content");

  imgAddBtn.addEventListener("click", handleImgAdd);
  function handleImgAdd() {
    uploadPage.addImage();
    imgAddBtn.disabled = true;
    imgAddBtn.innerHTML = "이미지 추가 완료";
  }

  imgAddBtn.addEventListener("click", handleSubmit);
  inputTitle.addEventListener("keyup", handleSubmit);
  textareaContent.addEventListener("keyup", handleSubmit);
  submitBtn.addEventListener("click", sumbitPost);

  function handleSubmit() {
    const isCompleteInput = inputTitle.value && textareaContent.value && imgAddBtn.disabled === true;
    submitBtn.disabled = !isCompleteInput;
  }

  async function sumbitPost() {
    await uploadPage.submitPostApi();
    window.history.pushState({}, "", "/");
    handleMainPage();
  }
}

// await uploadPage.sendpost();
