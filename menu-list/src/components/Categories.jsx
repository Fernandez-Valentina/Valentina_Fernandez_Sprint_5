import React from 'react';

export const Categories = ({menuList, filterItems}) => {
    return (
    <div className='btn-container'>
        {menuList.map((category, index) => {
          return (
            <button type ='button' className='filter-btn' key={index} onClick={() => filterItems(category)}>
              {category}
            </button>
          );
        })}
        </div>
    );
};