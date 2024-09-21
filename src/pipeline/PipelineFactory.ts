import { QueueFactory } from "./QueueFactory";
import { Pipeline } from "./Pipeline";
import {
  toLowercaseWithSpaces,
  toUppercase,
  replaceSpacesWithDots,
  filterWithRandomError,
  addOneToCount,
  updateEnum,
} from "../filters/filters";
import { Data, enumTest } from "../types/types";
import { faker } from "@faker-js/faker";

require("dotenv").config();

// construye una funcion de creacion de colas dependiendo de un parm se crea una funcion u otra (bull o rabbit)
const queueFactory = QueueFactory.getQueueFactory<Data>; //ojo que no la invoca aca si no dentro de la Pipeline

// Crear una nueva instancia de Pipeline usando Bull como backend de la cola
const pipeline = new Pipeline<Data>(
  [
    toLowercaseWithSpaces,
    //filterWithRandomError,
    toUppercase,
    replaceSpacesWithDots,
    addOneToCount,
    updateEnum,
  ],
  queueFactory
);

//se crea el listener para cuando un job termina
pipeline.on("finalOutput", (output: Data) => {
  console.log(`Salida final: ${output.word}, ${output.count}, ${output.test}`);
});

//se crea el listener para cuando un job da error
pipeline.on("errorInFilter", (error, data) => {
  console.error(`Error en el filtro: ${error}, Datos: ${data.data}`);
});

export const executePipeline = (input: Data) => {
  const randomData = generateRandomStuff();
  randomData.forEach((data) => pipeline.processInput(data));
  //pipeline.processInput(input);
};
function generateRandomStuff() {
  const dataToProcessArray: Data[] = [];

  const randomWords = Array.from({ length: 1000 }, () => {
    const word = faker.word.noun();
    return Math.random() < 0.5 ? word.toLowerCase() : word.toUpperCase();
  });

  const randomNumbers = Array.from({ length: 1000 }, () => faker.number.int());

  const fakeEnum = Array.from({ length: 1000 }, () =>
    Math.random() < 0.5 ? "TEST1" : "TEST2"
  );
  for (let i = 0; i < randomWords.length; i++) {
    const dataToProcess: Data = {
      word: randomWords[i],
      count: randomNumbers[i],
      test: fakeEnum[i],
    };
    dataToProcessArray.push(dataToProcess);
  }

  return dataToProcessArray;
}
