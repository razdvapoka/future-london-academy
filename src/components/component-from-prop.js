export const factory = (as) => ({
  as: Comp = as,
  ...rest
}) => <Comp {...rest} />

const ComponentFromProp = factory('div')

export default ComponentFromProp
