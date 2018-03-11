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

export const FancyHeader = ({children, ...rest}) => (
    <FancyHeaderWrapper>
        <FancyHeaderText {...rest}>{children}</FancyHeaderText>
    </FancyHeaderWrapper>
)


/**
 * Layouts
 */

export const Card = styled.div`
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.10);
    padding: 2rem;
    border: 1px solid #E3F2FC;
`;