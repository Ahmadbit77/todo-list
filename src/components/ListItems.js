import React from 'react'
import Item from './Item';
export default function ListItems({items,onToggleItem,onDeleteItem}) {
  return (
    <ul className='list-items'>
      {items.map( item => {
        const {id,description,selected } = item ;
        return <Item key = {id} id = {id} description = {description} selected = {selected} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem}/>
      })}
      
    </ul>
  )
}
