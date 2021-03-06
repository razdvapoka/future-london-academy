/* eslint no-useless-escape: 0 */

import styles from './style.styl'
import { Component } from 'preact'
import Section from '../../components/section'
import { Alt, Huge, Regular } from '../../components/text'
import { withClass, cc } from '../../utils'

const CFIELDS = {
  '29': 'reforig',
  '30': 'refurl',
  '31': 'utmsource',
  '32': 'utmmedium',
  '33': 'utmcampaign',
  '34': 'utmterm',
  '35': 'utmcontent'
}
const EMAIL_REGEX = /[^@]+@[^\.]+\..+/
// const PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

const getUrlParam = (name) => {
  var regexStr = '[\?&]' + name + '=([^&#]*)'
  var results = new RegExp(regexStr, 'i').exec(window.location.href)
  return results != null ? decodeURIComponent(results[1]) : false
}

const serializeField = (key, value) => {
  // encode newlines as \r\n cause the html spec says so
  value = value.replace(/(\r)?\n/g, '\r\n')
  value = encodeURIComponent(value)

  // spaces should be '+' rather than '%20'.
  value = value.replace(/%20/g, '+')
  return encodeURIComponent(key) + '=' + value
}

const loadScript = (url, callback) => {
  var head = document.querySelector('head')
  var script = document.createElement('script')
  var r = false
  script.type = 'text/javascript'
  script.charset = 'utf-8'
  script.src = url
  if (callback) {
    script.onload = script.onreadystatechange = () => {
      if (!r && (!this.readyState || this.readyState === 'complete')) {
        r = true
        callback()
      }
    }
  }
  head.appendChild(script)
}

const SuccessText = withClass(styles.successText)(Regular)

class SuccessSection extends Component {
  render () {
    return (
      <Section
        id='success'
        className={styles.success}
        title='thank you!'
        text={`Your email is now flying through the universe to reach our system and we will send you more information about the programme shortly. Please check your spam or promotions inbox as the email police maybe blocking our message to you :)`}
        hasPoint={false}
        textComponent={SuccessText}
      />
    )
  }

  handleScroll = () => {
    document.querySelector('html').classList.remove('black-bg')
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('mousemove', this.handleScroll)
  }

  componentDidMount () {
    const successSection = document.querySelector('#success')
    const { top } = successSection.getBoundingClientRect()
    window.scrollTo({ top: window.scrollY + top, behavior: 'smooth' })
    document.querySelector('html').classList.add('black-bg')
    setTimeout(() => {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('mousemove', this.handleScroll)
    }, 1000)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('mousemove', this.handleScroll)
  }
}

const FormField = ({
  isValid,
  handleChange,
  hasHint,
  value,
  ...rest
}) => (
  <div className={styles.formFieldBox}>
    {hasHint && (
      <div className={styles.formFieldHint}>
        <Regular>{value}</Regular>
      </div>
    )}
    <Huge as='input'
      className={cc(styles.formField, 'input')}
      type='text'
      onInput={handleChange}
      value={value}
      {...rest}
    />
    <div
      className={isValid
        ? styles.formFieldIndicatorValid
        : styles.formFieldIndicator
      }
    />
  </div>
)

class Form extends Component {
  state = {
    isSubmitted: false,
    name: {
      value: '',
      isValid: null
    },
    phone: {
      value: '',
      isValid: null
    },
    email: {
      value: '',
      isValid: null
    }
  }

  validateEmail = (email) => EMAIL_REGEX.test(email)
  validateName = (name) => name && name.length > 0
  validatePhone = (phone) => phone && phone.length > 0 // PHONE_REGEX.test(phone)

  handleEmailChange = (e) => {
    const value = e.target.value
    this.setState({
      email: {
        value,
        isValid: this.validateEmail(value),
        hasHint: value.length > (window.innerWidth > 600 ? 23 : 10)
      }
    })
  }

  handlePhoneChange = (e) => {
    const value = e.target.value
    this.setState({
      phone: {
        value,
        isValid: this.validatePhone(value)
      }
    })
  }

  handleNameChange = (e) => {
    const value = e.target.value
    this.setState({
      name: {
        value,
        isValid: this.validateName(value)
      }
    })
  }

  canSubmit = () => {
    const { name, phone, email } = this.state
    return name.isValid && phone.isValid && email.isValid
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { isSubmitted } = this.state
    if (!isSubmitted && this.canSubmit()) {
      const inputs = Array.from(document.querySelectorAll('#application-form input'))
      const query = inputs.map(({ name, value }) => serializeField(name, value)).join('&')
      loadScript(`https://futurelondonacademy.activehosted.com/proc.php?${query}&jsonp=true`)
    }
  }

  substituteCampaignParams = () => {
    var formToSubmit = document.getElementById('application-form')
    const allInputs = formToSubmit.querySelectorAll('input, select, text-area')

    for (var i = 0; i < allInputs.length; i++) {
      var regexStr = 'field\\[(\\d+)\\]'
      var results = new RegExp(regexStr).exec(allInputs[i].name)
      if (results != null) {
        allInputs[i].dataset.name = CFIELDS[results[1]]
      } else {
        allInputs[i].dataset.name = allInputs[i].name
      }

      var fieldVal = getUrlParam(allInputs[i].dataset.name)

      if (fieldVal) {
        if (allInputs[i].type === 'radio' || allInputs[i].type === 'checkbox') {
          if (allInputs[i].value === fieldVal) {
            allInputs[i].checked = true
          }
        } else {
          allInputs[i].value = fieldVal
        }
      }
    }
  }

  successCallback = (id, message, trackcmpUrl) => {
    this.setState({
      isSubmitted: true,
      email: { isValid: true, value: '' },
      name: { isValid: true, value: '' },
      phone: { isValid: true, value: '' }
    })
    if (typeof (trackcmpUrl) !== 'undefined' && trackcmpUrl) {
      // Site tracking URL to use after inline form submission.
      loadScript(trackcmpUrl)
    }
  }

  failureCallback = (id, message, html) => {
    this.setState({
      error: message
    })
  }

  render () {
    const { email, name, phone, isSubmitted } = this.state
    return (
      <div className={styles.formBox}>
        <form
          onSubmit={this.handleSubmit}
          id='application-form'
          className={isSubmitted ? styles.formSubmitted : styles.form}
          noValidate
        >
          <input type='hidden' name='u' value='19' />
          <input type='hidden' name='f' value='19' />
          <input type='hidden' name='s' />
          <input type='hidden' name='c' value='0' />
          <input type='hidden' name='m' value='0' />
          <input type='hidden' name='act' value='sub' />
          <input type='hidden' name='v' value='2' />
          <div className='_form-content'>
            <input type='hidden' name='field[29]' />
            <input type='hidden' name='field[30]' />
            <input type='hidden' name='field[31]' />
            <input type='hidden' name='field[32]' />
            <input type='hidden' name='field[33]' />
            <input type='hidden' name='field[34]' />
            <input type='hidden' name='field[35]' />
            <FormField
              {...name}
              type='text'
              name='fullname'
              placeholder='name'
              handleChange={this.handleNameChange}
              required
              disabled={isSubmitted}
            />
            <FormField
              {...phone}
              name='phone'
              placeholder='phone'
              handleChange={this.handlePhoneChange}
              required
              disabled={isSubmitted}
            />
            <FormField
              {...email}
              type='text'
              placeholder='@email.com'
              name='email'
              handleChange={this.handleEmailChange}
              required
              disabled={isSubmitted}
            />
          </div>
          {isSubmitted ? (
            <SuccessSection />
          ) : (
            <Huge
              as='button'
              type='submit'
              className={styles.submit}
              disabled={!this.canSubmit()}
            >
              subm<Alt>i</Alt>t
            </Huge>
          )}
        </form>
      </div>
    )
  }

  componentDidMount () {
    this.substituteCampaignParams()
    window._show_thank_you = this.successCallback
    window._show_error = this.failureCallback
  }
}

export default Form
