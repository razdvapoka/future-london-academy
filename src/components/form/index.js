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
  state = {
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
    const { email, phone, name } = this.state
    console.log('submit:', {
      email: email.value,
      phone: phone.value,
      name: name.value
    })
  }

  render () {
    const { email, name, phone } = this.state
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
            submit
          </Huge>
        </form>
      </div>
    )
  }
}

export default Form
