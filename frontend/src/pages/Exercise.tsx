import React from 'react'
import { useParams } from 'react-router-dom';

const Exercise = () => {
    const params = useParams<{ id: string }>();
  return (
    <div>Exercise {params.id}</div>
  )
}

export default Exercise