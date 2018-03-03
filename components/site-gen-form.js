import { Form, Text, TextArea } from "react-form";

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
        {formApi => <form onSubmit={formApi.submitForm} id="site-gen" >
        
        <label htmlFor="boi">Bio</label>
        <TextArea field="bio" id="bio"/> 

        <label htmlFor="events">Events Coming Up</label>
        <TextArea field="events" id="events"/> 

        <label htmlFor="issues">Issues</label>
        <TextArea field="issues" id="issues"/> 

        <label htmlFor="volunteer">Volunteer Link</label>
        <Text field="volunteer" id="volunteer"/> 

        <label htmlFor="donate">Donate Link</label>
        <Text field="donate" id="donate"/> 

        <p>
        <button type="submit">
          Submit
        </button>
        </p>

        </form>}
      </Form>
    );
  }
}

export default SiteGenForm;
