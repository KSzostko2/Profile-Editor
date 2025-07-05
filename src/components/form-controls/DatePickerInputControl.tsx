import { Controller } from 'react-hook-form'
import { DatePicker, DatePickerInput } from '@carbon/react'
import type { DatePickerInputProps, DatePickerProps } from '@carbon/react'
import type { Control, ControllerProps, FieldValues } from 'react-hook-form'

type DatePickerSelectedProps = Omit<
  DatePickerProps,
  'value' | 'onChange' | 'invalid' | 'invalidText' | 'datePickerType' | 'children'
>

type DatePickerInputSelectedProps = Pick<DatePickerInputProps, 'id' | 'labelText' | 'placeholder'>

type Props<T extends FieldValues> = Pick<ControllerProps<T>, 'name' | 'control'> &
  DatePickerSelectedProps &
  DatePickerInputSelectedProps & {
    control: Control<T>
  }

export function DatePickerInputControl<T extends FieldValues>(props: Props<T>) {
  const { control, name, id, labelText, ...rest } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState }) => {
        const invalid = fieldState.invalid
        const errorMessage = fieldState.error?.message

        return (
          <DatePicker
            allowInput
            datePickerType="single"
            // ?? addition prevents component from going to the uncontrolled state
            value={value ?? []}
            onChange={onChange}
            {...rest}
          >
            <DatePickerInput ref={ref} id={id} labelText={labelText} invalid={invalid} invalidText={errorMessage} />
          </DatePicker>
        )
      }}
    />
  )
}
