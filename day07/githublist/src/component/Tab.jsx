import React from "react";
import GithubItem from "./GithubItem";
import { connect } from "react-redux";

import "../style/Tab.css";

class TabCom extends React.Component {
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
      count: 0,
    };
  }


  //根据按钮名字动态添加样式
  btnStyle(target = null) {
    let filterOption = null;
    if (target === null) {
      let name = localStorage.getItem("name") ? localStorage.getItem("name"):"All"
      filterOption = document.getElementById(name);
      if (filterOption) {
        document
          .querySelectorAll(".tab-list.active")
          .forEach((btn) => btn.classList.remove("active"));
        filterOption.classList.add("active");
      }
    } else {
      filterOption = target.getAttribute("data-filter");
      if (filterOption) {
        document
          .querySelectorAll(".tab-list.active")
          .forEach((btn) => btn.classList.remove("active"));
        target.classList.add("active");
      }
    }
  }

  //切换按钮动画
  switchTab = (e, { name, url }) => {
    let { target } = e;
    this.btnStyle(target)
    this.setState({
      tabName: name,
      tabUrl: url,
    });
    //保存状态到本地存储
    localStorage.setItem("name", name);
    localStorage.setItem("url", url);
    //调用saga方法
    this.props.getGitHubDataListAsync("setGitHubDataListSaga", url);
  };

  //刷新获取旧数据
   FetchGit() {
    this.setState({
      githubData: [],
    });
    //刷新次数为一表示页面冲刷
    if (this.state.count === 0) {
      //判断本地存储
      const name = localStorage.getItem("name");
      if (name) {
        this.props.getGitHubDataListAsync(
          "setGitHubDataListSaga",
          localStorage.getItem("url")
        );

        this.setState({
          count: this.state.count + 1,
          name: localStorage.getItem("name"),
          tabUrl: localStorage.getItem("url"),
        });
        this.btnStyle();
      } else {
        this.props.getGitHubDataListAsync(
          "setGitHubDataListSaga",
          this.state.tabUrl
        );
        this.btnStyle()
      }
    } else {
      this.props.getGitHubDataListAsync(
        "setGitHubDataListSaga",
        this.state.tabUrl
      );
    }
  }

  componentDidMount() {
    this.FetchGit();
  }

  render() {
    const githubData = this.props.list.splice(0,10);
    const tabStyle = {
      marginTop: "14px",
      marginBottom: "18px",
      width: "100vw",
    };
    const titleStyle = {
      fontSize: "25px",
      fontWeight: "500",
      paddingTop: "20px",
      display: "block",
      width: "100vw",
    };
    return (
      <div>
        <span style={titleStyle}>Github热门项目</span>
        <div style={tabStyle}>
          <button
            className="tab-list"
            data-filter="All"
            id="All"
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
                id={list.name}
                onClick={(e) => this.switchTab(e, list)}
              >
                {list.name}
              </button>
            );
          })}
        </div>
        <div className="list-content">
          {githubData ? (
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
            <div>刷新中...</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    ...state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getGitHubDataListAsync: (type, url) => dispatch({ type, url }),
  };
};
const Tab = connect(mapStateToProps, mapDispatchToProps)(TabCom);
export default Tab;
