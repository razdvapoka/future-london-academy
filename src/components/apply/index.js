import styles from './style.styl'
import Section from '../section'

const Apply = () => (
  <Section
    className={styles.apply}
    title={`apply&nbsp;<br />now`}
    text={`
     Leave your email to get more information
     and be updated when application
     process starts. The earlier you apply the
     better chance you will have to join us in
     2020.<br /><br />
     If you have any questions, email
     <a href='mailto:ekaterina@futurelondonacademy.co.uk'>
       ekaterina@futurelondonacademy.co.uk
     </a>
    `}
  />
)

export default Apply
