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
import Header from "../components/header.js";
import showBanner from "../lib/emma";
showBanner();

export default () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Head />
      <Clamp>
        <Header />

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
