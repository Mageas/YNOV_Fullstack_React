import React, {useState} from 'react'
import { Button, Container } from '../../atoms'

const Topbar = ({pages, ...props}) => {

  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <>
      <Button.Subscribe onClick={() => setSelectedMenu(0)}>Accueil</Button.Subscribe>
      <Button.Subscribe onClick={() => setSelectedMenu(1)}>CGU</Button.Subscribe>
      <Container.Base>
        {pages[selectedMenu]}
      </Container.Base>
    </>
  )
}

export default Topbar