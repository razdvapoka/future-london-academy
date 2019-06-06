import styles from './style.styl'
import Section from '../section'
import { Huge } from '../text'
import { Fragment } from 'preact'

const StartDate = () => (
  <Fragment>
    <Section
      className={styles.startDate}
      title='start&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:<br />date'
      text='july<br/>2020'
      textComponent={Huge}
    />
    <div className={styles.startDateM}>
      <div className={styles.point} />
      <div className={styles.startDateMContent}>
        <Huge>start<br />date</Huge>
        <Huge>:</Huge>
        <Huge>July<br />2020</Huge>
      </div>
    </div>
  </Fragment>
)

export default StartDate
