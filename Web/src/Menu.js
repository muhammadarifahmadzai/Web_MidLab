import { Link } from "react-router-dom";
import logo from "./cricket.png";

function Menu() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg "
        style={{ backgroundColor: "#3B9AE1", height: "6vh" }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "40px",
            height: "30px",
            marginLeft: "5vw",
            marginRight: "5vw",
          }}
        />
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li
                id="main"
                class="nav-item nav-link"
                style={{ fontSize: 12, color: "white" }}
              >
                Live Score
                <ul id="submain" style={{ listStyle: "none", color: "black" }}>
                  <li >
                    <Link to="/live score home" className="submainChild">Score Home</Link>
                  </li>
                  <li>
                    <Link to="/result" className="submainChild">Result</Link>
                  </li>
                  <li>
                    <Link to="/season" className="submainChild">Season view</Link>
                  </li>
                  <li>
                    <Link to="/desktop scoreborad" className="submainChild">Desktop Scoreboard</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link to="/series" class="nav-link" style={{ color: "white" }}>
                  Series
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link to="/teams" class="nav-link" style={{ color: "white" }}>
                  Teams
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link to="/news" class="nav-link" style={{ color: "white" }}>
                  News
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link
                  to="/features"
                  class="nav-link"
                  style={{ color: "white" }}
                >
                  Features
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link to="/videos" class="nav-link" style={{ color: "white" }}>
                  Videos
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link to="/stats" class="nav-link" style={{ color: "white" }}>
                  Stats
                </Link>
              </li>
              {/* <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link to="/stats" class="nav-link" style={{ color: "white" }}>
                  {/* <img src={}/> */}
              {/* </Link>
              </li>
              <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link to="/stats" class="nav-link" style={{ color: "white" }}>
                  Stats
                </Link>
              </li>
              <li class="nav-item" style={{ fontSize: 12, marginLeft: 20 }}>
                <Link to="/stats" class="nav-link" style={{ color: "white" }}>
                  Stats
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
