const fs = require("fs");

const styledDictionaryTheme = JSON.parse(
  fs.readFileSync("./styled-dictionary/styled-dictionary.json", "utf8")
);

const transformStyledDictionaryToChakra = (dictionary) => {
  const chakraTheme = {
    colors: {},
  };

  Object.keys(dictionary.colors).forEach((key) => {
    const color = dictionary.colors[key];

    if (color.value !== undefined) {
      chakraTheme.colors[key] = color.value;
    }

    if (color.value === undefined) {
      chakraTheme.colors[key] = Object.entries(color).reduce(
        (increment, color) => {
          return { ...increment, [color[0]]: color[1].value };
        },
        {}
      );
    }
  });

  console.log(chakraTheme);

  return chakraTheme;
};

fs.writeFileSync(
  "../figma-tokens/themes/chakra.ts",
  `
  export const chakraTheme = ${JSON.stringify(
    transformStyledDictionaryToChakra(styledDictionaryTheme)
  )};`
);
