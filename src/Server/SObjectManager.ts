import { SFraction } from './SFraction.js';
import { SStudent } from './SStudent.js';
import { SObject } from './SObject.js';

export class SObjectManager {
  private static NextAvailableHandle = 0;
  private static objects = new Map<number, SObject>();

  public static RegisterObject(obj: SObject): number {
    const handle = SObjectManager.NextAvailableHandle++;
    SObjectManager.objects.set(handle, obj);
    return handle;
  }

  private static CheckHandle(handle: number): boolean {
    return SObjectManager.objects.has(handle);
  }

  public static GetAttributeValue(handle: number, attribute: string): string {
    if (this.CheckHandle(handle)) {
      return SObjectManager.objects.get(handle).GetAttributeValue(attribute);
    }
    return '';
  }

  public static SetAttributeValue(
    handle: number,
    attribute: string,
    value: string
  ): boolean {
    if (this.CheckHandle(handle)) {
      return SObjectManager.objects
        .get(handle)
        .SetAttributeValue(attribute, value);
    }
    return false;
  }

  public static ExecuteMethod(
    handle: number,
    method: string,
    strParams: string
  ): string {
    if (this.CheckHandle(handle)) {
      return SObjectManager.objects
        .get(handle)
        .ExecuteMethod(method, strParams);
    }
    return '';
  }

  public static CreateObject(strType: string): number {
    let obj: SObject;
    switch (strType) {
      case 'SFraction':
      case 'Fraction': {
        obj = new SFraction();
        return obj.Handle;
      }
      case 'SStudent':
      case 'Student': {
        obj = new SStudent();
        return obj.Handle;
      }
      default:
        return 0;
    }
  }
}
