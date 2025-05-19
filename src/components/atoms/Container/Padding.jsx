import { styled } from 'styled-components'

const Padding = styled.div`
    background-color: ${({ bgColor }) => bgColor ?? 'red'};
    padding: 50px;
`;

export default Padding