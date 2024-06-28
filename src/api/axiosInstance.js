import axios from "axios";

export default axios.create({
  baseURL: "http://152.69.225.60/",
  timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});
