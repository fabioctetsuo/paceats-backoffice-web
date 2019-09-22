import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';
import WindowDimenstions from '../WindowDimensions';

const isSidebarOpened = (isMobile) => !isMobile;

const Layout = ({ children, isMobileSized }) => {
  const [sidebarOpen, setSidebarOpen] = useState(
    isSidebarOpened(isMobileSized),
  );

  useEffect(() => {
    setSidebarOpen(isSidebarOpened(isMobileSized));
  }, [isMobileSized]);

  return (
    <Container sidebarOpen={sidebarOpen}>
      {sidebarOpen && <Sidebar />}
      {children}
      {isMobileSized && <Navbar />}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isMobileSized: PropTypes.bool,
};

Layout.defaultProps = {
  isMobileSized: false,
};

export default WindowDimenstions(Layout);
