import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import {Container, Code, QRCode, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles'
import QRcode from '../../Images/qrcode.png'

export default function Menu({translateY}){
    return(
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0,200],
                outputRange: [0,1],
            }),
        }}>
            <Code>
                <QRCode source={QRcode} />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"/>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"/>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"/>
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff"/>
                    <NavText>Configurações do app</NavText>
                </NavItem>
                
                
                <SignOutButton onPress={()=>{}}>
                    <SignOutButtonText>SAIR DO APP</SignOutButtonText>
                </SignOutButton>
            </Nav>
        </Container>
    )
}