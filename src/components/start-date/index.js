import styles from './style.styl'
import Section from '../section'
import { Huge } from '../text'

const StartDate = () => (
  <Section
    className={styles.startDate}
    title='start&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<br />date'
    text='july<br/>2020'
    textComponent={Huge}
  />
)

export default StartDate
