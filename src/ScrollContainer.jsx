import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';

const ScrollContainer = ({ header, children }) => {

  return (
    <>
      <div className='fixedheader'>
        {header}
      </div>
      <div className='doccontainer'>
        {children}
      </div>
    </>
  )
}

export { ScrollContainer };
