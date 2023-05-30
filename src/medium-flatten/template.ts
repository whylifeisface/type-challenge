// type Flatten<T extends any[]> = [
//     ...A<T>
// ]
type Flatten<T extends any[]> = T extends [infer First, ... infer Rest] ?
    First extends any[] ?  [...Flatten<First>, ...Flatten<Rest>]:
    [First, ...Flatten<Rest>]
    // false
    : T
    // 
type B = A<[1, [2]]>
type A<T> = T extends [infer First, ... infer Rest] ? true : false