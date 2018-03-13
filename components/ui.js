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
  padding: 4rem;
  border: 1px solid #e3f2fc;
`;

export const Clamp = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

/**
 * Buttons
 */

export const Button = styled.div`
  background: ${props => props.theme.skyblue.regular};
  border-radius: 4px;
  font-size: 14px;
  color: white;
  border: none;
  padding: 1rem;
  display: inline-block;
  cursor: pointer;
  font-weight: bolder;
  letter-spacing: 0.1rem;
  transition: all 0.2s ease-out;
  position: relative;

  &:hover {
    background: ${props => props.theme.skyblue.light};
    color: white;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    top: -1px;
    transition: all 0.2s ease-in;
  }
`;

export const ButtonLink = Button.withComponent("a").extend`
  text-decoration: none;
`;

export const WhiteTextBack = styled.div`
  background: white;
  padding: 1rem;
  display: inline-block;
  border-radius: 8px;

  * {
    margin: 0;
  }
`;
