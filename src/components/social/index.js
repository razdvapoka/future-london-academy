import ComponentFromProp from '../component-from-prop'
import { withClass } from '../../utils'
import styles from './styles.styl'
import { Fb, Tw, Ig, Yt, Li, Pc } from '../icons'

const IconBox = withClass(styles.icon)('a')
const Icon = ({ as, ...rest }) => (
  <IconBox target='_blank' rel='noopener noreferrer' {...rest}>
    <ComponentFromProp as={as} width='100%' height='100%' />
  </IconBox>
)

export const FbIcon = () => <Icon as={Fb} className={styles.fb} href='http://facebook.com/FutureLondonAcademy' />
export const TwIcon = () => <Icon as={Tw} className={styles.tw} href='https://twitter.com/flondonacademy' />
export const IgIcon = () => <Icon as={Ig} className={styles.ig} href='https://www.instagram.com/futurelondonacademy' />
export const YtIcon = () => <Icon as={Yt} className={styles.yt} href='https://www.youtube.com/futurelondonacademy' />
export const LiIcon = () => <Icon as={Li} className={styles.li} href='https://www.linkedin.com/company/future-london-academy' />
export const PcIcon = () => <Icon as={Pc} className={styles.pc} href='https://open.spotify.com/show/4YNqDavM5A7rWJ816TVFRI' />

export default Icon
