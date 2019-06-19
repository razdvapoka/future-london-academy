import style from './style.styl'
import {
  StartDate,
  Form,
  Building,
  Intro,
  What,
  Who,
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
    <Building />
    <StartDate />
    <Apply />
    <Form />
    <Footer
      className={style.footer}
      hasRoles
    />
  </div>
)

export default Home
