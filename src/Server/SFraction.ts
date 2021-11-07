import { SObject } from './SObject.js';

export class SFraction extends SObject {
  private _numerator: number;
  private _denominator: number;

  public ExecuteMethod(methodName: string, strParams: string): string {
    if (methodName === 'Simplify') {
      this.Simplify();
      return '';
    }
    if (methodName === 'IsGreaterThan') {
      return this.IsGreaterThan(parseFloat(strParams)).toString();
    }
  }

  private IsGreaterThan(fraction: number): boolean {
    return this._numerator / this._denominator > fraction;
  }

  private Simplify(): void {
    //Implement this
  }

  public GetAttributeValue(attributeName: string): string {
    if (attributeName === 'Numerator') {
      return this._numerator.toString();
    }
    if (attributeName === 'Denominator') {
      return this._denominator.toString();
    }
    return '';
  }

  public SetAttributeValue(attributeName: string, value: string): boolean {
    try {
      if (attributeName === 'Numerator') {
        this._numerator = parseFloat(value);
      }
      if (attributeName === 'Denominator') {
        const tmp = parseFloat(value);
        if (tmp === 0) {
          throw new Error('Division by zero');
        }
        this._denominator = tmp;
      }
      return true;
    } catch (e) {
      return false;
    }
  }
}
