// import { equal } from "assert"

// type MyOmit<T, K extends keyof T> = keyof {
//    [P in T as P equal<,T[K]> extends ? P:never] : string
// }
// return object
// 
type MyOmit<T , K extends keyof T> =  {
   [P in keyof T as P extends K ? never : P]:T[P]
}


//P extends K ？ union 类型可以这样遍历?  => a == []?
//// eeeeeeeez