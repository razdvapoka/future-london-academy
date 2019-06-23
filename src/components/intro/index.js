import styles from './style.styl'
import ComponentFromProp from '../component-from-prop'
import { withClass, cc, range } from '../../utils'
import { Small, Big, Alt } from '../text'
import {
  FbIcon,
  TwIcon,
  IgIcon,
  YtIcon,
  LiIcon,
  PcIcon
} from '../social'

const Cell = withClass(
  cc(styles.gridCell, 'centered')
)(ComponentFromProp)

const Title = () => (
  <Cell className={styles.title}>
    <Small>
      F<Alt>u</Alt>t<Alt>u</Alt>re<br />
      London<br />
      <Alt>A</Alt>c<Alt>a</Alt>demy
    </Small>
  </Cell>
)
const Description = () => (
  <Cell className={styles.description}>
    <Small>
      <Alt>I</Alt>mAg<Alt>I</Alt>ne you coUld
      learn from the
      leaderS at ApPle,
      N<Alt>i</Alt>ke, Google, V<Alt>i</Alt>Rg<Alt>i</Alt>n,
      PentAgram All <Alt>i</Alt>n One
      plAce? Some peoPle
      call <Alt>i</Alt>t BauhAus 2.0.
      We cAll <Alt>i</Alt>t F<Alt>u</Alt>t<Alt>u</Alt>re
      London <Alt>a</Alt>c<Alt>a</Alt>demy.
    </Small>
  </Cell>
)

const Slogan = () => (
  <Cell className={styles.slogan}>
    <Big>
      F<Alt>I</Alt>nally,  a bus<Alt>I</Alt>neSs
      programme for
      des<Alt>I</Alt>gn leaders
    </Big>
  </Cell>
)

const scrollToApply = () => {
  const applySection = document.querySelector('#apply')
  const { top } = applySection.getBoundingClientRect()
  window.scrollTo({ top, behavior: 'smooth' })
}

const Apply = () => (
  <Cell
    className={styles.apply}
    as='button'
    onClick={scrollToApply}
  >
    <Big className={styles.applyText}>
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

const createCells = (cols, rows, isMobile) => range(cols).map(col => range(rows).map(row => (
  <Cell
    className={isMobile ? styles.gridCellM : styles.gridCellD}
    style={{
      gridArea: `${row + 1} / ${col + 1} / span 1 / span 1`
    }}
  />
)))

const RotatingSquare = () => (
  <Cell className={styles.rotatingSquare} />
)

const Circle = withClass(styles.circle)('div')

const DoubleCircle = () => (
  <Cell className={styles.doubleCircle}>
    <div className={styles.circleBox}>
      <Circle />
      <Circle />
    </div>
  </Cell>
)

const FlippingCircle = () => (
  <Cell className={styles.flippingCircle}>
    <div className={styles.flippingCircleContent} />
  </Cell>
)

const BlackCircle = (props) => (
  <Cell {...props}>
    <div className={styles.blackCircleContent} />
  </Cell>
)

const EmptyRect = () => (
  <Cell className={styles.emptyRect} />
)

const HalfCircle = (props) => (
  <Cell {...props}>
    <div className={styles.halfCircleContent} />
  </Cell>
)

const SocialCell = () => (
  <Cell className={styles.socialCell}>
    <div className={styles.socialCellRow}>
      <FbIcon />
      <TwIcon />
      <IgIcon />
    </div>
    <div className={styles.socialCellRow}>
      <YtIcon />
      <LiIcon />
      <PcIcon />
    </div>
  </Cell>
)

const cells = createCells(8, 4)
const cellsM = createCells(3, 5, true)

const Grid = () => (
  <div className={styles.grid}>
    {cells}
    {cellsM}
    <Title />
    <Description />
    <Slogan />
    <Apply />
    <Date />
    <RotatingSquare />
    <DoubleCircle />
    <FlippingCircle />
    <BlackCircle className={styles.blackCircle1} />
    <BlackCircle className={styles.blackCircle2} />
    <EmptyRect />
    <HalfCircle className={styles.halfCircle1} />
    <HalfCircle className={styles.halfCircle2} />
    <SocialCell />
  </div>
)

const Intro = () => (
  <div className={styles.intro}>
    <Grid />
  </div>
)

export default Intro
