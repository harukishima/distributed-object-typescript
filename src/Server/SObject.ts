import { SObjectManager } from './SObjectManager.js';

export class SObject {
  protected handle: number;

  constructor() {
    this.handle = SObjectManager.RegisterObject(this);
  }

  public get Handle(): number {
    return this.handle;
  }

  public set Handle(handle: number) {
    this.handle = handle;
  }

  public GetAttributeValue(attribute: string): string {
    return '';
  }

  public SetAttributeValue(attribute: string, value: string): boolean {
    return false;
  }

  public ExecuteMethod(method: string, strParams: string): string {
    return '';
  }
}
