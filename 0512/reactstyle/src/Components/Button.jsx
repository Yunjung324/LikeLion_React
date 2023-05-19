import React from 'react'
import styled, { css } from 'styled-components'

const One = css`
    color: red;
`;

const Two = css`
    background-color: blue;
`;

const Three = styled.div`
    ${One}
    ${Two}
`

export default function Button() {
    return (
        <div>
            <button><One></One></button>
            <button><Two></Two></button>
            <button><Three></Three></button>
        </div>
    )
}
