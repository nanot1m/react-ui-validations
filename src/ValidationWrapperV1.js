// @flow
import React from "react";
import ValidationWrapper from "./Behaviour/ValidationWrapper";
import tooltip from "./ErrorMessageRenderers/Tooltip";
import type { RenderErrorMessage } from "./Behaviour/ValidationWrapper";
import type { ValidationInfo } from "./types";

type ValidationWrapperV1Props = {
    children?: React.Element<*>,
    validationInfo: ?ValidationInfo,
    renderMessage?: RenderErrorMessage,
};

export default class ValidationWrapperV1 extends React.Component {
    props: ValidationWrapperV1Props;

    static defaultProps = {
        renderMessage: tooltip("right middle"),
    };

    render(): React.Element<*> {
        const { children, validationInfo, renderMessage } = this.props;

        return (
            <ValidationWrapper
                errorMessage={renderMessage}
                validations={[
                    {
                        error: Boolean(validationInfo),
                        level: validationInfo && validationInfo.level ? validationInfo.level : "error",
                        behaviour: (validationInfo && validationInfo.type) || "lostfocus",
                        message: validationInfo && validationInfo.message,
                    },
                ]}>
                {children}
            </ValidationWrapper>
        );
    }
}
