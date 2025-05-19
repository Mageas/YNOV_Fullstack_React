import { styled } from 'styled-components'

const Base = styled.div`
    background-color: ${({ bgColor }) => bgColor ?? 'red'};
`;

export default Base