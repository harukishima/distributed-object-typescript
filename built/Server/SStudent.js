import { SObject } from './SObject.js';
export class SStudent extends SObject {
    GetAttributeValue(attributeName) {
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
    SetAttributeValue(attributeName, value) {
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
        }
        catch (e) {
            return false;
        }
    }
}
