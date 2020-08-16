import Vue from 'vue'

import { WithRefs } from '../src'

type Refs = {
  input: HTMLInputElement
}

const Component = (Vue as WithRefs<Refs>).extend({
  name: 'Component',
})

const input: HTMLInputElement = new Component().$refs.input
