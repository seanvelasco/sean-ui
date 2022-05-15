import React, { Component } from "react";
import styled from "@emotion/styled";

export interface ButtonProps {
    label: string;
}

const Button = (props: ButtonProps) => {
    return (
        <div>{props.label}</div>
    )
}

export default Button;