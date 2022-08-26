// fix this code 
function Accumulator(initValue: number): void {
    this.value: number = initValue;
    this.read = function(): void {
        this.value += +prompt('entering your number', 0);
    }
}