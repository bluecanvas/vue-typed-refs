# vue-typed-refs

> TypeScript utility type for Vue.js `$refs`

## Installation

### Via NPM

```bash
$ npm i vue-typed-refs -D
```

### Via Yarn

```bash
$ yarn add vue-typed-refs --dev
```

### Usage

```html
<template>
  <div>
    <input ref="input" />
    <your-awesome-component ref="component"></your-awesome-component>
  </div>
</template>
```

```ts
import Vue from 'vue'
import { WithRefs } from 'vue-typed-refs'
// import type { WithRefs } from 'vue-typed-refs' TypeScript 3.8+
import YourAwesomeComponent from 'path/to/your/awesome/component'

type Refs = {
  input: HTMLInputElement
  component: InstanceType<typeof YourAwesomeComponent>
}

export default (Vue as WithRefs<Refs>).extend({
  name: 'Component',
  methods: {
    foo() {
      this.$refs.input // HTMLInputElement
      this.$refs.component // InstanceType<typeof YourAwesomeComponent>
    },
  },
})
```

<details>
<summary>Extending extended components</summary>

```ts
// YourAwesomeExtendedComponent.vue
// ...

export default Vue.extend({
  // ...
  methods: {
    baz() {},
  },
  // ...
})
```

```ts
// ...
import YourAwesomeExtendedComponent from 'path/to/your/awewsome/extended/component'

export default (YourAwesomeExtendedComponent as WithRefs<
  Refs,
  typeof YourAwesomeExtendedComponent
>).extend({})
```

</details>

## Tests

```bash
npm run test
```

## Build

```bash
npm run build
```

## License

[MIT](http://opensource.org/licenses/MIT)
