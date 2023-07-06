import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

import heroes from "../../src/data/heroes";

describe("Test en 08-imp-exp", () => {
  test("getHeroeById debería devolver un héroe por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debería retornar undefined sino existe ID", () => {
    const id = 15;
    const heroe = getHeroeById(id);

    expect(heroe).toBeFalsy();
  });

  test("getHeroesByOwner debería retornar los héroes de DC", () => {
    const owner = "DC";
    const heroesOwner = getHeroesByOwner(owner);
    expect(heroesOwner.length).toEqual(3);
    expect(heroesOwner).toEqual(heroes.filter(heroe => heroe.owner === owner))
    // expect(heroesOwner).toEqual([
    //   {
    //     id: 1,
    //     name: "Batman",
    //     owner: "DC",
    //   },
    //   {
    //     id: 3,
    //     name: "Superman",
    //     owner: "DC",
    //   },
    //   {
    //     id: 4,
    //     name: "Flash",
    //     owner: "DC",
    //   },
    // ]);
  });

  test("getHeroesByOwner debería retornar los héroes de Marvel", () => {
    const owner = "Marvel";
    const heroesOwner = getHeroesByOwner(owner);
    expect(heroesOwner.length).toEqual(2);
    expect(heroesOwner).toEqual(
      heroes.filter((heroe) => heroe.owner === owner)
    );

    // expect(heroesOwner).toEqual([
    //   {
    //     id: 2,
    //     name: "Spiderman",
    //     owner: "Marvel",
    //   },
    //   {
    //     id: 5,
    //     name: "Wolverine",
    //     owner: "Marvel",
    //   },
    // ]);
  });
});
