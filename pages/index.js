import React from "react";
import styled from "styled-components";
import Head from "../components/head";
import { Main } from "../components/layout";
import SiteGenForm from "../components/site-gen-form";
import {
  Card,
  FancyHeader,
  WhiteTextBack,
  ButtonLink,
  Clamp
} from "../components/ui";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

const Header = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const FlexEndOnBigScreens = styled.div`
  align-self: center;
  justify-self: flex-end;

  @media only screen and (max-width: 600px) {
    align-self: flex-start;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  * {
    margin-left: 1rem;
  }

  @media only screen and (max-width: 600px) {
    * {
      margin-left: initial;
      margin-right: 1rem;
    }
  }
`;

export default () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Head />
      <Clamp>
        <Header>
          <WhiteTextBack>
            <FancyHeader>New Colossus</FancyHeader>
          </WhiteTextBack>

          <FlexEndOnBigScreens>
            <WhiteTextBack>
              <Menu>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </Menu>
            </WhiteTextBack>

            <ButtonLink href="#">Logout</ButtonLink>
          </FlexEndOnBigScreens>
        </Header>

        <Card>
          <FancyHeader>{"Hi!"}</FancyHeader>
          <p>
            This site will help you build a website for your political campaign
            in Idaho.
          </p>

          <h2>How it works</h2>

          <ul>
            <li>
              It takes about <b>15 minutes.</b>
            </li>
            <li>
              <b>We save your progress as you go</b>, so feel free to close this
              window and come back later.
            </li>
          </ul>

          <FancyHeader>{"Let's get started"}</FancyHeader>

          <SiteGenForm />
        </Card>
      </Clamp>
    </Main>
  </ThemeProvider>
);
