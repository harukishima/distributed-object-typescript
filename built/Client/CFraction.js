import { CObject } from './CObject.js';
import { CObjectManager } from './CObjectManager.js';
export class CFraction extends CObject {
    constructor(tuSo, mauSo) {
        super();
        this.handle = CObjectManager.CreateRemoteObject('SFraction');
        this.TuSo = tuSo !== null && tuSo !== void 0 ? tuSo : 0;
        this.MauSo = mauSo !== null && mauSo !== void 0 ? mauSo : 1;
    }
    get TuSo() {
        return parseFloat(this.GetAttributeValue('Numerator'));
    }
    set TuSo(value) {
        this.SetAttributeValue('Numerator', value.toString());
    }
    get MauSo() {
        return parseFloat(this.GetAttributeValue('Denominator'));
    }
    set MauSo(value) {
        this.SetAttributeValue('Denominator', value.toString());
    }
    RutGon() {
        this.ExecuteMethod('Simplify', '');
    }
}
