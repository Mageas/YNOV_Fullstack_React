import { Button, Container, Typography } from '../../atoms'

const Default = ({children, ...props}) => {
  return (
    <Container.Base>
        <Button.Subscribe {...props}>
            {children}
        </Button.Subscribe>
    </Container.Base>
  )
}

export default Default