import { Dog,Cat } from "./test-case";

// type LookUp<U extends {type:string}, T> = U['type'] extends T 
// ? T extends 'dog' ? Dog : Cat:T extends 'dog' ? Dog : Cat
//  Cat  cat   Cat dog
// 
type LookUp<U extends {type:string}, T> = T extends 'dog' ? Dog : Cat

export type {
    LookUp
}