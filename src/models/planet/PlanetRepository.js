export default class UserRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  getUserById(id) {
    return this.users.find((user) => user.id == id);
  }

  addUser(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id);
  }

  update(id, name, email) {
    const user = this.getUserById(id);

    if (user) {
      user.name = name;
      user.email = email;
    }

    return user;
  }
}
