import { Controller } from 'react-hook-form'
import { FileUploader, FormGroup } from '@carbon/react'
import type { FileUploaderProps, FormGroupProps } from '@carbon/react'
import type { Control, ControllerProps, FieldValues } from 'react-hook-form'
import { isFile } from '@/lib/isFile.ts'
import './file-upload-control.scss'

type Props<T extends FieldValues> = Pick<ControllerProps<T>, 'name' | 'control'> &
  Omit<FileUploaderProps, 'value' | 'onChange' | 'onBlur' | 'invalid' | 'invalidText'> &
  Pick<FormGroupProps, 'legendText'> & {
    control: Control<T>
  }

export function FileUploaderControl<T extends FieldValues>(props: Props<T>) {
  const { control, legendText, name, id, ...rest } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange }, fieldState }) => {
        const invalid = fieldState.invalid
        const errorMessage = fieldState.error?.message

        // for some reason the carbon library does not provide any specific types for onChange param and just uses any
        function handleChange(e: any) {
          const file = e?.target?.files?.[0]
          if (!isFile(file)) return

          onChange(file)
        }

        function handleDelete() {
          onChange(null)
        }

        return (
          <FormGroup legendText={legendText} invalid={invalid}>
            <FileUploader id={id} name={name} onChange={handleChange} onDelete={handleDelete} {...rest} />
            {invalid && errorMessage !== undefined ? <span className="error-text">{errorMessage}</span> : null}
          </FormGroup>
        )
      }}
    />
  )
}
