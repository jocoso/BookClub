import styled from 'styled-components';

export default styled.button`
    background: ${props => props.color || "light-gray" };
    border-radius: 50%;
    padding: 0.2vw;
    font-size: ${props => props.radius/2 + "vw" || "0.15vw"};
    height: ${props => props.radius + "vw" || "0.3vw"};
    width: ${props => props.radius + "vw" || "0.3vw" };
`;

