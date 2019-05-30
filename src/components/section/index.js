import styles from './style.styl'
import { withClass } from '../../utils'
import { Huge, Regular } from '../text'

const Column = withClass(styles.column)('div')
const SectionBox = withClass(styles.section)('section')

const Section = ({
  title,
  text,
  ...rest
}) => (
  <SectionBox {...rest}>
    <Column>
      {title && <div className={styles.point} />}
      <Huge
        as='h2'
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </Column>
    <Column>
      <Regular
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Column>
  </SectionBox>
)

export default Section
