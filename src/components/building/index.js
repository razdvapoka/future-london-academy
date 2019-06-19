/* eslint no-irregular-whitespace: 0 */

import styles from './styles.styl'
import PreactDOM from 'react-dom'
import { Component } from 'preact'
import Diagram from '../diagram'
import { Caption, Huge, Regular } from '../text'
import { cc } from '../../utils'

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

const SIDE_CIRCLE_CLASSNAMES = [
  styles.sideCircle1,
  styles.sideCircle2,
  styles.sideCircle3,
  styles.sideCircle4,
  styles.sideCircle5
]

class Building extends Component {
  state = {
    selectedItemIndex: 0,
    isDiagramActivated: false,
    observer: null
  }

  selectItem = (index) => {
    const { selectedItemIndex } = this.state
    if (index !== selectedItemIndex) {
      this.setState(({ selectedItemIndex }) => ({
        prevItemIndex: selectedItemIndex,
        selectedItemIndex: index
      }))
    }
  }

  getItemClassName = (itemIndex, selectedItemIndex) =>
    itemIndex === selectedItemIndex
      ? styles.itemSelected
      : styles.item

  render () {
    const {
      selectedItemIndex,
      prevItemIndex,
      isDiagramActivated
    } = this.state
    const hadPrevItem = prevItemIndex !== null
    const circleClassName = SIDE_CIRCLE_CLASSNAMES[selectedItemIndex]
    const finalCircleClassName = hadPrevItem ? cc(
      circleClassName,
      styles.circleTransition
    ) : SIDE_CIRCLE_CLASSNAMES[selectedItemIndex]
    return (
      <section className={styles.section}>
        <Caption className={styles.caption}>
          Understand how to lead people and build
          design-led businesses, while making your
          life and the world better.
        </Caption>
        <div className={styles.sectionContent}>
          <div className={styles.column}>
            <ul
              className={styles.list}
              onMouseLeave={() => this.selectItem(null)}
            >
              <div className={finalCircleClassName} />
              {selectedItemIndex != null && (
                <Regular className={styles.preText}>
                  {ITEMS[selectedItemIndex].preText}
                </Regular>
              )}
              {ITEMS.map((item, index) => (
                <li
                  className={this.getItemClassName(index, selectedItemIndex)}
                  onMouseEnter={() => this.selectItem(index)}
                  onClick={() => this.selectItem(index)}
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
              selectItem={this.selectItem}
              isActivated={isDiagramActivated}
            />
          </div>
        </div>
      </section>
    )
  }

  handleIntersection = ([ { isIntersecting } ], observer) => {
    if (isIntersecting) {
      this.setState({ isDiagramActivated: true })
      const thisElement = PreactDOM.findDOMNode(this)
      observer.unobserve(thisElement)
    }
  }

  componentDidMount () {
    const thisElement = PreactDOM.findDOMNode(this)
    const observer = new window.IntersectionObserver(
      this.handleIntersection,
      { rootMargin: '-20% 0px -70% 0px' }
    )
    observer.observe(thisElement)
    this.setState({ observer })
  }

  componentWillUnmount () {
    const { observer } = this.state
    const thisElement = PreactDOM.findDOMNode(this)
    observer.unobserve(thisElement)
  }
}

export default Building
