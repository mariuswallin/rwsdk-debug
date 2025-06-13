import { defineApp } from "rwsdk/worker";

import { render, route } from "rwsdk/router";
import { Document } from "@/app/Document";

import { setCommonHeaders } from "./app/headers";
import Exhibitions from "@/app/pages/Exhibitions";

const app = defineApp([
  setCommonHeaders(),
  render(Document, [route("/", () => <Exhibitions />)]),
]);

export default {
  fetch: app.fetch,
};
