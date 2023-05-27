type MyCapitalize<S extends string> = S extends
    `${infer First}${infer R}` ? `${Uppercase<First>}${R}` : ''  
    // 是 'a' 是 'abc'