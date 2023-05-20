type MyReturnType<T> = T extends (...args:any[]) => infer X ? X : never
// infer X <infer X> 不一样 后面是泛型