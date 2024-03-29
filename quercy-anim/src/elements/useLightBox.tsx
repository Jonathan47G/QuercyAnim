import * as React from "react";
import dynamic from "next/dynamic";
import type { LightboxExternalProps } from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

const Lightbox = dynamic(() => import("@/elements/Lightbox"));

export default function useLightbox() {
  const [open, setOpen] = React.useState(false);
  const [interactive, setInteractive] = React.useState(false);

  const openLightbox = React.useCallback(() => {
    setOpen(true);
    setInteractive(true);
  }, []);

  const renderLightbox = React.useCallback(
    (props?: Omit<LightboxExternalProps, "open" | "close">, index?:number) =>
      interactive ? (
        <Lightbox index={index} open={open} close={() => setOpen(false)} {...props} plugins={[Thumbnails]}/>
      ) : null,
    [open, interactive]
  );

  return { openLightbox, renderLightbox };
}
