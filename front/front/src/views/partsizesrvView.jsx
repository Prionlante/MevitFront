import React from "react";
import { Head } from "../components/header";
import { Footer } from "../components/footer";
import { Plataggsrv } from "../components/Module/plataggsrv";

function ModuleView() {
  return (
    <>
      <Head />
      <Plataggsrv/>
      <Footer />
    </>
  );
}

export { ModuleView };
