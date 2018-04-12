/**
 * Inputs and TextAreas with React-Forms api build in.
 */
import React from "react";
import { Field } from "react-form";
import { ErrorLabel } from "./ui";

const Message = ({ message }) => <ErrorLabel>{message}</ErrorLabel>;

const makeTextWithErr = Component => props => (
  // Use the form field and your custom input together to create your very own input!
  <Field validate={props.validate} field={props.field}>
    {fieldApi => {
      // Note, it's important to pull off everything we dont want ending up on the <input>
      // thats why we pull off onChange, onBlur, and field
      // Note, the ...rest is important because it allows you to pass any
      // additional fields to the internal <input>.
      const { onChange, onBlur, field, validate, ...rest } = props;

      const { value, error, warning, success, setValue, setTouched } = fieldApi;

      return (
        <div>
          {error ? <Message message={error} /> : null}
          <Component
            {...rest}
            value={value || ""}
            onChange={e => {
              setValue(e.target.value);
              if (onChange) {
                onChange(e.target.value, e);
              }
            }}
            onBlur={e => {
              setTouched();
              if (onBlur) {
                onBlur(e);
              }
            }}
          />
        </div>
      );
    }}
  </Field>
);

export const InputWithErr = makeTextWithErr(props => <input {...props} />);
export const TextAreaWithErr = makeTextWithErr(props => (
  <textarea {...props} />
));
