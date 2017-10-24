// @flow
const COMPONENT_NAME_PROP = "__REACT_UI_COMPONENT_NAME__";

export default class ReactUiDetection {
    static isDatePicker(childrenArray: any): boolean {
        return childrenArray != null && childrenArray.type[COMPONENT_NAME_PROP] === "DatePicker";
    }

    static isRadioGroup(childrenArray: any): boolean {
        return childrenArray != null && childrenArray.type[COMPONENT_NAME_PROP] === "RadioGroup";
    }
}
