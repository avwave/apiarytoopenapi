import React from 'react';

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
