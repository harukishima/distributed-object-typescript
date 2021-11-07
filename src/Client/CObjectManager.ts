import { SObjectManager } from '../Server/SObjectManager.js';

export class CObjectManager {
  public static SetAttributeValue(
    handle: number,
    attribute: string,
    value: string
  ): void {
    SObjectManager.SetAttributeValue(handle, attribute, value);
  }

  public static GetAttributeValue(handle: number, attribute: string): string {
    return SObjectManager.GetAttributeValue(handle, attribute);
  }

  public static CreateRemoteObject(objectType: string): number {
    return SObjectManager.CreateObject(objectType);
  }

  public static ExecuteRemoteMethod(
    handle: number,
    method: string,
    strParams: string
  ): string {
    return SObjectManager.ExecuteMethod(handle, method, strParams);
  }
}
