import { FormEvent, Ref } from "react";
import { v1 as uuidV1 } from "uuid";
import styled from "styled-components";

type Props = {
  inputRef?: Ref<any>;
  value?: string;
  onChange?: (event: FormEvent<HTMLInputElement>) => any;
  onBlur?: (event: FormEvent<HTMLInputElement>) => any;
  onFocus?: (event: FormEvent<HTMLInputElement>) => any;
  [key: string]: any;
};

export const FileUpload = (props: Props) => {
  const { id = uuidV1(), label, inputRef } = props;

  return (
    <FileUploadWrapper>
      <UploadButton htmlFor={id}>{label || "Select File"}</UploadButton>
      <StyledInput id={id} type={"file"} ref={inputRef} {...props} />
    </FileUploadWrapper>
  );
};

const FileUploadWrapper = styled.div`
  min-width: fit-content;
  margin: 0 5px;
`;

const UploadButton = styled.label`
  display: flex;
  align-itemvs: center;
  justify-content: center;
  border: 1px solid #353535;
  border-radius: 8px;
  color: #353535;
  background-color: #ffffff;
  min-width: fit-content;
  padding: 6px 14px;
  cursor: pointer;
  &: hover {
    color: #ffffff;
    background-color: #353535;
  }
`;

const StyledInput = styled.input`
  display: none;
`;
