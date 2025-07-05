import {
  Button,
  DatePicker,
  DatePickerInput,
  FileUploader,
  Form,
  FormGroup,
  Stack,
  TextArea,
  TextInput,
} from '@carbon/react'
import './form.scss'
import { ArrowRight } from '@carbon/icons-react'

export function UserForm() {
  return (
    <Form aria-label="user form">
      <h1 className="heading">Create User</h1>
      <Stack gap={7}>
        <Stack gap={7} orientation="horizontal">
          <TextInput name="firstName" id="firstName" labelText="First Name" />
          <TextInput name="lastName" id="lastName" labelText="Last Name" />
        </Stack>

        <Stack gap={7} orientation="horizontal">
          <TextInput name="email" id="email" labelText="Email" type="email" />
          <TextInput name="phoneNumber" id="phoneNumber" labelText="Phone number" />
        </Stack>

        <DatePicker datePickerType="single">
          <DatePickerInput id="birthDate" labelText="Birthday" placeholder="mm/dd/yyyy" />
        </DatePicker>

        <FormGroup className="some-class" legendText="Avatar">
          <FileUploader
            name="avatar"
            id="avatar"
            role="button"
            labelDescription="Max file size is 10 MB. Only .jpg and .png files are supported."
            buttonLabel="Add file"
            buttonKind="primary"
            filenameStatus="edit"
            accept={['.jpg', '.png']}
            multiple={false}
            disabled={false}
            iconDescription="Dismiss file"
          />
        </FormGroup>

        <TextArea name="bio" id="bio" labelText="Bio" placeholder="Tell us more about yourself..." rows={4} />

        <Button className="submit-button" type="submit" renderIcon={ArrowRight}>
          Submit
        </Button>
      </Stack>
    </Form>
  )
}
