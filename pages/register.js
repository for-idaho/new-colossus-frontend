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
          <FancyHeader>Register</FancyHeader>

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
                  <Sublabel htmlFor="password">
                    Political campaigns are often targets for hackers! Make sure
                    to use a long, but memorable password.
                  </Sublabel>
                  <Text
                    field="password"
                    type="password"
                    id="password"
                    placeholder="ex: jfk canada ginger marco 23!"
                  />
                </FormGroup>

                <FormGroup>
                  <ButtonGroup>
                    <Button type="submit">Create your account!</Button>
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
