import styled from "styled-components";

export const VideoCardContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid;
  text-decoration: none;
  overflow: visible;
  cursor: pointer;
  width: 300px;
  height: 210px;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  border-radius: 0 20px 0 20px;
  background-repeat: no-repeat;
  opacity: 0.8;
  position: relative;
  margin: 30px 0px 30px 30px;
  transition: 0.3s ease-in-out;
  flex: 0 0 298px;
  z-index: 1;

  &:hover,
  &:focus {
    transform: scale(120%);
    z-index: 5;
    border-radius: 20px 0px 20px 0px;
    opacity: 1;
    /* box-shadow: 2px 2px 5px 2px #62d2f9; */
  }

  @media (max-width: 500px) {
    width: 300px;
    
   
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
  .titulo {
    display: flex;
    background:transparent;
    width: 100%;
    text-align: center;
    height: 60px;
    font-size:22px;
    font-weight:bold;
    color: snow;
    line-height:22px;
    transform: translateY(-130px);
    transition: transform linear 0.3s;
    transition-property: all;
    align-items: center;
    justify-content: center;
    opacity:0;

  }
  &:hover .titulo,
  &:focus .titulo {
    transform: translateY(0);
    border-radius: 0px 0 20px 0px;
    background:rgba(0, 0, 0, 0.8);
       filter:alpha(opacity=100);
      -moz-opacity:1;
 
    opacity: 1;
  }
  @media (max-width: 500px) {
    .titulo {
      opacity: 1;
      transform: translateY(0px);
      border-radius: 0px 0 20px 20px;
    }
  }
`;





export const VideoCardContainerPreview = styled.div`
  position: relative;
  top: 0;
  left: 0;
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 100%;
  height: 197px;

  border-radius: 10px;

  padding: 16px;
  outline: 0;
`;
export const ResponsiveIframe = styled.iframe`
  position: absolute;
  z-index: 500;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
