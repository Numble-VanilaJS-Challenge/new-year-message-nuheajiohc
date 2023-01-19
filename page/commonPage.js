export default class CommonPage {
  constructor() {}
  renderPage() {
    const titleBarSelector = document.querySelector(".title-bar");
    titleBarSelector.innerHTML = `
    <div>
        <a href="/" class="back-link hidden"><img class="backIcon" src="./icon/backIcon.png" /></a>
      </div>
      <div>
        <a href="/" class="title-name">HPNY 2023</a>
      </div>
      `;
  }
}
