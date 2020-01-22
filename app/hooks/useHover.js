import { useState } from "react";

export function useHover() {
  const [hover, setHover] = useState(false);

  const onMouseOver = () => setHover(true);
  const onMouseOut = () => setHover(false);

  return [hover, { onMouseOver, onMouseOut }];
}
