import { factory } from '../component-from-prop'
import { withClass } from '../../utils'

const ComponentFromProp = factory('p')

export const Huge = withClass('huge')(ComponentFromProp)
export const Big = withClass('big')(ComponentFromProp)
export const Regular = withClass('regular')(ComponentFromProp)
export const Small = withClass('small')(ComponentFromProp)
export const Tiny = withClass('tiny')(ComponentFromProp)
export const ExtraTiny = withClass('extraTiny')(ComponentFromProp)
export const Caption = withClass('caption')(ComponentFromProp)
