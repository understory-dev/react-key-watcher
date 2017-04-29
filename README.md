# react-key-watcher

Watch for simultaneous keypresses.

```js
import KeyWatcher from 'react-key-watcher'

...

<KeyWatcher
  keyCodes={[
    101, // e
    113, // q
    114, // r
    119, // w
  ]}
  onKeyComboPressed={() => console.log('qwer pressed!')}
/>
```

---
kickstarted by [npm-boom][npm-boom]

[npm-boom]: https://github.com/reergymerej/npm-boom
