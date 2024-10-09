import React from 'react'
import { ContainerItem } from './style'


const ItemRepo = ({fullName, name, repoUrl, onRemove}) => {
  return (
    <ContainerItem>
        <h3>
            {name}
        </h3>
        <p>{fullName}</p>
        <a href={repoUrl}>Ver Repositorio</a><br/>
        <a onClick={onRemove} className="remove">Remover</a>
        <hr />
    </ContainerItem>
  )
}

export default ItemRepo