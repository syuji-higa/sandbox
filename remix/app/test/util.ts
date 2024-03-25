import { act, within } from "@testing-library/react";
import { ReactNode } from "react";
import { createRoot } from "react-dom/client";

const randomId = () => Math.random().toString(36).substring(7);

/**
 * add document render.
 * 
 * @see {@link https://github.com/jinjor/midi-movie/blob/b7fb48f46d7ea9c01b8b38af727463de533f39a0/src/test/util.ts}
 */
export const renderInNewContainer = (node: ReactNode) => {
  const container = document.createElement("div");
  container.setAttribute("id", randomId());
  document.body.appendChild(container);
  
  act(() => {
    createRoot(container).render(node);
  });

  return within(container);
};
