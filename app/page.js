import React from "react";
import {ModelViewer} from "@/components/model-viewer";
import {UI} from "@/components/UI";
import {UIContextProvider} from "@/components/UIContext";

export default function Home() {
  return (
      <UIContextProvider>
          <ModelViewer/>
          <UI/>
      </UIContextProvider>
  );
}
