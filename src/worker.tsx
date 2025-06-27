import { defineApp } from "rwsdk/worker";

import { render, route } from "rwsdk/router";
import { Document } from "@/app/Document";

import { setCommonHeaders } from "./app/headers";
import MainPage from "@/app/pages/MainPage";

const app = defineApp([
  setCommonHeaders(),
  render(Document, [route("/", () => <MainPage />)]),
]);

export default {
  fetch: app.fetch,
};
