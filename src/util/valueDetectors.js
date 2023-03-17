import DummyHeaders from "../DummyHeaders";

export function categoryDetector(value) {
  const chosenCategory = DummyHeaders.categories.find(
    (item) => item.name === value
  );
  const itemValue = chosenCategory.value;
  if (itemValue === "any") {
    return "";
  } else return `&category=${itemValue}`;
}

export function difficultyDetector(value) {
  const chosenDifficulty = DummyHeaders.difficulties.find(
    (item) => item.name === value
  );
  const itemValue = chosenDifficulty.value;
  if (itemValue === "any") {
    return "";
  } else return `&difficulty=${itemValue}`;
}

export function typeDetector(value) {
  const chosenType = DummyHeaders.types.find((item) => item.name === value);
  const itemValue = chosenType.value;
  if (itemValue === "any") {
    return "";
  } else return `&type=${itemValue}`;
}
