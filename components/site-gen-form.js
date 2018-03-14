import { Form, Text, TextArea } from "react-form";
import styled from "styled-components";
import { Button, Label, Sublabel, FormGroup } from "./ui";

class SiteGenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { submittedValues: {} };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(submittedValues) {
    this.setState({ submittedValues });
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="site-gen">
            <FormGroup>
              <Label htmlFor="bio">Bio</Label>
              <TextArea
                field="bio"
                id="bio"
                placeholder="ex: Maria Clairemont started her career ..."
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="events">Events Coming Up</Label>
              <TextArea
                field="events"
                id="events"
                placeholder="ex: Speech at Boise State University on May 12th at 7pm ..."
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="issues">Issues</Label>
              <TextArea
                field="issues"
                id="issues"
                placeholder="ex: Maria is dedicated to ..."
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="volunteer">Volunteer Link</Label>
              <Sublabel htmlFor="volunteer">
                This can be from any FEC compliant donation platform, such as
                ActBlue.
              </Sublabel>
              <Text
                field="volunteer"
                type="url"
                id="volunteer"
                placeholder="ex: https://secure.actblue.com/donate/…"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="donate">Donate Link</Label>

              <Sublabel htmlFor="donate">
                This can be a link to any form website such as Google Forms, or
                a politics specific platform such as NGP.
              </Sublabel>
              <Text
                field="donate"
                type="url"
                id="donate"
                placeholder="ex: https://secure.actblue.com/donate/…"
              />
            </FormGroup>

            <FormGroup>
              <Button type="submit">Launch your site!</Button>
            </FormGroup>
          </form>
        )}
      </Form>
    );
  }
}

export default SiteGenForm;
