import { SObjectManager } from '../Server/SObjectManager.js';
export class CObjectManager {
    static SetAttributeValue(handle, attribute, value) {
        SObjectManager.SetAttributeValue(handle, attribute, value);
    }
    static GetAttributeValue(handle, attribute) {
        return SObjectManager.GetAttributeValue(handle, attribute);
    }
    static CreateRemoteObject(objectType) {
        return SObjectManager.CreateObject(objectType);
    }
    static ExecuteRemoteMethod(handle, method, strParams) {
        return SObjectManager.ExecuteMethod(handle, method, strParams);
    }
}
