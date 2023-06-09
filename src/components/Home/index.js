// Write your code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <div className="home-container">
      <Header />
      <div className="home-card">
        <div className="mobile-home">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
            alt="home"
          />
        </div>
        <div className="desktop-home">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="home"
          />
        </div>
      </div>
    </div>
  </>
)
export default Home
