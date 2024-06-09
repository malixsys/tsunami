'use client';

import { useEffect, useRef } from 'react';

export function Slides(props) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let instance, PSPDFKit;
    (async function () {
      PSPDFKit = await import('pspdfkit');
      PSPDFKit.unload(container);

      instance = await PSPDFKit.load({
        toolbarItems: [],
        licenseKey:
          'SLxJkbXA9LIdI4_26qKxRuYw29YcWXAHk2iUXOz_5AoVtDAQxs4qNuxjRBpMIimYmQD2m2mB1w3P7DcOBB83D_WUp4dbCEpJ9VRnkzHae0HEk0RR7WxhJsd43mLFhu3bV9sPBtodpW_oOd98aO1Kr5x5yOdFJW83A4sVuijxaWwGW52tAS-NUuDl1q2-QFBpZ9bA8JHjtXHV_hjEOw',
        container,
        // The document to open.
        document: props.document,
        // Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
        baseUrl: `${window.location.protocol}//${window.location.host}/`
      });
    })();

    return () => PSPDFKit && PSPDFKit.unload(container);
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '700px' }} />;
}
