import { Body, Container, Header, HeaderText } from './styles';
import { Category, Item } from '../../types/Types';
import React, { useState } from 'react';
import { categories, items } from '../../data/data';

const Layout: React.FC = () => {
  const [list, setList] = useState<Item[]>(items);

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>

      <Body>
        <h1>Iniciando projeto</h1>
      </Body>
    </Container>
  );
}

export default Layout;