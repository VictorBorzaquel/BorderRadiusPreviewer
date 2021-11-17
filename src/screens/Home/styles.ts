import styled from "styled-components/native";

interface IContent {
  size: number;
  radius: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  }
}

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

export const Title = styled.Text`
  margin-bottom: 50px;
  width: 100%;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const Wrapper = styled.View``;

export const ContentBackground = styled.View<{ size: number }>`
  background-color: #DDD;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
`;

export const Content = styled.View<IContent>`
  flex: 1;
  background-color: #f0f;

  border-top-left-radius: ${({ radius, size }) => size * radius.left}px;
  border-top-right-radius: ${({ radius, size }) => size * radius.top}px;
  border-bottom-left-radius: ${({ radius, size }) => size * radius.bottom}px;
  border-bottom-right-radius: ${({ radius, size }) => size * radius.right}px;
`;

export const Display = styled.View`
  width: 100%;
  padding: 0 40px;
`;

export const DisplayWrapper = styled.View`
  background-color: #ddd;
  border-radius: 20px;
`;

export const DisplayText = styled.Text`
  padding: 0 20px;
  line-height: 24px;
`;

export const DisplayButton = styled.TouchableOpacity`
  background-color: #7cce7a;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const DisplayButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const SelectSize = styled.View`
  width: 100%;
  padding: 40px;
`;

export const Size = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const SelectText = styled.Text`
  padding-right: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const UIInput = styled.TextInput`
  border-width: 1px;
  width: 80%;
  height: 40px;
  padding: 0 10px;
`;
