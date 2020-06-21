import React from "react";
import GithubItem from "./GithubItem";

import axios from "axios";
import "../style/Tab.css";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: [
        {
          name: "java",
          url:
            "q=stars:%3E11+language:java&sort=stars&order=desc&type=Repositories",
        },
        {
          name: "javascript",
          url:
            "q=stars:%3E11+language:javascript&sort=stars&order=desc&type=Repositories",
        },
        {
          name: "css",
          url:
            "q=stars:%3E11+language:css&sort=stars&order=desc&type=Repositories",
        },
        {
          name: "ruby",
          url:
            "q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories",
        },
        {
          name: "python",
          url:
            "q=stars:%3E1+language:python&sort=stars&order=desc&type=Repositories",
        },
      ],
      tabName: "All",
      tabUrl: "q=stars:%3E11&sort=stars&order=desc&type=Repositories",
      url: "https://api.github.com/search/repositories?",
      githubData: [],
    };
  }

  switchTab = (e, { name, url }) => {
    let { target } = e;
    const filterOption = target.getAttribute("data-filter");
    if (filterOption) {
      document
        .querySelectorAll(".tab-list.active")
        .forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
    this.setState({
      tabName: name,
      tabUrl: url,
    });
    setTimeout(() => {
      this.FetchGit();
    }, 200);
  };

  async FetchGit() {
    this.setState({
      githubData: [],
    });
    const res = await axios.get(this.state.url + this.state.tabUrl);
    this.setState({
      githubData: res.data.items,
    });
  }

  componentDidMount() {
    this.FetchGit();
  }

  render() {
    const { githubData } = this.state;
    const tabStyle = {
      marginTop: "14px",
      marginBottom: "18px",
      width:"100vw"
    };
    const titleStyle = {
        fontSize:"25px",
        fontWeight:"500",
        paddingTop:"20px",
        display:"block",
        width:"100vw"
    }
    return (
      <div>
        <span style={titleStyle}>Github热门项目</span>
        <div style={tabStyle}>
          <button
            className="tab-list active"
            data-filter="All"
            onClick={(e) =>
              this.switchTab(e, {
                name: "All",
                url: "q=stars:%3E11&sort=stars&order=desc&type=Repositories",
              })
            }
          >
            All
          </button>
          {this.state.tabList.map((list, index) => {
            return (
              <button
                key={index}
                className="tab-list"
                data-filter={list.name}
                onClick={(e) => this.switchTab(e, list)}
              >
                {list.name}
              </button>
            );
          })}
        </div>
        <div className="list-content">
          {githubData.length !== 0 ? (
            githubData.map((item, index) => {
              return (
                <GithubItem
                  key={index}
                  listNum={++index}
                  avatar={item.owner.avatar_url}
                  name={item.name}
                  stargazersCount={item.stargazers_count}
                  forksCount={item.forks_count}
                  openIssuesCount={item.open_issues_count}
                  htmlUrl={item.html_url}
                />
              );
            })
          ) : (
            <div >刷新中...</div>
          )}
        </div>
      </div>
    );
  }
}

export default Tab;
