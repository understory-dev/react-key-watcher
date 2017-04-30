import React from 'react'
import KeyWatcher from './index'
import { shallow, mount } from 'enzyme'

const getKeyEvent = (eventName, keyCode) =>
  new KeyboardEvent(eventName, { keyCode })

function key(eventName, keyCode) {
  window.dispatchEvent(getKeyEvent(eventName, keyCode))
}

function down(keyCode) {
  key('keydown', keyCode)
}

function up(keyCode) {
  key('keyup', keyCode)
}

describe('<KeyWatcher />', () => {
  describe('when all keys are pressed', () => {
    it('should not trigger onKeyComboPressed', () => {
      const onKeyComboPressed = jest.fn()
      const keyCodes = [1, 2, 3]
      const wrapper = mount(
        <KeyWatcher
          keyCodes={keyCodes}
          onKeyComboPressed={onKeyComboPressed}
        />
      )
      down(1)
      down(2)
      down(3)
      expect(onKeyComboPressed).not.toHaveBeenCalled()
    })

    describe('and one released', () => {
      it('should trigger onKeyComboPressed', () => {
        const onKeyComboPressed = jest.fn()
        const keyCodes = [1, 2, 3]
        const wrapper = mount(
          <KeyWatcher
            keyCodes={keyCodes}
            onKeyComboPressed={onKeyComboPressed}
          />
        )
        down(1)
        down(2)
        down(3)
        up(3)
        expect(onKeyComboPressed).toHaveBeenCalled()
      })
    })
  })
})
