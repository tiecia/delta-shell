import app from "ags/gtk4/app";
import "@/src/services/styles";
import request from "./request";
import { config } from "./options";
import { windows } from "./windows";

const dataRoot =
   typeof DATADIR !== "undefined" && DATADIR !== null ? DATADIR : SRC;

app.start({
   icons: `${dataRoot}/assets/icons`,
   instanceName: "delta-shell",
   main() {
      windows();
   },
   requestHandler(argv, response) {
      request(argv, response);
   },
});
