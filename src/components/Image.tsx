import { useState } from "react";
import { ImageModal } from "./ImageModal";

export const Image = ({ src }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <img
        src={src}
        className="h-56"
        onClick={() => setOpen(true)}
        loading="lazy"
      />
      ;
      <ImageModal open={open} setOpen={setOpen} src={src} />
    </>
  );
};
