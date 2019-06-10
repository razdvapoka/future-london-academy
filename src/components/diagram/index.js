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
  selectedItemIndex,
  selectItem
}) => {
  const handleMouseMove = (e) => {
    const isCursorInItems = ITEMS.map(item => {
      const rect = document
        .querySelector(`.${item.className}`)
        .getBoundingClientRect()
      const radius = rect.width / 2
      const centerX = rect.x + radius
      const centerY = rect.y + radius
      return (
        Math.pow(e.clientX - centerX, 2) +
        Math.pow(e.clientY - centerY, 2)
      ) < Math.pow(radius, 2)
    })
    const index = isCursorInItems.indexOf(true)
    selectItem(index === -1 ? null : index)
  }
  return (
    <div
      className={styles.diagram}
      onMouseLeave={() => selectItem(null)}
      onMouseMove={handleMouseMove}
      onClick={handleMouseMove}
    >
      {ITEMS.map(({ icon: Icon, className }, itemIndex) => (
        <div
          className={getItemClassName(itemIndex, selectedItemIndex)}
        >
          <div className={className}>
            <Icon />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Diagram
