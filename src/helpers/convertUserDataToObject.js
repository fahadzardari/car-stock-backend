export default function convertUserDataToObject(req) {
  return {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
}
