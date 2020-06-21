import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPeopleArrows,
  faGift,
  faStar,
  faWater,
} from "@fortawesome/free-solid-svg-icons";
import "../style/GithubItem.css";

class GithubItem extends React.Component {
  constructor(props) {
    super(props);
  }

  ToGithubPage = () => {
    window.location.href = this.props.htmlUrl;
  };

  render() {
    const {
      listNum,
      avatar,
      name,
      stargazersCount,
      forksCount,
      openIssuesCount,
    } = this.props;

    const imgStyle = {
      width: "80%",
      margin: "0 auto",
    };

    const titleStyle = {
      fontSize: "25px",
      padding: "15px 0",
    };

    const nameStyle = {
      color: "indianred",
      fontWeight: "500",
    };

    const itemDetStyle = {
      textAlign: "left",
      margin: "0 auto",
    };

    const peopleStyle = {
      color: "orange",
      marginRight: "9px",
    };
    const starsStyle = {
      color: "#FFD700",
      marginRight: "9px",
    };
    const forksStyle = {
      color: "skyblue",
      marginRight: "9px",
    };
    const issuesStyle = {
      color: "#EDA1A7",
      marginRight: "9px",
    };
    return (
      <div
        className="github-item"
        onClick={this.ToGithubPage}
      >
        <span style={titleStyle}>#{listNum}</span>
        <img src={avatar} alt="" style={imgStyle} />
        <p style={nameStyle}>{name}</p>
        <div style={itemDetStyle}>
          <div>
            <FontAwesomeIcon style={peopleStyle} icon={faPeopleArrows} />
            <span>{name}</span>
          </div>
          <div>
            <FontAwesomeIcon style={starsStyle} icon={faStar} />
            <span>{stargazersCount}stars</span>
          </div>
          <div>
            <FontAwesomeIcon style={forksStyle} icon={faGift} />
            <span>{forksCount}forks</span>
          </div>
          <div>
            <FontAwesomeIcon style={issuesStyle} icon={faWater} />
            <span>{openIssuesCount}openissues</span>
          </div>
        </div>
      </div>
    );
  }
}

export default GithubItem;
