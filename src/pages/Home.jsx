import React from "react";
import FaqContainer from "../containers/Faq";
import { Feature, OptForm } from "../components";
import FooterContainer from "../containers/Footer";
import HeaderContainer from "../containers/Header";
import JumbotronContainer from "../containers/Jumbotron";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited fims, TV programmes and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
        <OptForm>
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqContainer />
      <FooterContainer />
    </>
  );
}
