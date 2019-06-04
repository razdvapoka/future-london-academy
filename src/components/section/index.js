import styles from './style.styl'
import { withClass } from '../../utils'
import { Huge, Regular } from '../text'

const Column = withClass(styles.column)('div')
const SectionBox = withClass(styles.section)('section')

const Section = ({
  title,
  text,
  textComponent: Text = Regular,
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
      <Text
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Column>
  </SectionBox>
)

export default Section
