import { Component } from 'preact'
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
  name: 'v<span class="alt">i</span>rg<span class="alt">i</span>n',
  icon: Virgin,
  className: styles.virgin,
  href: ''
}, {
  name: 'apple',
  icon: Apple,
  className: styles.apple,
  href: ''
}, {
  name: 'n<span class="alt">i</span>ke',
  icon: Nike,
  className: styles.nike,
  href: ''
}, {
  name: 'wolf ol<span class="alt">i</span>ns',
  icon: WolfOlins,
  className: styles.wolfOlins,
  href: ''
}, {
  name: 'm<span class="alt">i</span>crosoft',
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
const Circle = withClass(styles.circle)(Caption)

class Item extends Component {
  render () {
    const { name, className, icon: Icon } = this.props
    return (
      <a className={styles.item}>
        <Circle dangerouslySetInnerHTML={{ __html: name }} />
        <Icon className={className} />
      </a>
    )
  }
}

const Experts = () => (
  <div className={styles.experts}>
    <Caption className={styles.caption}>
      Our experts work in some<br />
      of the leading companies<br />
      around the world
    </Caption>
    <Row>
      {EXPERTS_I.map((expert) => (
        <Item {...expert} />
      ))}
    </Row>
    <Row>
      {EXPERTS_II.map((expert) => (
        <Item {...expert} />
      ))}
    </Row>
    {EXPERTS.map(([ expert1, expert2 ]) => (
      <RowM>
        <Item {...expert1} />
        <Item {...expert2} />
      </RowM>
    ))}
  </div>
)

export default Experts
