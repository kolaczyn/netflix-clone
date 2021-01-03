import React from "react";
import FaqContainer from "./containers/Faq";
import FooterContainer from "./containers/Footer";
import JumbotronContainer from "./containers/Jumbotron";


export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqContainer/>
      <FooterContainer />
    </>
  );
}
