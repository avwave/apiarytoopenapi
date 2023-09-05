import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';

const ScrollContainer = ({ header, children }) => {

  return (
    <StickyContainer>
      <Sticky>
        {({ style }) => (
          <div style={{ ...style, zIndex: 1 }}>
            {header}
          </div>
        )}
      </Sticky>
      {children}
    </StickyContainer>
  )
}

export { ScrollContainer };
