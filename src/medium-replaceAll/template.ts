type ReplaceAll<S extends string, From extends string, To extends string> =     
From extends '' ? S :
S extends `${infer R}${From}${infer F}` ? ReplaceAll<`${R}${To}${F}`,From,To> :
S extends `${infer R}${From}` ? ReplaceAll<`${R}${To}`,From,To> : S