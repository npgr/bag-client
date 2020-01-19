import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import bagType from 'types/bag.t'

const CardBag: React.FC<bagType> = ({ name, bags }) => (
  <Card>
    <Card.Content>
      <Icon name='user' />
      <Card.Header style={{ fontSize: '1.1em' }}>{name}</Card.Header>
    </Card.Content>
    <Card.Content extra>
      <strong>Bags </strong>
      {bags}
    </Card.Content>
  </Card>
)

export default CardBag
