import { useCallback, useRef, useState, FormEvent, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { v1 as uuidV1 } from "uuid";

import { Input } from "../inputs/Input";
import { FileUpload } from "../inputs/FileUpload";

import {
  media,
  TABLET_BREAKPOINT,
  DESKTOP_BREAKPOINT,
} from "../../utils/styles";
import { AddImage } from "../../constants/actionTypes";
import { Image } from "../../reducers/images/types";

export const SelectImage = () => {
  const dispatch = useDispatch();

  const imageUrlRef = useRef<any>(null);
  const imageFileInput = useRef<any>(null);

  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(!imageUrl);
  }, [imageUrl]);

  const onFileUpload = useCallback((event?: FormEvent<HTMLInputElement>) => {
    //@ts-ignore
    if (!event?.target.files || !event.target.files[0]) {
      return null;
    }

    //@ts-ignore
    const fileUrl = URL.createObjectURL(event.target.files[0]);
    console.log(fileUrl);
    setImageUrl(fileUrl);
  }, []);

  const onSubmit = useCallback(() => {
    let url: string | undefined = imageUrl || imageUrlRef?.current?.value;

    if (!url) {
      return null;
    }

    const image: Image = {
      id: uuidV1(),
      url,
      likes: 0,
      tags: [],
      likedByUser: false,
    };

    dispatch(AddImage.success(image));
    setImageUrl("");
  }, [imageUrl, imageUrlRef, dispatch]);

  return (
    <SelectImageWrapper>
      <Input inputRef={imageUrlRef} value={imageUrl} onChange={() => {}} />
      <ButtonsContainer>
        <FileUpload
          inputRef={imageFileInput}
          onChange={onFileUpload}
          accept={"image/*"}
        />
        <Submit onClick={onSubmit} disabled={isSubmitDisabled}>
          Add Image
        </Submit>
      </ButtonsContainer>
    </SelectImageWrapper>
  );
};

interface SubmitButton {
  disabled?: boolean;
}

const SelectImageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 50%;
  ${media(TABLET_BREAKPOINT)} {
    flex-direction: column;
  }
  ${media(DESKTOP_BREAKPOINT)} {
    max-width: 90%;
  }
`;

const Submit = styled.div<SubmitButton>`
  display: flex;
  align-itemvs: center;
  justify-content: center;
  border: 1px solid #353535;
  border-radius: 8px;
  color: #ffffff;
  background-color: #353535;
  min-width: fit-content;
  padding: 6px 14px;
  cursor: pointer;
  &:hover {
    color: #353535;
    background-color: #ffffff;
  }
  margin: 0 5px;
  opacity: ${({ disabled }) => (disabled ? ".8" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

const ButtonsContainer = styled.div`
  display: flex;
  ${media(TABLET_BREAKPOINT)} {
    margin-top: 15px;
  }
`;
