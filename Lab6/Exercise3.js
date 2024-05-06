const printNumbers = (start, end) => {
    for (let i = start; i <= end; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
printNumbers(2, 10);