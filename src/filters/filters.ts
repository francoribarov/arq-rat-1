import { EnumValues } from "zod";
import { Data, enumTest } from "../types/types";

// Primer filtro: Convierte el input a minúsculas y añade un espacio entre cada letra.
export const toLowercaseWithSpaces = (input: Data): Data => {
  let result: string = input.word
    .split("") // Separa el string en un array de caracteres.
    .join(" "); // Une los caracteres con un espacio entre ellos.
  console.log(
    `Filtro toLowercaseWithSpaces,  input${JSON.stringify(
      input
    )}, output ${result} }`
  );
  return { ...input, word: result };
};

// Segundo filtro: Convierte el input a mayúsculas.
export const toUppercase = (input: Data): Data => {
  let result: string = input.word.toUpperCase(); // Convierte el string a mayúsculas.
  console.log(
    `Filtro toUppercase,  input${JSON.stringify(input)}, output ${result} }`
  );
  return { ...input, word: result };
};

// Tercer filtro: Reemplaza cada espacio en el input por un punto.
export const replaceSpacesWithDots = (input: Data): Data => {
  let result = input.word.replace(/ /g, "."); // Reemplaza cada espacio (' ') por un punto ('.').
  console.log(
    `Filtro replaceSpacesWithDots,  input${JSON.stringify(
      input
    )}, output ${result} }`
  );
  return { ...input, word: result };
};

// Suma 1 al número recibido
export const addOneToCount = (input: Data): Data => {
  let result: number = input.count + 1;
  console.log(
    `Filtro addOneToCount,  input${JSON.stringify(input)}, output ${result} }`
  );
  return { ...input, count: result };
};

export const updateEnum = (input: Data): Data => {
  console.log(`input.test: ${input.test}`);
  const newTestValue = input.test === "TEST1" ? "TEST2" : "TEST1";

  console.log(
    `Filtro updateEnum, input: ${JSON.stringify(
      input
    )}, output: ${newTestValue}`
  );

  return { ...input, test: newTestValue };
};

export const filterWithRandomError = (input: Data): Data => {
  if (Math.random() < 0.5) {
    // Probabilidad de 50% para generar un error
    throw new Error("Error aleatorio");
  }
  return { ...input };
};
