import { Button, Column, Form, Grid, Heading, InlineLoading, Stack } from '@carbon/react'
import './form.scss'
import { ArrowRight } from '@carbon/icons-react'
import { z } from 'zod/v4'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import type { CreateUserRequestBody } from '@/api/user/useCreateUser.tsx'
import { TextInputControl } from '@/components/form-controls/TextInputControl.tsx'
import { TextAreaControl } from '@/components/form-controls/TextAreaControl.tsx'
import { DatePickerInputControl } from '@/components/form-controls/DatePickerInputControl.tsx'
import { zDatePicker } from '@/lib/zDatePicker.ts'
import { FileUploaderControl } from '@/components/form-controls/FileUploadControl/FileUploaderControl.tsx'
import { zFile } from '@/lib/zFile.ts'
import { useCreateUser } from '@/api/user/useCreateUser.tsx'
import { fileToBase64 } from '@/lib/fileToBase64.ts'

const userFormSchema = z.object({
  firstName: z.string('Required').trim().min(1),
  lastName: z.string('Required').trim().min(1),
  email: z.email('Invalid email format').trim(),
  phoneNumber: z.e164('Please enter a valid phone number with country code (e.g. +48123456789)'),
  birthDate: zDatePicker(),
  avatar: zFile(),
  bio: z.string('Required').trim().min(1),
})

type UserFormSchema = z.infer<typeof userFormSchema>

async function mapToCreationApi(formData: UserFormSchema): Promise<CreateUserRequestBody> {
  const avatarBase64 = await fileToBase64(formData.avatar)

  return {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phoneNumber: formData.phoneNumber,
    birthDate: formData.birthDate[0].toISOString(),
    avatarRawBase64: avatarBase64,
    bio: formData.bio,
  }
}

export function UserForm() {
  const navigate = useNavigate()
  const createUser = useCreateUser()

  const resolver = zodResolver(userFormSchema)
  const hookForm = useForm<UserFormSchema>({
    resolver,
  })

  async function handleSubmit(data: UserFormSchema) {
    const mappedData = await mapToCreationApi(data)

    createUser.mutate(mappedData, {
      onSuccess: () => {
        navigate({ to: '/profile' })
      },
    })
  }

  return (
    <Form aria-label="User form" noValidate onSubmit={hookForm.handleSubmit(handleSubmit)}>
      <Heading className="heading">Create User</Heading>
      <Stack gap={7}>
        <Grid>
          <Column sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} max={{ span: 7 }}>
            <TextInputControl control={hookForm.control} name="firstName" id="firstName" labelText="First Name" />
          </Column>
          <Column className="last-grid-col" sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} max={{ span: 7 }}>
            <TextInputControl control={hookForm.control} name="lastName" id="lastName" labelText="Last Name" />
          </Column>
        </Grid>

        <Grid>
          <Column sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} max={{ span: 7 }}>
            <TextInputControl control={hookForm.control} name="email" id="email" labelText="Email" type="email" />
          </Column>
          <Column className="last-grid-col" sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 6 }} max={{ span: 7 }}>
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

        {createUser.isPending || createUser.isSuccess ? (
          <div className="inline-loading-container">
            <InlineLoading
              status={createUser.isSuccess ? 'finished' : 'active'}
              description={createUser.isSuccess ? 'Created!' : 'Creating'}
              iconDescription="Creating user..."
              successDelay={1000}
            />
          </div>
        ) : (
          <Button className="submit-button" type="submit" renderIcon={ArrowRight}>
            Submit
          </Button>
        )}
      </Stack>
    </Form>
  )
}
