// BEGIN
export default function magic(...args) {
    const sum = args.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);

    function innerMagic(...newArgs) {
        const newSum = newArgs.reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
        const total = sum + newSum;
        const func = magic(total);
        func.valueOf = () => total;
        return func;
    }

    innerMagic.valueOf = () => sum;
    return innerMagic;
}
// END
