import styles from './style.styl'
import { Small, Tiny, ExtraTiny } from '../text'
import { cc, withClass } from '../../utils'
import { factory } from '../component-from-prop'
import {
  FbIcon,
  TwIcon,
  IgIcon,
  YtIcon,
  LiIcon,
  PcIcon
} from '../social'

const Social = () => (
  <div className={styles.social}>
    <FbIcon />
    <TwIcon />
    <IgIcon />
    <YtIcon />
    <LiIcon />
    <PcIcon />
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
        href='https://vishvish.design/'
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
