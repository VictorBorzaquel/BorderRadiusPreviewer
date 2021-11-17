import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native'
import { UISlider } from '../../components/UISlider';
import * as Clipboard from 'expo-clipboard';

import {
  Container,
  Content,
  ContentBackground,
  Display,
  DisplayButton,
  DisplayButtonText,
  DisplayText,
  DisplayWrapper,
  SelectSize,
  SelectText,
  Size,
  Title,
  UIInput,
  Wrapper
} from './styles';


export function Home() {
  const window = useWindowDimensions()
  const size = window.width / 2

  const [top, setTop] = useState(0)
  const [bottom, setBottom] = useState(0)
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [selectSize, setSelectSize] = useState(String(size.toFixed()))

  const result = `
border-top-left-radius: ${(Number(selectSize) * left).toFixed()}px;
border-top-right-radius: ${(Number(selectSize) * top).toFixed()}px;
border-bottom-left-radius: ${(Number(selectSize) * bottom).toFixed()}px;
border-bottom-right-radius: ${(Number(selectSize) * right).toFixed()}px;
`
  function handleCopy() {
    if (result !== '') {
      Clipboard.setString(result)
    }
  }

  return (
    <Container>
      <Title>Border Radius Previewer</Title>

      <Wrapper>
        <UISlider size={size} value={top} position="top" set={setTop} />
        <UISlider size={size} value={bottom} position="bottom" set={setBottom} />
        <UISlider size={size} value={left} position="left" set={setLeft} />
        <UISlider size={size} value={right} position="right" set={setRight} />

        <ContentBackground size={size}>
          <Content size={size} radius={{ top, bottom, left, right }} />
        </ContentBackground>
      </Wrapper>

      <SelectSize>
        <Size>
          <SelectText>Size</SelectText>
          <UIInput
            keyboardType='numeric'
            placeholder={String(size.toFixed())}
            value={selectSize}
            onChangeText={setSelectSize}
          />
        </Size>
      </SelectSize>

      <Display>
        <DisplayWrapper>
          <DisplayText>{result}</DisplayText>

          <DisplayButton onPress={handleCopy}>
            <DisplayButtonText>
              Copy
            </DisplayButtonText>
          </DisplayButton>
        </DisplayWrapper>
      </Display>
    </Container>
  );
}
