# react-key-watcher

Watch for simultaneous keypresses.

```js
import KeyWatcher from 'react-key-watcher'

...

<KeyWatcher
  keyCodes={[
    69, // e
    81, // q
    82, // r
    87, // w
  ]}
  onKeyComboPressed={() => console.log('qwer pressed!')}
/>
```

---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
