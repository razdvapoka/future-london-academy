import styles from './style.styl'
import Section from '../section'

const What = () => (
  <Section
    className={styles.what}
    title={`what<br />is<br />it`}
    text={`
        An executive programme broken down
        into 5 intense modules in London,
        2 weeks each.<br /><br />
        Forget boring professors and outdated
        business knowledge. You will be taught
        by CEOs, CTOs and Heads of Design
        from the top businesses, startups and
        products companies.
    `}
  />
)

export default What
