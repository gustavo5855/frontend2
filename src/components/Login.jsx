import React, { Component } from 'react'
import Content from './Content';
import Footer from './Footer';
import HeaderLogin from './HeaderLogin';
import ContentLogin from './ContentLogin';
import NavbarLogin from './NavbarLogin';

export default class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Content>
                    <NavbarLogin />
                    <HeaderLogin />
                    <ContentLogin/>
                    <Footer />
                </Content>
            </React.Fragment>
        )
    }
}
