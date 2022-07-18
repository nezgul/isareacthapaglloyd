const makeGetUser = async (): Promise<unknown> => {
  const response = await fetch(`${process.env.REACT_APP_API}/users`, { method: 'GET' });
  return response.json();
}

export {
  makeGetUser,
};