// @flow

export type ValidationInfo = {
    type?: "immediate" | "lostfocus" | "submit",
    level?: "error" | "warning",
    message: string,
};
