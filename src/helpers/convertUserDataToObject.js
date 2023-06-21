export default function convertUserDataToObject(user) {
  return {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
}
