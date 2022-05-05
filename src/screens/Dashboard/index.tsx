import React from "react";

import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

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

} from './styles'

export function Dashboard(){
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
                
                <TransactionCard/>
            </Transactions>
            
        </Container>
    )
}
