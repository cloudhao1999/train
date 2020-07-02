import ajax from "./ajax";
let url = "https://api.github.com/search/repositories?";
export const getGitHubList = (tabUrl) => ajax(url + tabUrl);
