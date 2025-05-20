import React, { useState } from 'react'
import { Container, Typography } from '../../atoms'

const Task = ({toggle, isDone, taskName, remove}) => {
  return (
    <Container.Base>
        <Typography.Link href='#' onClick={() => toggle()}>
            {isDone ? 'X' : 'O'}
        </Typography.Link>
        <Typography.Paragraphe>
             - {taskName} -
        </Typography.Paragraphe>
        <Typography.Link href='#' onClick={() => remove()}>
            Supprimer
        </Typography.Link>
    </Container.Base>
  )
}

export default Task