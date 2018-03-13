import styled from "styled-components";

/**
 * Typography
 */

const FancyHeaderWrapper = styled.h1`
  position: relative;
  display: inline-block;
  line-height: 1.15;

  &::after {
    content: "";
    display: block;
    position: absolute;
    background-color: ${props => props.theme.blue.light};
    height: 10px;
    width: 105%;
    left: 50%;
    bottom: -0px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    opacity: 0.1;
  }
`;

const FancyHeaderText = styled.span`
  font-weight: bolder;
  z-index: 2;
  position: relative;
  box-sizing: border-box;
  letter-spacing: 0rem;
`;

export const FancyHeader = ({ children, ...rest }) => (
  <FancyHeaderWrapper>
    <FancyHeaderText {...rest}>{children}</FancyHeaderText>
  </FancyHeaderWrapper>
);

/**
 * Layouts
 */

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border: 1px solid #e3f2fc;
`;

/**
 * Buttons
 */

export const Button = styled.div`
  background: ${props => props.theme.skyblue.regular};
  border-radius: 4px;
  font-size: 14px;
  color: #ffffff;
  border: none;
  padding: 2rem;
  display: inline-block;
  cursor: pointer;
  font-weight: bolder;
  letter-spacing: 0.1rem;

  &:hover {
    background: ${props => props.theme.skyblue.light};
  }
`;
