import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debería retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo debería retornar un objeto", () => {
    const nombre = "javier";

    const testUsuario = {
      uid: "ABC567",
      username: nombre,
    };

    const testUsusarioActivo = getUsuarioActivo(nombre);

    expect(testUsuario).toEqual(testUsusarioActivo);
  });

  test("getUsuarioActivo debería retornar un objeto", () => {
    const nombre = "javier";

    const testUsuario = {
      uid: "ABC567",
      username: nombre,
    };

    expect(testUsuario).toEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
