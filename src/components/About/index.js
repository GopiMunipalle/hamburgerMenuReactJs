// Write your code here
import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <div className="about-container">
      <Header />
      <div className="about-mobile">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
          alt="about"
        />
      </div>
      <div className="about-desktop">
        <img
          src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
          alt="about"
        />
      </div>
    </div>
  </>
)
export default About
