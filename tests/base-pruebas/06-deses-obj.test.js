import { usContext } from "../../src/base-pruebas/06-deses-obj";
describe("Pruebas en 06-deses-obj", () => {
  test("usContext debería obtener un objeto desestructurado", () => {
    const clave = "mayor"
    const edad = 50

    const testUsContext = usContext({ clave, edad });

    expect(testUsContext).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
