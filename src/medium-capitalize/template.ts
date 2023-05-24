type MyCapitalize<S extends string> = S extends `${S[0]}` ?
    S extends
    `${S[0]}${infer R}` ? `${S[0]}${R}` : never  :S[0]
    // 是 'a' 是 'abc'