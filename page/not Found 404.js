import { documentTitle } from "../util.js";

export default class NotFoundPage {
  constructor() {
    document.title = documentTitle.notFound;
  }

  renderPage() {}
}
