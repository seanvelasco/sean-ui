import React from "react";
import styled from "@emotion/styled";

type Category = {
    href: string
    label: string
}

type Header = {
    title: string
    logo: string
    categories: Category[]
}

const Wrapper = styled.div``
    
const Header = (props: Header) => {
    return (
        <Wrapper>
            <h1>{props.title}</h1>
            <a href="/">
                <img src={props.logo} alt="logo" />
            </a>
            <div>
                {
                    props.categories.map((category: Category) => {
                        return (
                            <a href={category.href} key={category.label}>
                                {category.label}
                            </a>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}

export default Header;