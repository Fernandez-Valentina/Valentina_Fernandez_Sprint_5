import React from 'react';

export const Menu = ({menus}) => {
    return (     
    <div className='section-center'>
        {menus.map((item, index) => {
          return (
            <article className='menu-item' key={index}>
          <img src={item.img} className='photo' />
          <div className='item-info'>
            <header>
              <h2>{item.title}</h2>
              <h3 className='price'>{item.price}</h3>
            </header>
            <p className='item-text'>{item.desc}</p>
          </div>
        </article>
        );
        })}   
      </div>
      );
};