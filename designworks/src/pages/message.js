import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../utils/api';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const Title = styled.div`
  padding-top: 32px;
  font-size: 32px;
  padding-bottom: 32px;
  font-weight: bold;
`;
const Table = styled.table`
  width: 100%;
  border:1px solid black;
`;
const Tr = styled.tr`
`;
const Thead = styled.thead`
`;
const Tbody = styled.tbody`
`;
const Th = styled.th`
  border:1px solid black;
`;
const Td = styled.td`
  cursor: ${(props)=> props.isCursor ? 'pointer' : 'none'};
  background-color: ${(props)=> props.isCursor ? 'black' : 'none'};
  color: ${(props)=> props.isCursor ? 'white' : 'black'};
  border-radios: ${(props)=> props.isCursor ? '2px' : 'none'};

  text-align: center;
  border:1px solid black;
`;

function Message() {
  const [message, setMessage] = useState(null);

  const getMessage = () => {
    api.getMessages().then((res) => {
      setMessage(res);
    })
  };

  const RemoveMessage = (id) => {
    api.deleteMessage(id).then((res) => {
      getMessage();
    })
  };

  const renderMessages = () => {
    const output = message.map((item) => {
      return (
        <Tr key={'message- '+ item.id}>
          <Td>{item.name}</Td>
          <Td>{item.email}</Td>
          <Td>{item.message}</Td>
          <Td>{item.timestamp}</Td>
          <Td isCursor onClick={()=>{RemoveMessage(item.id)}}>Delete</Td>
        </Tr>
      )
    } );
    return output;
  };

  useEffect(()=>{
    getMessage();
  }, [])


  return (
    <Container>
      <Title>Message List</Title>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Message</Th>
            <Th>Timestamp</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {message && renderMessages()}
        </Tbody>
      </Table>
    </Container>
  );
}

export default Message;
