import { SObject } from './SObject.js';
export class SFraction extends SObject {
    ExecuteMethod(methodName, strParams) {
        if (methodName === 'Simplify') {
            this.Simplify();
            return '';
        }
        if (methodName === 'IsGreaterThan') {
            return this.IsGreaterThan(parseFloat(strParams)).toString();
        }
    }
    IsGreaterThan(fraction) {
        return this._numerator / this._denominator > fraction;
    }
    Simplify() {
        //Implement this
    }
    GetAttributeValue(attributeName) {
        if (attributeName === 'Numerator') {
            return this._numerator.toString();
        }
        if (attributeName === 'Denominator') {
            return this._denominator.toString();
        }
        return '';
    }
    SetAttributeValue(attributeName, value) {
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
        }
        catch (e) {
            return false;
        }
    }
}
