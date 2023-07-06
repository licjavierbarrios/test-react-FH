import { string } from "prop-types";
import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test en 11-async', () => { 
  test("getImagen debería retornar un URL de la imagen", async() => {
    const url = await getImagen();
  
    expect(typeof url).toBe("string");
  });
 })