import axios from "axios";

export default function ajax(url, data = {}, type = "GET") {
  if (type === "GET") {
    //准 备 url query参 数 数 据
    let dataStr = ""; // 数 据 拼 接 字 符 串
    Object.keys(data).forEach((key) => {
      dataStr += key + "=" + data[key] + "&";
    });
    if (dataStr !== "") {
      dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
      url = url + "?" + dataStr;
    }
    return axios.get(url);
  } else {
    return axios.post(url, data);
  }
}
