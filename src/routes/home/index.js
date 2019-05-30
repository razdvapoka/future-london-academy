import style from './style.styl'
import { Intro, What, Who, Understand, Apply } from '../../components'

const Home = () => (
  <div className={style.home}>
    <Intro />
    <What />
    <Who />
    <Understand />
    <Apply />
  </div>
)

export default Home
