const userService = require("./userService");
const userRepository = require("../repositories/userRepository");

// Mock repository agar tidak menyentuh database/storage asli
jest.mock("../repositories/userRepository");

describe("User Service - Unit Test", () => {
  test("harus mengembalikan daftar user dengan sukses", async () => {
    const mockUsers = [{ id: 1, name: "Budi", email: "budi@example.com" }];
    userRepository.findAll.mockResolvedValue(mockUsers);

    const users = await userService.getAllUsers();
    expect(users).toEqual(mockUsers);
    expect(userRepository.findAll).toHaveBeenCalledTimes(1);
  });

  test("harus melempar error jika nama atau email tidak diisi saat registrasi", async () => {
    const invalidData = { name: "" };

    await expect(userService.registerUser(invalidData)).rejects.toThrow(
      "Nama dan email wajib diisi!",
    );
  });
});
