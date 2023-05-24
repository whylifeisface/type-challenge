type Trim<S extends string> = 
S extends `${' '| '\n' | '\t'}${ infer R }` ? Trim<R> : 
S extends `${ infer R }${' '| '\n' | '\t'}` ? Trim<R> : 
S extends `${' '| '\n' | '\t'}${ infer R }${' '| '\n' | '\t'}` ? Trim<R> : S