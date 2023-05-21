type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends (...args: unknown[]) => void ? T[P] : T[P] extends Object ? DeepReadonly<T[P]> : T[P]
}
 //缺少 (...args:unknown[])=>void 判断