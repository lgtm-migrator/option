# @kizahasi/option

Represents a value which can be None.

## Example

```typescript
import { Option } from '@kizahasi/option';

const someObj = Option.some(1);
if (someObj.isNone) {
    console.log('none') // This cannot happen because someObj is not None
} else {
    console.log(someObj.value); // output: 1
}

const noneObj = Option.none();
if (errorObj.isNone) {
    console.log('none') // output: none
} else {
    console.log(someObj.value); // This cannot happen because someObj is None
}
```
