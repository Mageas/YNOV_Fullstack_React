import { useState } from 'react';
import { Button, Container } from '../../atoms'

const Switch = ({children, ...props}) => {

  const primary = "red";
  const secondary = "blue";

  const [isOn, setIsOn] = useState(false);

  return (
    <Container.Base theme={isOn ? {background: primary} : {background: secondary}}>
        <Button.Subscribe {...props} onClick={() => setIsOn(!isOn)}>
            {children}
        </Button.Subscribe>
    </Container.Base>
  )
}

export default Switch