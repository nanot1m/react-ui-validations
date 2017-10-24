// @flow
import React from "react";
import type { RenderErrorMessage } from "../Behaviour/ValidationWrapper";

export default function text(pos: string = "right"): RenderErrorMessage {
    if (pos === "right") {
        return (control, hasError, validation) => (
            <span style={{ display: "inline-block" }}>
                {control}
                <span data-validation-message="text" style={{ marginLeft: "10px", color: "#d43517" }}>
                    {(validation && validation.message) || ""}
                </span>
            </span>
        );
    }
    return (control, hasError, validation) => (
        <span style={{ position: "relative", display: "inline-block" }}>
            {control}
            <span style={{ position: "absolute", bottom: 0, left: 0, height: 0 }}>
                <span
                    data-validation-message="text"
                    style={{
                        color: "#d43517",
                        overflow: "visible",
                        whiteSpace: "nowrap",
                        position: "absolute",
                        top: "2px",
                        left: 0,
                    }}>
                    {(validation && validation.message) || ""}
                </span>
            </span>
        </span>
    );
}
