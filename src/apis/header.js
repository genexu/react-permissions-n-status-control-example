export const basicHeader = {
  'content-type': 'application/json',
};

export const authorizationHeader = ({ token }) => ({
  Authorization: token,
});
