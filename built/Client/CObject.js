import { CObjectManager } from './CObjectManager.js';
export class CObject {
    constructor() {
        this.handle = 0;
    }
    SetAttributeValue(attribute, newValue) {
        CObjectManager.SetAttributeValue(this.handle, attribute, newValue);
    }
    GetAttributeValue(attribute) {
        return CObjectManager.GetAttributeValue(this.handle, attribute);
    }
    ExecuteMethod(method, strParams) {
        return CObjectManager.ExecuteRemoteMethod(this.handle, method, strParams);
    }
    GetHandle() {
        return this.handle;
    }
    Bind(handle) {
        this.handle = handle;
    }
}
