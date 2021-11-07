import { SObject } from './SObject.js';

export class SStudent extends SObject {
  protected FullName: string;
  protected ID: number;
  protected GPA: number;

  public GetAttributeValue(attributeName: string): string {
    switch (attributeName) {
      case 'FullName':
        return this.FullName;
      case 'ID':
        return this.ID.toString();
      case 'GPA':
        return this.GPA.toString();
      default:
        return super.GetAttributeValue(attributeName);
    }
  }

  public SetAttributeValue(attributeName: string, value: string): boolean {
    try {
      switch (attributeName) {
        case 'FullName':
          this.FullName = value;
          break;
        case 'ID':
          this.ID = parseInt(value);
          break;
        case 'GPA':
          this.GPA = parseFloat(value);
          break;
        default:
          return super.SetAttributeValue(attributeName, value);
      }
      return true;
    } catch (e) {
      return false;
    }
  }
}
