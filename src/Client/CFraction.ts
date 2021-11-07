import { CObject } from './CObject.js';
import { CObjectManager } from './CObjectManager.js';

export class CFraction extends CObject {
  constructor(tuSo?: number, mauSo?: number) {
    super();
    this.handle = CObjectManager.CreateRemoteObject('SFraction');
    this.TuSo = tuSo ?? 0;
    this.MauSo = mauSo ?? 1;
  }

  public get TuSo(): number {
    return parseFloat(this.GetAttributeValue('Numerator'));
  }

  public set TuSo(value: number) {
    this.SetAttributeValue('Numerator', value.toString());
  }

  public get MauSo(): number {
    return parseFloat(this.GetAttributeValue('Denominator'));
  }

  public set MauSo(value: number) {
    this.SetAttributeValue('Denominator', value.toString());
  }

  public RutGon(): void {
    this.ExecuteMethod('Simplify', '');
  }
}
