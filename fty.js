var rule = {
  title: "饭太硬自托管",
  host: "https://ghproxy.net/https://raw.githubusercontent.com/JackLeeo/tvbox-source/main/fty.json",
  url: "",
  searchUrl: "",
  playUrl: "",
  parse: function (html) {
    return JSON.parse(html);
  }
};
