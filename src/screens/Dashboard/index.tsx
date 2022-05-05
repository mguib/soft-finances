import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList,

} from './styles'

export interface DataListProps extends TransactionCardProps{
    id:string;
}

export function Dashboard(){
    const data: DataListProps[] = [
    {
        id: '1',
        type:'positive',
        title :"Desenvolvimento de site",
        amount:"R$ 12.000,00",
        category:{
            name: 'Vendas',
            icon:'dollar-sign'
        },
        date: "03/12/2021"
    },
    {
        id: '2',
        type:'negative',
        title :"Hamburgueria Pizzy",
        amount:"R$ 80,00",
        category:{
            name: 'Alimentação',
            icon:'coffee'
        },
        date: "12/11/2021"
    },
    {
        id: '3',
        type:'negative',
        title :"Aluguel do AP",
        amount:"R$ 1.200,00",
        category:{
            name: 'Casa',
            icon:'shopping-bag'
        },
        date: "11/07/2021"
    },
];
    

    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri:'https://avatars.githubusercontent.com/u/43528733?v=4'}}/>

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Guib</UserName>
                        </User>
                    </UserInfo>

                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HighlightCards
                
            >
                <HighlightCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Ultima entrada dia 13 de maio"
                />
                <HighlightCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.400,00"
                    lastTransaction="Ultima saída dia 3 de maio"
                />
                <HighlightCard
                    type="total"
                    title="Total"
                    amount="R$ 16.149,00"
                    lastTransaction="01 à 16 de maio"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>

                <TransactionList 
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem= {({ item }) => <TransactionCard data={item} />}
                    
                />                
                
            </Transactions>
            
        </Container>
    )
}
