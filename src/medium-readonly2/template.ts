// type MyReadonly2<T, K> = {
//     readonly [M in Extract<keyof T, K>]: T[M] 
//   } & {
//     [L in Exclude<keyof T, K>]: T[L]
//   }


//默认参数解决参数不足两个
type MyReadonly2<T, K extends keyof T = keyof T> = {
    [P in keyof T as P extends K ? never : P]:T[P]
 }
  & {
    readonly [P in keyof T as P extends K ?  P : never] : T[P]
}