import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.router = context.router;
  }

  handleClick(evt) {
    evt.preventDefault();
    this.router.navigate(this.props.name, this.props.params, this.props.options);
  }

  render() {
    const { children, name, params } = this.props;
    const className = this.router.isActive(name, params) ? 'active' : '';
    const href = this.router.buildUrl(name, params);
    return <a {...{ href, className }} onClick={this.handleClick} role="link" tabIndex={-1}>{children}</a>;
  }
}

Link.contextTypes = {
  router: PropTypes.shape({
    buildUrl: PropTypes.func.isRequired,
    isActive: PropTypes.func.isRequired,
  }).isRequired,
};

Link.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  params: PropTypes.shape({}),
  options: PropTypes.shape({}),
};

Link.defaultProps = {
  params: {},
  options: {},
};

export default Link;
