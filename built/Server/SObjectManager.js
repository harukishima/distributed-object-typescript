import { SFraction } from './SFraction.js';
import { SStudent } from './SStudent.js';
export class SObjectManager {
    static RegisterObject(obj) {
        const handle = SObjectManager.NextAvailableHandle++;
        SObjectManager.objects.set(handle, obj);
        return handle;
    }
    static CheckHandle(handle) {
        return SObjectManager.objects.has(handle);
    }
    static GetAttributeValue(handle, attribute) {
        if (this.CheckHandle(handle)) {
            return SObjectManager.objects.get(handle).GetAttributeValue(attribute);
        }
        return '';
    }
    static SetAttributeValue(handle, attribute, value) {
        if (this.CheckHandle(handle)) {
            return SObjectManager.objects
                .get(handle)
                .SetAttributeValue(attribute, value);
        }
        return false;
    }
    static ExecuteMethod(handle, method, strParams) {
        if (this.CheckHandle(handle)) {
            return SObjectManager.objects
                .get(handle)
                .ExecuteMethod(method, strParams);
        }
        return '';
    }
    static CreateObject(strType) {
        let obj;
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
SObjectManager.NextAvailableHandle = 0;
SObjectManager.objects = new Map();
