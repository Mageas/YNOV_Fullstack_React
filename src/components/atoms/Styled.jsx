import React from 'react'
import { styled } from 'styled-components'

const StyledContainer = styled.div`
    background-color: ${({ bgColor }) => bgColor};
`;

function Styled() {
    return (
        <StyledContainer bgColor="red">test</StyledContainer>
    )
}

export default Styled