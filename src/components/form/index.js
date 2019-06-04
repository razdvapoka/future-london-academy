/* eslint no-useless-escape: 0 */

import styles from './style.styl'
import { Component } from 'preact'
import { Huge } from '../../components/text'
import { cc } from '../../utils'

const EMAIL_REGEX = /[^@]+@[^\.]+\..+/
const PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

const FormField = ({
  value,
  placeholder,
  isValid,
  handleChange
}) => (
  <div className={styles.formFieldBox}>
    <Huge as='input'
      className={cc(styles.formField, 'input')}
      type='text'
      value={value}
      onInput={handleChange}
      placeholder={placeholder}
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
  static defaultProps = {
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfGqGkqEcDl-4tWb_42ZYvothFrkZa8nzsdeLr1WsK1It_phw/formResponse',
    fieldKeys: {
      email: 'entry.1045781291',
      name: 'entry.2005620554',
      phone: 'entry.1166974658'
    }
  }

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
  validatePhone = (phone) => PHONE_REGEX.test(phone)

  handleEmailChange = (e) => {
    const value = e.target.value
    this.setState({
      email: {
        value,
        isValid: this.validateEmail(value)
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
    const { formUrl, fieldKeys } = this.props
    const { email, phone, name, isSubmitted } = this.state

    if (!isSubmitted) {
      const data = new URLSearchParams()
      data.append(fieldKeys.email, email.value)
      data.append(fieldKeys.phone, phone.value)
      data.append(fieldKeys.name, name.value)

      window.fetch(formUrl, {
        method: 'post',
        body: data,
        mode: 'no-cors'
      }).then(() => {
        this.setState({
          isSubmitted: true
        })
      })
    }
  }

  render () {
    const { email, name, phone, isSubmitted } = this.state
    return (
      <div className={styles.formBox}>
        <form
          className={styles.form}
          onSubmit={this.handleSubmit}
        >
          <FormField
            {...name}
            placeholder='name'
            handleChange={this.handleNameChange}
          />
          <FormField
            {...phone}
            placeholder='phone'
            handleChange={this.handlePhoneChange}
          />
          <FormField
            {...email}
            placeholder='@email.com'
            handleChange={this.handleEmailChange}
          />
          <Huge
            as='button'
            type='submit'
            className={styles.submit}
            disabled={!this.canSubmit()}
          >
            {isSubmitted ? 'success!' : 'submit'}
          </Huge>
        </form>
      </div>
    )
  }
}

export default Form
