import styles from './style.styl'
import Section from '../section'

const What = () => (
  <Section
    className={styles.what}
    title={`what&nbsp;<br /><span class='alt'>i</span>s&nbsp;<br /><span class='alt'>i</span>t`}
    text={`
        An executive programme broken down into
        5 intense 2-week modules in London
        and California.<br /><br />
        Forget boring professors and outdated
        business knowledge. You will be taught
        by CEOs, CTOs and Heads of Design
        from the top businesses, startups and
        products companies.
    `}
  />
)

export default What
