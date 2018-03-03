import React from "react";
import styled from "styled-components";
import Head from "../components/head";
import { Main } from "../components/layout";
import SiteGenForm from "../components/site-gen-form";

export default () => (
  <Main>
    <Head />
    <h1>{"Let's create your site."}</h1>
    <h2>{"We'll need some information first."}</h2>

    <SiteGenForm />
  </Main>
);
