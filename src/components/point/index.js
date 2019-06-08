import styles from './style.styl'
import { Component } from 'preact'
import PreactDOM from 'react-dom'

class Point extends Component {
  state = {
    isExpanded: false,
    observer: null
  }

  render () {
    const { isExpanded } = this.state
    const className = isExpanded
      ? styles.pointExpanded
      : styles.point
    return (
      <div
        className={className}
        {...this.props}
      />
    )
  }

  handleIntersection = ([ { isIntersecting } ], observer) => {
    if (isIntersecting) {
      this.setState({ isExpanded: true })
      const thisElement = PreactDOM.findDOMNode(this)
      observer.unobserve(thisElement)
    }
  }

  componentDidMount () {
    const thisElement = PreactDOM.findDOMNode(this)
    const observer = new window.IntersectionObserver(
      this.handleIntersection,
      { rootMargin: '-70% 0px -20% 0px' }
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

export default Point
