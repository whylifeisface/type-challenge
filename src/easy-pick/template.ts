// 实现 TS 内置的 Pick<T, K>，但不可以使用它。

// 从类型 T 中选择出属性 K，构造成一个新的类型。

// 例如：

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type TodoPreview = MyPick<Todo, 'title' | 'completed'>

// const todo: TodoPreview = {
//     title: 'Clean room',
//     completed: false,
// }


type MyPick<T, K extends keyof T> = {
    [P in K] :T[P]
}

//js 对比学习


// 放回一个类
// 遍历数组
// 给值 
// 判断是否存在