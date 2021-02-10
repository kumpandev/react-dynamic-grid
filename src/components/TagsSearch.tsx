import React, { useState, FormEvent, useMemo, KeyboardEvent } from "react";
import styled from "styled-components";
import { v1 as uuidV1 } from "uuid";

import { Input } from "./inputs/Input";
import { CloseIcon } from "../icons/CloseIcon";
import { Tag } from "../reducers/tags/types";

interface Props {
  searchArr: Tag[];
  onSubmit(tag: Tag): void;
}

export const TagsSearch = ({ searchArr, onSubmit }: Props) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isInputFocused, setInputFocused] = useState<boolean>(false);

  const handleBlur = () => {
    setInputFocused(false);
  };

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };

  const handleReset = () => {
    setSearchValue("");
  };

  const handleSubmit = (tag: Tag) => {
    setSearchValue("");
    onSubmit(tag);
  };

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.code === "Enter" && searchValue.trim()) {
      handleSubmit({ id: uuidV1(), name: searchValue });
    }
  };

  const sortedArr = useMemo(() => {
    if (!searchValue.trim().length) {
      return [];
    }

    return searchArr.filter((tag: Tag) => tag.name.includes(searchValue));
  }, [searchArr, searchValue]);

  return (
    <Root>
      <InputContainer isInputFocused={isInputFocused}>
        <Input
          value={searchValue}
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyPress={onKeyPress}
        />
        <CloseIcon
          onClick={handleReset}
          color={isInputFocused ? "#6d6d6d" : ""}
        />
      </InputContainer>
      {searchValue && !!sortedArr.length && (
        <SearchResultsContainer>
          {sortedArr.map((tag: Tag, idx: number) => (
            <SearchResult key={idx} onClick={() => handleSubmit(tag)}>
              {tag.name}
            </SearchResult>
          ))}
        </SearchResultsContainer>
      )}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  width: 100%;
`;

interface InputContainerProps {
  isInputFocused: boolean;
}

const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  background: #eee;
  height: 32px;
  border-radius: 24px;
  background-color: ${({ isInputFocused }) =>
    isInputFocused ? "#fff" : "#eee"};
  padding: 4px 8px;
  border: 1px solid #d1d1d1;
`;

const SearchResultsContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #d1d1d1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  padding: 8px 0;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  min-height: 10px;
  max-height: 240px;
  z-index: 10;
  overflow-y: auto;
`;

const SearchResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 14px;
  padding: 8px 12px;
  &:hover {
    background: #eee;
  }
`;
