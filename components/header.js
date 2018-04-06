import React from "react";
import {
  WhiteTextBack,
  FancyHeader,
  ButtonLink,
  GhostButtonLink
} from "../components/ui";
import styled from "styled-components";

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
  <Header>
    <WhiteTextBack>
      <FancyHeader href="/">New Colossus</FancyHeader>
    </WhiteTextBack>

    <FlexEndOnBigScreens>
      <WhiteTextBack>
        <Menu>
          <GhostButtonLink href="#">About</GhostButtonLink>
          <GhostButtonLink href="#">Contact</GhostButtonLink>
        </Menu>
      </WhiteTextBack>

      <ButtonLink href="/login">Login</ButtonLink>
    </FlexEndOnBigScreens>
  </Header>
);
