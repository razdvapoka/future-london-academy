import styles from './styles.styl'
import { Component } from 'preact'
import Diagram from '../diagram'
import { Huge, Regular } from '../text'

const ITEMS = [ {
  text: 'person',
  preText: 'being a better'
}, {
  text: 'product',
  preText: 'building a better'
}, {
  text: 'team',
  preText: 'building a better'
}, {
  text: 'company',
  preText: 'building a better'
}, {
  text: 'world',
  preText: 'building a better'
} ]

class Building extends Component {
  state = {
    selectedItemIndex: null
  }

  selectItem = (index) => {
    this.setState({
      selectedItemIndex: index
    })
  }

  getItemClassName = (itemIndex, selectedItemIndex) =>
    itemIndex === selectedItemIndex
      ? styles.itemSelected
      : styles.item

  render () {
    const { selectedItemIndex } = this.state

    return (
      <section className={styles.section}>
        <div className={styles.column}>
          <ul
            className={styles.list}
            onMouseLeave={() => this.selectItem(null)}
          >
            {selectedItemIndex != null && (
              <Regular className={styles.preText}>
                {ITEMS[selectedItemIndex].preText}
              </Regular>
            )}
            {ITEMS.map((item, index) => (
              <li
                className={this.getItemClassName(index, selectedItemIndex)}
                onMouseEnter={() => this.selectItem(index)}
              >
                <Huge>
                  {item.text}
                </Huge>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <Diagram
            selectedItemIndex={selectedItemIndex}
          />
        </div>
      </section>
    )
  }
}

export default Building
