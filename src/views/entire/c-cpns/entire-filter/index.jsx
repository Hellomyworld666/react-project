
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import className from 'classnames'

const EntireFilter = memo((props) => {
  const [ selectItem, setSelectItem ] = useState([])

  function itemClickHandle(item) {
    const newItems = [...selectItem]
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else {
      newItems.push(item)
    }

    setSelectItem(newItems)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return (
              <div 
                className={className("item", { active: selectItem.includes(item) })}
                key={item}
                onClick={e => itemClickHandle(item)}
                >
              {item}
             </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter