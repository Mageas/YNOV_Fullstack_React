import React, {useContext} from 'react';
import { Container } from '../atoms'
import { NightModeContext } from '../../context/NightModeContext';

const Bonjour = (props) => {
    const nightModeContext = useContext(NightModeContext);

    return (
        <Container.Base>
            Hello there
        </Container.Base>
    )
}

export default Bonjour;