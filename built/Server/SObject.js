import { SObjectManager } from './SObjectManager.js';
export class SObject {
    constructor() {
        this.handle = SObjectManager.RegisterObject(this);
    }
    get Handle() {
        return this.handle;
    }
    set Handle(handle) {
        this.handle = handle;
    }
    GetAttributeValue(attribute) {
        return '';
    }
    SetAttributeValue(attribute, value) {
        return false;
    }
    ExecuteMethod(method, strParams) {
        return '';
    }
}
