function myPick(a, b) {
    const c = {}
    b.forEach(element => {
        if (element in a) {
            c[element] = a[element]
        }
        return c;
    })
}
