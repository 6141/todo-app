import React from 'react'
import { useParams } from 'react-router-dom'

const TodoDetail = () => {
    const { name, description} = useParams()
  return (
    <div>
      <h2>TODO DETAIL PAGE</h2>
      <h2>you can see the description of the todo added here: </h2>
      <p class='italic...'>Name: {name}</p>
      <p class='italic'>Description: {description}</p>
    </div>
  )
}

export default TodoDetail
