import { Form, Text, TextArea } from "react-form";
import styled from "styled-components";

// Note: padding used here instead of margin for a11y
// You can click on padding, but not on margin
const Label = styled.label`
  width: 100%;
  display: inline-block;
  padding-bottom: 1rem;
`;

const FormGroup = styled.p`
  input,
  textarea {
    border: 1px solid ${props => props.theme.skyblue.light};
    width: 100%;
  }
`;

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
              <TextArea field="bio" id="bio" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="events">Events Coming Up</Label>
              <TextArea field="events" id="events" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="issues">Issues</Label>
              <TextArea field="issues" id="issues" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="volunteer">Volunteer Link</Label>
              <Text field="volunteer" type="url" id="volunteer" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="donate">Donate Link</Label>
              <Text field="donate" type="url" id="donate" />
            </FormGroup>

            <FormGroup>
              <button type="submit">Submit</button>
            </FormGroup>
          </form>
        )}
      </Form>
    );
  }
}

export default SiteGenForm;
