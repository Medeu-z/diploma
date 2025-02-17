import "./index.scss";
import user from "../../../app/assets/images/user1.png";
import instagram from "../../../app/assets/icons/instagram.svg";
import telegram from "../../../app/assets/icons/telegram.svg";
import CommentIcon from "@mui/icons-material/Comment";

export const UserAnketa = () => {
  return (
    <div className="user-anketa">
      <div className="user-anketa-right">
      <div className="right-anketa-header">
          <div className="anketa-header-title">Hi, I’m Madina Alzhan</div>
          <div className="anketa-header-age">24 <div>.</div> Female</div>
        </div>
        <div className="anketa-body user-anketa-body">
        <table>
          <tbody>
            <tr>
              <th>About</th>
              <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it</td>
            </tr>
            <tr>
              <th>Work</th>
              <td>Manager</td>
            </tr>
            <tr>
              <th>University</th>
              <td>Al-Farabi</td>
            </tr>
            <tr>
              <th>Phone number</th>
              <td>+7 707 855 2200</td>
            </tr>
            <tr>
              <th>Lifestyle</th>
              <td className="anketa-lifestyle">
                <ul>
                  <li>extroverted</li>
                  <li>artist/creative</li>
                  <li>health/wealness</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div className="user-anketa-left">
          <div className="user-anketa-left-card">
            <img src={user} alt="Author" />
            <div>
                <button className="post-author-chat">
                  <CommentIcon sx={{ color: "white", mr: "2px", width: "18px" }} />
                  Start a chat
                </button>
                <ul>
                    <li><a href="https://www.instagram.com/sdukz/"><img src={telegram} alt="" /> @madinkalzh</a></li>
                    <li><a href="https://t.me/it_community_sdu"><img src={instagram} alt="" /> @madinkalzh</a></li>
                </ul>
            </div>
          </div>
      </div>
    </div>);
};
