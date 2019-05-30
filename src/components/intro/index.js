import styles from './style.styl'
import ComponentFromProp from '../component-from-prop'
import { withClass, cc, range } from '../../utils'
import { Small, Big, Tiny } from '../text'
import { Fb, Tw, Ig, Yt, Li, Pc } from '../icons'

const Cell = withClass(
  cc(styles.gridCell, 'centered')
)(ComponentFromProp)

const Title = () => (
  <Cell className={styles.title}>
    <Small>
      FUtUre<br />
      London<br />
      AcAdemy
    </Small>
  </Cell>
)

const Description = () => (
  <Cell className={styles.description}>
    <Small>
      ImAgine you coUld
      learn from the
      leaderS at ApPle,
      Nike, Google, ViRgin,
      PentAgram All in One
      plAce? Some peoPle
      call it BauhAus 2.0.
      We cAll it FUtUre
      London AcAdemy.
    </Small>
  </Cell>
)

const Slogan = () => (
  <Cell className={styles.slogan}>
    <Big>
      FInally,  a busIneSs
      programme for
      desIgn leaders
    </Big>
  </Cell>
)

const Apply = () => (
  <Cell className={styles.apply} as='button'>
    <Big>
      Apply now
    </Big>
  </Cell>
)

const Date = () => (
  <Cell className={styles.date}>
    <Small as='span'>
      JULY 2020
    </Small>
  </Cell>
)

const createCells = (cols, rows) => range(cols).map(col => range(rows).map(row => <Cell style={{
  gridArea: `${row + 1} / ${col + 1} / span 1 / span 1`
}} />))

const cells = createCells(8, 4)

const IconBox = withClass(styles.icon)('a')
const Icon = ({ as, ...rest }) => (
  <IconBox {...rest}>
    <ComponentFromProp as={as} width='100%' height='100%' />
  </IconBox>
)

const Grid = () => (
  <div className={styles.gridBox}>
    <div className={styles.grid}>
      {cells}
      <Title />
      <Description />
      <Slogan />
      <Apply />
      <Date />
    </div>
  </div>
)

const Social = () => (
  <div className={styles.social}>
    <Icon as={Fb} className={styles.fb} />
    <Icon as={Tw} className={styles.tw} />
    <Icon as={Ig} className={styles.ig} />
    <Icon as={Yt} className={styles.yt} />
    <Icon as={Li} className={styles.li} />
    <Icon as={Pc} className={styles.pc} />
  </div>
)

const Bottom = () => (
  <div className={styles.bottom}>
    <p>
        ©2019 Future London Academy.{' '}
      <Tiny as='span' className='upper'>All rights reserved</Tiny>
    </p>
    <Social />
  </div>
)

const Intro = () => (
  <div className={styles.intro}>
    <Grid />
    <Bottom />
  </div>
)

export default Intro
