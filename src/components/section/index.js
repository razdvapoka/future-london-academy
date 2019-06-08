import styles from './style.styl'
import { withClass } from '../../utils'
import { Huge, Regular } from '../text'
import Point from '../point'

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
      {title && <Point />}
      <Huge
        as='h2'
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </Column>
    <Column>
      <Text
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </Column>
  </SectionBox>
)

export default Section
