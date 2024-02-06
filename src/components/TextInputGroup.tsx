import React from "react";
import { TextInput } from "./TextInput";
import { TextLabel } from "./TextLabel";
import type { TextInputProps } from "./TextInput";
import type { TextLabelProps } from "./TextLabel";
import type { Expand } from "type-expand";

type InputGroupProps = Expand<
  TextInputProps &
    TextLabelProps & {
      errorMsg?: string;
    }
>;

export const TextInputGroup: React.FC<InputGroupProps> = (props) => {
  return (
    <div className="mb-2">
      <TextLabel {...props} />
      <TextInput {...props} />
      <p className="pt-1">
        {props.errorMsg && !props.isValid && (
          <span className="text-red-600 text-base">{props.errorMsg}</span>
        )}&nbsp;
      </p>
    </div>
  );
};
