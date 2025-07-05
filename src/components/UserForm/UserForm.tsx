import { Button, Column, Form, Grid, Stack } from '@carbon/react'
import './form.scss'
import { ArrowRight } from '@carbon/icons-react'
import { z } from 'zod/v4'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextInputControl } from '@/components/form-controls/TextInputControl.tsx'
import { TextAreaControl } from '@/components/form-controls/TextAreaControl.tsx'
import { DatePickerInputControl } from '@/components/form-controls/DatePickerInputControl.tsx'
import { zDatePicker } from '@/lib/zDatePicker.ts'
import { FileUploaderControl } from '@/components/form-controls/FileUploadControl/FileUploaderControl.tsx'
import { zFile } from '@/lib/zFile.ts'

const userFormSchema = z.object({
  firstName: z.string('Required').trim().min(1),
  lastName: z.string('Required').trim().min(1),
  email: z.email('Invalid email format').trim(),
  phoneNumber: z.e164('Invalid phone number'),
  birthDate: zDatePicker(),
  avatar: zFile(),
  bio: z.string('Required').trim().min(1),
})

type UserFormSchema = z.infer<typeof userFormSchema>

export function UserForm() {
  const resolver = zodResolver(userFormSchema)

  const hookForm = useForm<UserFormSchema>({
    resolver,
  })

  function handleSubmit(data: UserFormSchema) {
    console.log(data)
  }

  return (
    <Form aria-label="User form" noValidate onSubmit={hookForm.handleSubmit(handleSubmit)}>
      <h1 className="heading">Create User</h1>
      <Stack gap={7}>
        <Grid>
          <Column sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} xlg={{ span: 7 }}>
            <TextInputControl control={hookForm.control} name="firstName" id="firstName" labelText="First Name" />
          </Column>
          <Column className="last-grid-col" sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} xlg={{ span: 7 }}>
            <TextInputControl control={hookForm.control} name="lastName" id="lastName" labelText="Last Name" />
          </Column>
        </Grid>

        <Grid>
          <Column sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} xlg={{ span: 7 }}>
            <TextInputControl control={hookForm.control} name="email" id="email" labelText="Email" type="email" />
          </Column>
          <Column className="last-grid-col" sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} xlg={{ span: 7 }}>
            <TextInputControl control={hookForm.control} name="phoneNumber" id="phoneNumber" labelText="Phone number" />
          </Column>
        </Grid>

        <DatePickerInputControl
          control={hookForm.control}
          id="birthDate"
          name="birthDate"
          labelText="Birthday"
          placeholder="mm/dd/yyyy"
          maxDate={new Date()}
        />

        <FileUploaderControl
          control={hookForm.control}
          legendText="Avatar"
          name="avatar"
          id="avatar"
          role="button"
          labelDescription="Max file size is 10 MB. Only .jpg, .jpeg and .png files are supported."
          buttonLabel="Add file"
          buttonKind="primary"
          filenameStatus="edit"
          accept={['.jpg', '.jpeg', '.png']}
          multiple={false}
          iconDescription="Dismiss file"
        />

        <TextAreaControl
          control={hookForm.control}
          name="bio"
          id="bio"
          labelText="Bio"
          placeholder="Tell us more about yourself..."
          rows={4}
        />

        <Button className="submit-button" type="submit" renderIcon={ArrowRight}>
          Submit
        </Button>
      </Stack>
    </Form>
  )
}
