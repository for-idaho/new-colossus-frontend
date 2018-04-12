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
import { Form, Text, TextArea, Field } from "react-form";
import styled from "styled-components";
import { register } from "../lib/api";
import { InputWithErr } from "../components/inputs";

const ButtonGroup = styled.div`
  a,
  button {
    margin-right: 1rem;
  }
`;

const required = (type) => (value) => value ? "" : `🚨 ${type} is required!`;

const RegisterPage = ({ onSubmit }) => (
  <ThemeProvider theme={theme}>
    <Main>
      <Head />

      <Clamp>
        <Header />
        <Card>
          <FancyHeader>Register</FancyHeader>

          <Form onSubmit={onSubmit}>
            {formApi => (
              <form onSubmit={formApi.submitForm} id="site-gen">
                <FormGroup>

                  <Label htmlFor="email">Email</Label>
                  <InputWithErr
                    field="email"
                    type="email"
                    id="email"
                    placeholder="ex: jfk@gmail.com"
                    validate={required("Email")}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <Sublabel htmlFor="password">
                    Political campaigns are often targets for hackers! Make sure
                    to use a long, but memorable password.
                  </Sublabel>
                  <InputWithErr
                    field="password"
                    type="password"
                    id="password"
                    placeholder="ex: jfk canada ginger marco 23!"
                    validate={required("Password")}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="first_name">First Name</Label>
                  <InputWithErr
                    field="first_name"
                    type="text"
                    id="first_name"
                    placeholder="ex: Maria"
                    validate={required("First name")}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="middle_name">Middle Name</Label>
                  <Sublabel htmlFor="middle_name">Optional</Sublabel>
                  <InputWithErr
                    field="middle_name"
                    type="text"
                    id="middle_name"
                    placeholder="ex: Annabelle"
                    default=""
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="last_name">Last Name</Label>
                  <InputWithErr
                    field="last_name"
                    type="text"
                    id="last_name"
                    placeholder="ex: Jones"
                    validate={required("Last name")}
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

const STATUS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  EMPTY: "EMPTY", 
};

export default class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      status: STATUS.EMPTY
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ email, password, first_name, middle_name = "", last_name }) {
    register({
      email,
      password,
      username: email,
      first_name,
      middle_name,
      last_name
    }).then(response => {
      console.log(response);
      this.setState({status: STATUS.SUCCESS});
    }).catch(err => {
      console.error(err);
      this.setState({status: STATUS.ERROR});
    });
  }

  render() {
    return <RegisterPage onSubmit={this.onSubmit} status={this.state.status} />;
  }
}
