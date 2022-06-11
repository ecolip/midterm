import { useState } from 'react';
import Navigation from '../components/Navigation';
import Button from '../components/Button';
import Bed1 from '../imgs/bed1.svg';
import Dining1 from '../imgs/dining1.svg';
import Living1 from '../imgs/living1.svg';
import Living2 from '../imgs/living2.svg';
import styled from 'styled-components';
import api from '../utils/api';

const ContactFields = [
  'Name', 'Email', 'Message'
];

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: space-between;
    width: 992px;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: space-between;
    width: 1280px;
  }
`;
const Content = styled.div`
  padding: 84px 16px;
  @media (min-width: 992px) {
    padding: 80px 0;
  }
`;
const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 64px;
  font-weight: bold;
  color: black;
  text-shadow: 0px 2px 6px rgba(0,0,0,0.5);
`;
const SubTitle = styled.div`
  padding-bottom: 16px;
  font-size: 48px;
  font-weight: 500;
  color: #F44336;
  @media (min-width: 996px) {
    padding-bottom: 32px;
  }
`;
const ProductsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 71.78px;
`;
const Product = styled.img`
  padding-bottom: ${(props)=> props.pb1 ? '15.67px' : '0'};

  width: 100%;
  @media (min-width: 996px) {
    width: 49%;
    padding-bottom: 16px;
  }
`;
const Description = styled.p`
  padding-bottom: 6px;
  font-size: 16px;
  font-weight: 500;
`;
const SubDescription = styled.p`
  padding-bottom: 72px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 500;
`;
const FormContainer = styled.div`
  width: 100%;
`;
const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 16px;
  @media (min-width: 996px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Label = styled.div`
  width: 10%;
  font-weight: 600;
`;
const Input = styled.input`
  width: 85%;
  height: 40px;
  border: 1px solid #CCCCCC;
  padding: 0 10px;
  font-size: 16px;
`;

function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const getInputType = (item) => {
    switch (item) {
      case 'Email':
        return 'email';
      default:
        return 'text';
    }
  };

  const updateInput = (item, value) => {
    const valueStr = value.trim();
    if(valueStr.length >0){
      switch (item) {
        case 'Name':
          setName(value);
          break;
        case 'Email':
          setEmail(value);
          break;
        default:
          setMessage(value);
          break;
      }
    }
  };

  const renderContact = () => {
    const output = ContactFields.map((item) => {
      return (
        <FormGroup key={'contact_item_ '+ item }>
          <Label>{item}</Label>
          <Input type={getInputType(item)} onChange={(e)=>{ updateInput(item, e.target.value)}}/>
        </FormGroup>
      )
    });
    return output;
  };

  const sendMessage = () => {
    const timestamp = Date.now();
    if(name && email && message){
      const data = {
        name,
        email,
        message,
        timestamp
      };

      api.sendMessage(data).then((res) => {
        console.log(res);
        alert('Successfully send a message!');
      })
    }
  };

  return (
    <Container>
      <Navigation />
      <Content>
        <Title>Interior Design</Title>
        <SubTitle>Showcase.</SubTitle>
        <ProductsRow>
          <Product pb1 src={Bed1} alt='bed1'/>
          <Product pb1 src={Dining1} alt='dining1'/>
          <Product pb1 src={Living1} alt='Living1'/>
          <Product src={Living2} alt='Living2'/>
        </ProductsRow>
        <SubTitle>Services.</SubTitle>
        <Description>
          We are a interior design service that focus on what's best for your home and what's best for you!
        </Description>
        <SubDescription>
          Some text about our services - what we do and what we offer. We are lorem ipsum consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </SubDescription>
        <SubTitle>Contact.</SubTitle>
        <FormContainer>
          {renderContact()}
          <Button 
            orange 
            mt1
            cursorPoint 
            onClick={ () => { sendMessage(); }}
          >
          Send Message
          </Button>
        </FormContainer>
      </Content>
    </Container>
  );
}

export default Home;
