import { User } from "@models/Users";

test('it should be ok', () => {
  const user = new User()

  user.name = 'Gerson'

  expect(user.name).toEqual('Gerson');
});
