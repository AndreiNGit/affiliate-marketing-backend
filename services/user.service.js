// services/user.service.js

const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');

const UserService = {
  createUser: async (data) => {
    const { name, username, mail, password, is_admin } = data;
    if (!username || !mail || !password) {
      throw new Error("Username, email, și parola sunt câmpuri obligatorii.");
    }
    // Asigură-te că parola este hash-uită înainte de a fi stocată
    const hashedPassword = await bcrypt.hash(password, 10);
    return await UserModel.create(name, username, mail, hashedPassword, is_admin);
  },

  getAllUsers: async () => {
    return await UserModel.findAll();
  },

  getUserById: async (id) => {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error("Utilizatorul nu a fost găsit.");
    }
    // Nu returna parola, chiar și hash-uită
    delete user.password;
    return user;
  },

  updateUser: async (id, data) => {
    const { name, username, mail, password, is_admin } = data;
    // Asigură-te că parola este hash-uită dacă este furnizată
    let hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
    const updatedUser = await UserModel.update(id, name, username, mail, hashedPassword, is_admin);
    if (!updatedUser) {
      throw new Error("Utilizatorul nu a fost găsit sau actualizat.");
    }
    // Nu returna parola, chiar și hash-uită
    delete updatedUser.password;
    return updatedUser;
  },

  deleteUser: async (id) => {
    const deletedUser = await UserModel.delete(id);
    if (!deletedUser) {
      throw new Error("Utilizatorul nu a fost găsit sau șters.");
    }
    return deletedUser;
  },
};

module.exports = UserService;
