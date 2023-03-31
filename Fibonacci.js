function fibTopDown(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibTopDown(n-1) + fibTopDown(n-2);
    }
}

console.log(fibTopDown(20));





