import React from 'react';

interface State {
  action: string;
  other: string;
}

interface Props {
  id: number;
  productId: number;
  userId: number;
  description: string; 
}

class Order extends React.Component<Props, State> {
  render() {
    this.props.description;
    return (
      <div></div>
    )
  }
}


class Orders extends React.Component {
  render() {
    return (
      <Order id={1} productId={2} userId={3} description="test" />
    )
  }
}
