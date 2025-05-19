import styled from 'styled-components';

const Subscribe = styled.button`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};
    border-color: ${props => props.theme.color};

    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
`;

export default Subscribe;
