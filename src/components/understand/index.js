import styles from './style.styl'
import Section from '../section'
import { Caption } from '../text'

const Understand = () => (
  <Section
    className={styles.understand}
    titleComponent={Caption}
    hasPoint={false}
    title={`
      Understand how to lead people and build<br />
      design-led businesses, while making your<br />
      life and the world better.
    `}
  />
)

export default Understand
