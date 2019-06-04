import style from './style.styl'
import {
  Form,
  Building,
  Intro,
  What,
  Who,
  Understand,
  Apply,
  Footer,
  Advisors,
  Experts
} from '../../components'

const Home = () => (
  <div className={style.home}>
    <Intro />
    <What />
    <Experts />
    <Advisors />
    <Who />
    <Understand />
    <Building />
    <Apply />
    <Form />
    <Footer
      className={style.footer}
      hasRoles
    />
  </div>
)

export default Home
