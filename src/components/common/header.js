import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
import {FaDumbbell} from 'react-icons/fa'
import { Link } from 'react-router-dom';



function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
      <div className="logo">
      <a href="#hero">  
          <FaDumbbell/>
        GYM</a>
        </div>
        <div style={{display:'flex',alignItems:'center'}} className="mobileHidden">
          <Anchor targetOffset="65">
            <a href="#hero" title="Home" >Home</a> &nbsp;
            <a href="#About" title="About" >About</a> &nbsp;
            <a href="#feature" title="Features">Features</a> &nbsp;
            <a href="#pricing" title="Pricing" >Pricing</a> &nbsp;
            <a href="#Training" title="Training" >Training</a>
          </Anchor>
        </div>
       <Link to='/SignUp'><Button type="primary" danger>Join Us</Button></Link> 
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#About" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#pricing" title="Pricing" />
            </Anchor>
          </Drawer>
        </div>
      </div>
     
    </div>
  );
}

export default AppHeader