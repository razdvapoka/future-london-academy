import styles from './style.styl'
import { Caption } from '../text'
import { withClass } from '../../utils'
import {
  Virgin,
  Apple,
  Nike,
  WolfOlins,
  Microsoft,
  Facebook,
  Google,
  Ustwo,
  Pentagram,
  Skyscanner
} from '../icons'

const EXPERTS_I = [ {
  name: 'virgin',
  icon: Virgin,
  className: styles.virgin,
  href: ''
}, {
  name: 'apple',
  icon: Apple,
  className: styles.apple,
  href: ''
}, {
  name: 'nike',
  icon: Nike,
  className: styles.nike,
  href: ''
}, {
  name: 'wolf olins',
  icon: WolfOlins,
  className: styles.wolfOlins,
  href: ''
}, {
  name: 'microsoft',
  icon: Microsoft,
  className: styles.microsoft,
  href: ''
} ]

const EXPERTS_II = [ {
  name: 'facebook',
  icon: Facebook,
  className: styles.facebook,
  href: ''
}, {
  name: 'google',
  icon: Google,
  className: styles.google,
  href: ''
}, {
  name: 'ustwo',
  icon: Ustwo,
  className: styles.ustwo,
  href: ''
}, {
  name: 'pentagram',
  icon: Pentagram,
  className: styles.pentagram,
  href: ''
}, {
  name: 'skyscanner',
  icon: Skyscanner,
  className: styles.skyscanner,
  href: ''
} ]

const EXPERTS = [ ...EXPERTS_I, ...EXPERTS_II ].reduce((partitioned, expert, expertIndex) =>
  expertIndex % 2 === 0
    ? [ ...partitioned, [ expert ] ]
    : [
      ...partitioned.slice(0, partitioned.length - 1),
      [
        ...partitioned[partitioned.length - 1],
        expert
      ]
    ]
  , [])

const Row = withClass(styles.row)('div')
const RowM = withClass(styles.rowM)('div')
const Item = withClass(styles.item)('a')

const Experts = () => (
  <div className={styles.experts}>
    <Caption className={styles.caption}>
      Our experts work in some<br />
      of the leading companies<br />
      around the world
    </Caption>
    <Row>
      {EXPERTS_I.map(({ className, icon: Icon }) => (
        <Item>
          <Icon className={className} />
        </Item>
      ))}
    </Row>
    <Row>
      {EXPERTS_II.map(({ className, icon: Icon }) => (
        <Item>
          <Icon className={className} />
        </Item>
      ))}
    </Row>
    {EXPERTS.map(([ expert1, expert2 ]) => (
      <RowM>
        <Item>
          <expert1.icon className={expert1.className} />
        </Item>
        <Item>
          <expert2.icon className={expert2.className} />
        </Item>
      </RowM>
    ))}
  </div>
)

export default Experts
