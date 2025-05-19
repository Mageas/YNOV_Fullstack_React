import { styled } from 'styled-components'

const Base = styled.div`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
`;

export default Base