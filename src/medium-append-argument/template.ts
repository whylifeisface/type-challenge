type AppendArgument<Fn extends (...arg: any[]) => any, A > = Fn extends (...arg: infer F) => infer B ?
    (...arg:[...F,A]) =>B: never