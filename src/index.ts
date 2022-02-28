const DefaultMin = 0;
const DefaultMax = 100;

export default class LimitedInt {
  private _min: number;
  private _max: number;
  private _value: number;
 
  constructor(value: number, max: number = DefaultMax, min: number = DefaultMin) {
    if(min >= max) throw new Error("Minimum value must be smaller than maximum value.");

    this._value = value;
    this._max = max;
    this._min = min;

    this.limitValue();
  }
 
  get max(){
    return this._max;
  }

  get min(){
    return this._min;
  }

  get value(){
    return this._value;
  }

  set value(value){
    this._value = value;

    this.limitValue();
  }

  isMax(): boolean{
    return this._value == this._max;
  }

  isMin(): boolean{
    return this._value == this._min;
  }

  increase(amount: number): void{
    this._value += amount;
    this.limitValue();
  }

  decrease(amount: number): void{
    this._value -= amount;
    this.limitValue();
  }

  increasePercentage(percentage: number): void{
    let amount = this.calculatePercentage(this._value, percentage);
    this.increase(amount);
  }

  decreasePercentage(percentage: number): void{
    let amount = this.calculatePercentage(this._value, percentage);
    this.decrease(amount);
  }

  maximizeValue(): void{
    this._value = this._max;
  }

  minimizeValue(): void{
    this._value = this._min;
  }

  copy(): LimitedInt{
    return new LimitedInt(this._value, this._max, this._min);
  }

  private limitValue(): void{
    if (this._value > this._max) this._value = this._max;
    if (this._value < this._min) this._value = this._min;
  }

  private calculatePercentage(value: number, percentage: number): number{
    return (value * percentage) / 100;
  }
}