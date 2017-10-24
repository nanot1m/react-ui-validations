// @flow
import React from "react";
import type { RenderErrorMessage } from "../Behaviour/ValidationWrapper";
import ValidationTooltip from "../Tooltips/ValidationTooltip";

export default function tooltip(pos: string): RenderErrorMessage {
    return (control, hasError, validation) => (
        <ValidationTooltip
            pos={pos}
            error={hasError}
            render={() => {
                if (!validation || !validation.message) {
                    return null;
                }
                return (validation && validation.message) || "";
            }}>
            {control}
        </ValidationTooltip>
    );
}
