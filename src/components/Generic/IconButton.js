export const CART = `C`
export const MENU = `H`

const IconButton = ({ role, onClick }) => (
  <button onClick={onClick} type='button'>
    <i>{role}</i>
  </button>
)

export default IconButton
