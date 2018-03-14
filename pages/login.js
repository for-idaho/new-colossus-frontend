import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "../components/head";
import { Main } from "../components/layout";
import Header from "../components/header";
import theme from "../theme";
import {
  Card,
  FancyHeader,
  WhiteTextBack,
  ButtonLink,
  Clamp,
  Button,
  Label,
  Sublabel,
  FormGroup,
  GhostButton
} from "../components/ui";
import { Form, Text, TextArea } from "react-form";
import styled from "styled-components";

const ButtonGroup = styled.div`
  a,
  button {
    margin-right: 1rem;
  }
`;

export default () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Head />

      <Clamp>
        <Header />
        <Card>
          <FancyHeader>Login</FancyHeader>

          <Form onSubmit={this.onSubmit}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="site-gen">
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Text
                    field="email"
                    type="email"
                    id="email"
                    placeholder="ex: jfk@gmail.com"
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Text
                    field="password"
                    type="password"
                    id="password"
                    placeholder="ex: long_and_secret_pa33w0rd"
                  />
                </FormGroup>

                <FormGroup>
                  <ButtonGroup>
                    <Button type="submit">Login!</Button>
                    <GhostButton type="submit">
                      Forget your email or password?
                    </GhostButton>
                  </ButtonGroup>
                </FormGroup>
              </form>
            )}
          </Form>
        </Card>
      </Clamp>
    </Main>
  </ThemeProvider>
);
