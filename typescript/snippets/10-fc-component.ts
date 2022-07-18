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

const Order: React.FunctionComponent<Props> = (props) => {
  props.description;
  props.children;
  return (
    <div />
  )
};

const Order2 = (props: Props) => {
  // props.children;
  return (
    <div></div>
  )
};


class Orders extends React.Component {
  render() {
    return (
      <>
        <Order id={1} productId={2} userId={3} description="test" />
        <Order2 id={1} productId={2} userId={3} description="test" />
      </>
    )
  }
}
