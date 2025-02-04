# oc-modal-library

> A simple and lightweight library for displaying modals in React.

[![NPM](https://img.shields.io/npm/v/oc-modal-library.svg)](https://www.npmjs.com/package/oc-modal-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @timout13/oc-modal-library
```

## Usage
### Props
- isOpen (bool) => if: true display the modal / if false hide the modal.
- onClose (callback) => behaviour when the btn to close has been clicked or when we click outside the modal.
### Example with useState
```jsx
import React, { useState } from 'react';

import {Modal} from "@timout13/oc-modal-library";
import '@timout13/oc-modal-library/dist/index.css';

function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {/* YOUR CONTENT HERE */}
    </Modal>
  )
}
```

## Compatibility

No dependecies is required.

Latest compatible versions:

React 16 or newer: oc-modal-library v1.0.0 and newer

## License

MIT © [timout13](https://github.com/timout13)
