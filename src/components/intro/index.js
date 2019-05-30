import styles from './style.styl'
import ComponentFromProp from '../component-from-prop'
import { withClass, cc, range } from '../../utils'
import { Small, Big } from '../text'
import Footer from '../footer'

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

const Intro = () => (
  <div className={styles.intro}>
    <Grid />
    <Footer as='div' className={styles.bottom} />
  </div>
)

export default Intro
