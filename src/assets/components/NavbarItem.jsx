import PropTypes from 'prop-types';
import React from 'react';

export default function NavbarItem({ logo }) {
  NavbarItem.propTypes = {
    logo: PropTypes.node.isRequired,
  };
  return <a href="/">{logo}</a>;
}
