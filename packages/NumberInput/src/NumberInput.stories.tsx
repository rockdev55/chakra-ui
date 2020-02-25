import { chakra } from "@chakra-ui/system"
import { action } from "@storybook/addon-actions"
import React from "react"
import { useNumberInput } from "."
import {
  BaseDecrementStepper,
  BaseIncrementStepper,
  BaseNumberInput,
  BaseNumberInputField,
  BaseStepperGroup,
} from "./NumberInput.base"

export default {
  title: "NumberInput",
  decorators: [
    (story: Function) => (
      <chakra.div maxW="400px" mt="40px" mx="auto">
        {story()}
      </chakra.div>
    ),
  ],
}

export function NumberInputHook() {
  const {
    getInputProps,
    getIncrementButtonProps,
    getDecrementButtonProps,
    valueAsNumber,
  } = useNumberInput({
    step: 0.01,
    defaultValue: 1.53,
    min: -4,
    max: 6,
    precision: 4,
    onChange: action("onChange"),
  })
  return (
    <div>
      <div>current: {valueAsNumber}</div>
      <button tabIndex={-1} {...getIncrementButtonProps()}>
        +
      </button>
      <input {...getInputProps()} />
      <button tabIndex={-1} {...getDecrementButtonProps()}>
        -
      </button>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: "relative",
  },
  field: {
    backgroundColor: "black",
    color: "white",
    width: "100%",
    padding: 10,
  },
  group: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: 0,
    right: 0,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
  },
}

export const Base = () => (
  <BaseNumberInput style={styles.root}>
    <BaseNumberInputField style={styles.field} />
    <BaseStepperGroup style={styles.group}>
      <BaseIncrementStepper children="+" style={styles.button} />
      <BaseDecrementStepper children="-" style={styles.button} />
    </BaseStepperGroup>
  </BaseNumberInput>
)
