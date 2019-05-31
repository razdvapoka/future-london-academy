import style from './style.styl'
import {
  Intro,
  What,
  Who,
  Understand,
  Apply,
  Footer,
  Advisors
} from '../../components'

const Home = () => (
  <div className={style.home}>
    <Intro />
    <What />
    <Advisors />
    <Who />
    <Understand />
    <Apply />
    <Footer
      className={style.footer}
      hasRoles
    />
  </div>
)

export default Home
