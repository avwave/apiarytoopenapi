import { API } from '@stoplight/elements';
import { subscribeTheme } from "@stoplight/mosaic";
import { useCallback, useLayoutEffect } from 'react';
import './App.scss';
import { Header } from './Header';
import { ScrollContainer } from './ScrollContainer';
import spec from './spec.json';
import { useMobileLayout } from './utils/responsive';
function App() {

  const isMobile = useMobileLayout()

  const overrideStyle = useCallback(
    () => {
      const overrideStyle = document.createElement('link');
      overrideStyle.rel = 'stylesheet';
      overrideStyle.href = `${process.env.PUBLIC_URL}/stoplight.css`
      overrideStyle.type = 'text/css';
      document.head.appendChild(overrideStyle)
    },
    [],
  );


  useLayoutEffect(
    () => {
      subscribeTheme({ mode: 'dark' })
      let elem = document.querySelector("div.doccontainer > div > div > div > div > div.sl-flex > div.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r > a")
      elem?.remove()
      elem = document.querySelector("div.doccontainer > div > div > div > div > div.sl-flex > div.sl-flex.sl-overflow-y-auto.sl-flex-col.sl-sticky.sl-inset-y-0.sl-pt-8.sl-bg-canvas-100.sl-border-r > div.sl-flex.sl-items-center.sl-mb-5.sl-ml-4")
      elem?.remove()
      overrideStyle()
    }, [overrideStyle]
  );




  return (
    <div className="rootcontainer">
      <ScrollContainer
        header={<Header spec={spec} />}
      >
        <API
          apiDescriptionDocument={spec}
          layout={isMobile ? "stacked" : "sidebar"}
          router="hash"
          hideExport={true}
          hideSchemas={false}
        />
      </ScrollContainer>

    </div>
  );
}

export default App;

