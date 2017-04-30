import { Component } from 'react'
import PropTypes from 'prop-types'

const isInterestingKeyCode = (keyCode, keys) =>
  keys.indexOf(keyCode) > -1

const hasAllItems = (items, array) => {
  const itemKeys = Object.keys(items)
  return !array.some(value => itemKeys.indexOf(value) < 0)
}

class KeyWatcher extends Component {
  constructor(props) {
    super(props)
    this.keysAsStrings = props.keyCodes.map(p => `${p}`)
    this.keys = {}
  }

  componentDidMount() {
    if (window && this.props.keyCodes.length) {
      window.addEventListener('keydown', this.handleKeyDown)
      window.addEventListener('keyup', this.handleKeyUp)
    }
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('keydown', this.handleKeyDown)
      window.removeEventListener('keyup', this.handleKeyUp)
    }
  }

  handleKeyDown = ({ keyCode }) => {
    if (isInterestingKeyCode(keyCode, this.props.keyCodes)) {
      this.keys[keyCode] = 1
    }
  }

  handleKeyUp = ({ keyCode }) => {
    if (isInterestingKeyCode(keyCode, this.props.keyCodes)) {
      if (hasAllItems(this.keys, this.keysAsStrings)) {
        this.props.onKeyComboPressed()
      }
      this.keys = {}
    }
  }

  render = () => null
}

KeyWatcher.propTypes = {
  onKeyComboPressed: PropTypes.func.isRequired,
  keyCodes: PropTypes.arrayOf(PropTypes.number).isRequired,
}

KeyWatcher.defaultProps = {
  keyCodes: [],
}

export default KeyWatcher
