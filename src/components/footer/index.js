import styles from './style.styl'
import { Small, Tiny, ExtraTiny } from '../text'
import { Fb, Tw, Ig, Yt, Li, Pc } from '../icons'
import { cc, withClass } from '../../utils'
import ComponentFromProp, { factory } from '../component-from-prop'

const IconBox = withClass(styles.icon)('a')
const Icon = ({ as, ...rest }) => (
  <IconBox {...rest}>
    <ComponentFromProp as={as} width='100%' height='100%' />
  </IconBox>
)

const Social = () => (
  <div className={styles.social}>
    <Icon as={Fb} className={styles.fb} />
    <Icon as={Tw} className={styles.tw} />
    <Icon as={Ig} className={styles.ig} />
    <Icon as={Yt} className={styles.yt} />
    <Icon as={Li} className={styles.li} />
    <Icon as={Pc} className={styles.pc} />
  </div>
)

const FooterBox = withClass(styles.footer)(factory('footer'))
const Column = withClass(styles.column)('div')

const Roles = () => (
  <Tiny
    className={cc('upper', styles.roles)}
    as='div'
  >
    <span className={styles.role}>
      <span>design:&nbsp;&nbsp;</span>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href=''
      >
        Svyat Vishnyakov
      </a>
    </span>
    <span className={styles.role}>
      <span>Development:&nbsp;&nbsp;</span>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href='https://sergeyzakharov.dev'
      >
        SERGEY ZAKHAROV
      </a>
    </span>
  </Tiny>
)

const CopyrightBox = withClass(styles.copyright)('div')
const Copyright = (props) => (
  <CopyrightBox {...props}>
    <Small className={styles.title}>
      ©2019 Future London Academy.{' '}
    </Small>
    <ExtraTiny as='span' className='upper'>
      All rights reserved
    </ExtraTiny>
  </CopyrightBox>
)

const Footer = ({ hasRoles, ...rest }) => (
  <FooterBox {...rest}>
    <Column className={styles.columnLeft}>
      <Copyright />
    </Column>
    <Column>
      {hasRoles && <Copyright className={styles.copyrightM} />}
      {hasRoles && <Roles />}
      <Social />
    </Column>
  </FooterBox>
)

export default Footer
