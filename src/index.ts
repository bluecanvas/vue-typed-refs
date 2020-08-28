import Vue, { VueConstructor } from 'vue'

export type WithRefs<
  R extends Record<string, Vue | Element | Vue[] | Element[] | undefined>,
  C extends VueConstructor = VueConstructor
> = C extends VueConstructor<infer V> ? VueConstructor<V & { $refs: R }> : never
