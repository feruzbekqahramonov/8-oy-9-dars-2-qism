import siteLogo from "../assets/siteLogo.svg";
import mainImg from "../assets/main.svg";
import pageImg2 from "../assets/pageImg2.svg";
import pageImg3 from "../assets/pageImg3.svg";
import pageImg4 from "../assets/pageImg4.svg";
import pageImg5 from "../assets/pageImg5.svg";
import user from "../assets/user.png";
import './index.css'

function Header() {
  return (
    <div>
        <div className="header">
        <div className="header-container">
          <img src={siteLogo} alt="" />
          <div className="links">
            <div className="pagesUrl">
              <img src={mainImg} alt="" />
              <p>Asosiy</p>
            </div>
            <div className="pagesUrl">
              <img src={pageImg2} alt="" />
              <p>Mijozlar bazasi</p>
            </div>
            <div className="pagesUrl">
              <img src={pageImg3} alt="" />
              <p>Tracking loyihalari</p>
            </div>
            <div className="pagesUrl">
              <img src={pageImg4} alt="" />
              <p>Sharh olish loyihalari</p>
            </div>
            <div className="pagesUrl">
              <img src={pageImg5} alt="" />
              <p>Redirect loyihalari</p>
            </div>
          </div>
          <div className="select">
            <img src={user} alt="" />
            <select>
              <option value="Austin Robertson" className="select">
                Austin Robertson
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header