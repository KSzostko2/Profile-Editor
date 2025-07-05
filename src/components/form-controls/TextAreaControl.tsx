import { Controller } from 'react-hook-form'
import { TextArea } from '@carbon/react'
import type { TextAreaProps } from '@carbon/react'
import type { Control, ControllerProps, FieldValues } from 'react-hook-form'

type Props<T extends FieldValues> = Pick<ControllerProps<T>, 'name' | 'control'> &
  Omit<TextAreaProps, 'value' | 'onChange' | 'onBlur' | 'invalid' | 'invalidText'> & {
    control: Control<T>
  }

export function TextAreaControl<T extends FieldValues>(props: Props<T>) {
  const { control, name, id, labelText, ...rest } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
        const invalid = fieldState.invalid
        const errorMessage = fieldState.error?.message

        return (
          <TextArea
            ref={ref}
            id={id}
            name={name}
            labelText={labelText}
            onChange={onChange}
            onBlur={onBlur}
            // ?? addition prevents component from going to the uncontrolled state
            value={value ?? ''}
            invalid={invalid}
            invalidText={errorMessage}
            {...rest}
          />
        )
      }}
    />
  )
}
