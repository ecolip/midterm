import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigation as NavigationIcon } from '@styled-icons/fluentui-system-filled';
import { CloseOutline } from '@styled-icons/evaicons-outline';

const NavItems = [
  'Home', 'Showcase', 'Services', 'Contact'
];

const MobileHead = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #F44336;
  width: 100%;
  height: 68px;
  padding: 0 32px;
  @media (min-width: 992px) {
    display: none;
  }
`;
const NavIcon = styled(NavigationIcon)` 
  width: 17px;
  height: 20px;
  margin-right: 32px;
  color: white;
  cursor: pointer;
`;
const MobileContainer = styled.div`
  display: ${props => props.displayBlock ? 'block' : 'none'};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
 
  @media (min-width: 992px) {
    display: none;
  }
`;
const CloseIcon = styled(CloseOutline)`
  display: flex;
  width: 20px;
  height: 25px;
  margin: 0 18px 32px auto;
  color: white;
  cursor: pointer;
`;
const MobileTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;
const Container = styled.div`
  display: ${(props) => props.displayBlock ? 'block' : 'none'};
  position: ${(props) => props.displayBlock ? 'absolute' : 'relative'};
  top: ${(props) => props.displayBlock ? '0' : 'none'};
  left: ${(props) => props.displayBlock ? '0' : 'none'};
  height: ${(props) => props.displayBlock ? '93%' : 'none'};

  padding: 94px 48px;
  background-color: #F44336;
  width: 300px;
  margin-right: 64px;
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
`;
const Title = styled.div`
  padding-bottom: 94px;
  font-size: 24px;
  color: white;
`;
const NavItem = styled.a`
  display: block;
  margin-bottom: 24px;
  font-size: 18px;
  color: white;
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: black;
  }
`;

function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  const renderNavItems = () => {
    const output = NavItems.map((item) => {
      return (
        <NavItem key={'nav_item_ '+ item }>{item}</NavItem>
    )
    });
    return output
  };

  return (
    <React.Fragment>
      <Container>
        <Title>DesignWorks</Title>
        {renderNavItems()}
      </Container>
      <MobileHead>
        <NavIcon onClick={() => { setOpenNav(true); }}/>
        <MobileTitle>DesignWorks</MobileTitle>
      </MobileHead>
      {openNav && 
        <MobileContainer displayBlock>
          <Container displayBlock h100={openNav}>
            <CloseIcon onClick={() => { setOpenNav(false); }}/>
            <Title>DesignWorks</Title>
            {renderNavItems()}
          </Container>
        </MobileContainer>
      }
    </React.Fragment>
  );
}

export default Navigation;
