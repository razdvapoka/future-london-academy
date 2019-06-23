import styles from './style.styl'
import { Component } from 'preact'
import { ArrowRight } from '../icons'
import { Alt, Regular, Caption } from '../text'

import ije from '../../assets/images/ije-nwokorie.jpg'
import helena from '../../assets/images/helena-fuchs.jpg'
import joanna from '../../assets/images/joanna-peña-bickley.jpg'
import matt from '../../assets/images/matt-cooper-wright.jpg'
import michael from '../../assets/images/michael-wolff.jpg'

const ITEM_WIDTH_VW = 44
const ITEM_WIDTH_VW_M = 80
const TRANSITION_TIMEOUT = 300

const advisors = [ {
  imageSrc: ije,
  name: '<span class="alt">I</span>je Nwokor<span class="alt">i</span>e',
  company: 'Apple'
}, {
  imageSrc: matt,
  name: 'Matt Cooper-Wr<span class="alt">i</span>ght',
  company: 'Ideo'
}, {
  imageSrc: helena,
  name: 'Helena Fuchs',
  company: 'Ustwo'
}, {
  imageSrc: michael,
  name: 'M<span class="alt">i</span>chael Wolff',
  company: 'Wolff Olins'
}, {
  imageSrc: joanna,
  name: 'Joanna Peña-B<span class="alt">i</span>ckley',
  company: 'Amazon'
} ]

const tripledAdvisors = [
  ...advisors,
  ...advisors,
  ...advisors
]

const Advisor = ({
  imageSrc,
  isMobile
}) => (
  <div
    className={styles.advisor}
    style={{ width: `${isMobile ? ITEM_WIDTH_VW_M : ITEM_WIDTH_VW}vw` }}
  >
    <img
      className={styles.advisorImg}
      src={imageSrc}
    />
  </div>
)

const Slider = ({
  currentSlideIndex,
  hasTransition,
  isMobile
}) => (
  <div className={styles.sliderBox}>
    <div className={styles.slider}>
      <div
        className={styles.sliderContent}
        style={{
          transform: `translateX(-${(isMobile ? ITEM_WIDTH_VW_M : ITEM_WIDTH_VW) * currentSlideIndex}vw)`,
          transition: hasTransition ? `transform ${TRANSITION_TIMEOUT}ms ease` : ''
        }}
      >
        {tripledAdvisors.map(advisor => (
          <Advisor isMobile={isMobile} imageSrc={advisor.imageSrc} />
        ))}
      </div>
    </div>
  </div>
)

const Name = ({ advisor, isExiting }) => (
  <div className={isExiting ? styles.nameExiting : styles.name}>
    <p className='upper' dangerouslySetInnerHTML={{ __html: advisor.name }} />
    <p>{advisor.company}</p>
  </div>
)

const Buttons = ({ nextSlide, prevSlide }) => (
  <div className={styles.buttons}>
    <button className={styles.button} onClick={prevSlide}>
      <ArrowRight className={styles.reversed} width='100%' height='100%' />
    </button>
    <button className={styles.button} onClick={nextSlide}>
      <ArrowRight width='100%' height='100%' />
    </button>
  </div>
)

class Advisors extends Component {
  state = {
    currentSlideIndex: advisors.length,
    currentNameIndex: advisors.length,
    hasTransition: true,
    isNameExiting: false,
    isMobile: false
  }

  reset = () => {
    this.setState({
      currentSlideIndex: advisors.length,
      currentNameIndex: advisors.length,
      hasTransition: false
    })
  }

  scheduleReset = () =>
    setTimeout(
      this.reset,
      TRANSITION_TIMEOUT
    )

  scheduleNameChange = (nextNameIndex) =>
    setTimeout(() => {
      this.setState({
        currentNameIndex: nextNameIndex,
        isNameExiting: false
      })
    }, TRANSITION_TIMEOUT / 2)

  nextSlide = () => {
    this.setState(({ currentSlideIndex }) => {
      const nextSlideIndex = currentSlideIndex + 1
      if (nextSlideIndex === advisors.length * 2) {
        this.scheduleReset()
      }
      this.scheduleNameChange(nextSlideIndex)
      return {
        currentSlideIndex: nextSlideIndex,
        hasTransition: true,
        isNameExiting: true
      }
    })
  }

  prevSlide = () => {
    this.setState(({ currentSlideIndex }) => {
      const prevSlideIndex = currentSlideIndex - 1
      if (prevSlideIndex === 0) {
        this.scheduleReset()
      }
      this.scheduleNameChange(
        prevSlideIndex >= 0
          ? prevSlideIndex
          : advisors.length + prevSlideIndex
      )
      return {
        currentSlideIndex: prevSlideIndex,
        hasTransition: true,
        isNameExiting: true
      }
    })
  }

  render () {
    const {
      currentSlideIndex,
      hasTransition,
      currentNameIndex,
      isNameExiting,
      isMobile
    } = this.state
    const firstAdvisor = tripledAdvisors[currentNameIndex]
    const secondAdvisor = tripledAdvisors[currentNameIndex + 1]
    return (
      <div className={styles.advisors}>
        <Caption>our adv<Alt>i</Alt>sors</Caption>
        <Slider
          currentSlideIndex={currentSlideIndex}
          hasTransition={hasTransition}
          isMobile={isMobile}
        />
        <Regular as='div' className={styles.bottom}>
          <Name advisor={firstAdvisor} isExiting={isNameExiting} />
          <Name advisor={secondAdvisor} isExiting={isNameExiting} />
          <Buttons
            nextSlide={this.nextSlide}
            prevSlide={this.prevSlide}
          />
        </Regular>
      </div>
    )
  }

  checkIfMobile = () => {
    this.setState({
      isMobile: window.innerWidth <= 600
    })
  }

  componentDidMount () {
    this.checkIfMobile()
    window.addEventListener('resize', this.checkIfMobile)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.checkIfMobile)
  }
}

export default Advisors
