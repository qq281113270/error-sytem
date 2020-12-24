import path from "path";
import { getOptions } from "loader-utils";
export default function (source) {
  const callback = this.async();
  const options = getOptions(this);
  const { name } = options;
  console.log("name============", name);
  console.log("source========", source);
  callback(null, source);
}
