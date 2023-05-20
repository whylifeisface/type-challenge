import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]



// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

type A = MyOmit<Todo, 'description'>

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}


//返回一个对象

// function(A,B){
//   A.filters((elemnetA)=>{
//     B.array.forEach(elementB => {
//     B.array.forEach(elementB => {
//       elemnetA == 
//     });
     
//   })
// }