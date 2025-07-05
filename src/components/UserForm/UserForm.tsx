import {
  Button,
  Column,
  DatePicker,
  DatePickerInput,
  FileUploader,
  Form,
  FormGroup,
  Grid,
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
        <Grid>
          <Column sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} xlg={{ span: 7 }}>
            <TextInput name="firstName" id="firstName" labelText="First Name" />
          </Column>
          <Column className="last-grid-col" sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} xlg={{ span: 7 }}>
            <TextInput name="lastName" id="lastName" labelText="Last Name" />
          </Column>
        </Grid>

        <Grid>
          <Column sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} xlg={{ span: 7 }}>
            <TextInput name="email" id="email" labelText="Email" type="email" />
          </Column>
          <Column className="last-grid-col" sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} xlg={{ span: 7 }}>
            <TextInput name="phoneNumber" id="phoneNumber" labelText="Phone number" />
          </Column>
        </Grid>

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
