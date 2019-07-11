import styles from './style.styl'
import Section from '../section'

const Who = () => (
  <Section
    className={styles.who}
    title={`who&nbsp;<br /><span class="alt">i</span></span>s&nbsp;<br /><span class="alt">i</span></span>t&nbsp;<br />for`}
    text={`
      This programme is specially designed for
      creative leaders with 15+ years of experience. These are usually CEOs,
      Creative Directors, Design Directors, Heads of UX,
      Product Owners and Innovation
      Managers who want to be better leaders
      and take their career to a new level.<br /><br />
      There are only 20 people in the first
      cohort. The earlier you apply the better
      chance you will have to join us in 2020.
    `}
  />
)

export default Who
