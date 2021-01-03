import PropTypes from "prop-types";
import React from "react";
import {
  Container,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

function Jumbotron({ children, direction = "row", ...restProps }) {
  return (
    <Item>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}
export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

// this looks dumb, can I do something about it?
Jumbotron.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};
Jumbotron.Container.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};
Jumbotron.Pane.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};
Jumbotron.Title.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};
Jumbotron.SubTitle.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};
Jumbotron.Image.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
};
