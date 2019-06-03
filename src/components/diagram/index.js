import {
  World,
  Company,
  Team,
  Person,
  Product
} from '../icons'
import styles from './style.styl'

const ITEMS = [ {
  icon: Person,
  className: styles.person
}, {
  icon: Product,
  className: styles.product
}, {
  icon: Team,
  className: styles.team
}, {
  icon: Company,
  className: styles.company
}, {
  icon: World,
  className: styles.world
} ]

const getItemClassName = (itemIndex, selectedItemIndex) =>
  selectedItemIndex != null && itemIndex !== selectedItemIndex
    ? styles.itemDisabled
    : styles.item

const Diagram = ({
  selectedItemIndex
}) => (
  <div className={styles.diagram}>
    {ITEMS.map(({ icon: Icon, className }, itemIndex) => (
      <div className={getItemClassName(itemIndex, selectedItemIndex)}>
        <div className={className}>
          <Icon />
        </div>
      </div>
    ))}
  </div>
)

export default Diagram
