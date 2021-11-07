import { CObjectManager } from './CObjectManager.js';

export class CObject {
  protected handle = 0;

  protected SetAttributeValue(attribute: string, newValue: string): void {
    CObjectManager.SetAttributeValue(this.handle, attribute, newValue);
  }

  protected GetAttributeValue(attribute: string): string {
    return CObjectManager.GetAttributeValue(this.handle, attribute);
  }

  public ExecuteMethod(method: string, strParams: string): string {
    return CObjectManager.ExecuteRemoteMethod(this.handle, method, strParams);
  }

  public GetHandle(): number {
    return this.handle;
  }

  public Bind(handle: number): void {
    this.handle = handle;
  }
}
