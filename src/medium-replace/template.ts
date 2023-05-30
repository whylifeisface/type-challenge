type Replace<S extends string, From extends string, To extends string> =
    // S extends `${infer R}${From}${infer F}` ? `${R}${To}${F}` : S 
    From extends '' ? S :
    S extends `${infer R}${From}${infer F}` ? `${R}${To}${F}` :
    S extends `${infer R}${From}` ? `${R}${To}` : S