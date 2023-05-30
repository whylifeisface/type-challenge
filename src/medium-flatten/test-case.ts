import type { Equal, Expect } from '@type-challenges/utils'
type A = Flatten<[1, 2, 3, 4]> // [1,[2,[3,4]]]
type B = Flatten<[1, [2]]>
type C = Flatten<[1, 2, [3, 4], [[[5]]]]>
type cases = [
  Expect<Equal<Flatten<[]>, []>>,
  Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
  Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
  Expect<Equal<Flatten<[{ foo: 'bar'; 2: 10 }, 'foobar']>, [{ foo: 'bar'; 2: 10 }, 'foobar']>>,
]

// @ts-expect-error
type error = Flatten<'1'>