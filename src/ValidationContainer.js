// @flow
import React from "react";
import Tooltip from "retail-ui/components/Tooltip";
import ValidationTooltipContext from "./Tooltips/ValidationTooltipContext";
import ValidationContext from "./Behaviour/ValidationContext";

type ValidationContainerProps = {
    children?: any,
    onValidationUpdated?: (isValid?: ?boolean) => void,
    scrollOffset?: number,
};

export default class ValidationContainer extends React.Component {
    props: ValidationContainerProps;

    async submit(withoutFocus: boolean = false): Promise<void> {
        await this.refs.childContext.validate(withoutFocus);
    }

    validate(withoutFocus: boolean = false): Promise<boolean> {
        return this.refs.childContext.validate(withoutFocus);
    }

    render(): React.Element<*> {
        const { children } = this.props;
        const contextProps = {};
        if (this.props.onValidationUpdated) {
            contextProps.onValidationUpdated = this.props.onValidationUpdated;
        }
        contextProps.verticalOffset = this.props.scrollOffset || 50;
        return (
            <ValidationContext ref="childContext" {...contextProps}>
                <ValidationTooltipContext tooltipComponent={Tooltip} ref="childTooltipContext">
                    {children}
                </ValidationTooltipContext>
            </ValidationContext>
        );
    }
}
