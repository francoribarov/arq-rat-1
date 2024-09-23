import { Data } from "./types/types";
import axios from "axios";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";

dotenv.config();
const expressPort = process.env.EXPRESS_PORT || 3000;

async function sendWords() {
  const data = generateRandomStuff();
  for (const element of data) {
    try {
      await axios.post(`http://localhost:${expressPort}/data`, element);
      console.log("Everything went well");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }
}

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

sendWords();
