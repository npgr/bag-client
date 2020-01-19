import React from 'react'
import { Container, Grid, Dimmer, Loader, Message } from 'semantic-ui-react'
import Card from 'components/Card'
import bagType from 'types/bag.t'
import { StyledGrid } from './styles'

const Home: React.FC = () => {
  const data: bagType[] = [
    { name: 'Pedro', bags: 5 },
    { name: 'Maria', bags: 5 }
  ]
  const loading = false
  const error = false
  return (
    <Container>
      <div style={{ height: '60px' }}></div>
      <StyledGrid columns={5}>
        {loading ? (
          <Dimmer active inverted style={{ marginTop: '50px' }}>
            <Loader size='medium'>Loading</Loader>
          </Dimmer>
        ) : error ? (
          <Message negative style={{ marginTop: '80px' }}>
            <Message.Header>
              An Error has ocurred during the load of Data !!!
            </Message.Header>
          </Message>
        ) : (
          data &&
          data.map(({ name, bags }) => (
            <Grid.Column key={name}>
              <Card key={name} name={name} bags={bags} />
            </Grid.Column>
          ))
        )}
      </StyledGrid>
    </Container>
  )
}

export default Home
