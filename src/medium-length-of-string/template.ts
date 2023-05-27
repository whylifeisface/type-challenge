
///不懂

type LengthOfString<S extends string> = AA<S>['length']
type AA<S> = (S extends `${infer T}${infer R}` ?
    T extends '' ? [] : [any,...AA<R>] : [])