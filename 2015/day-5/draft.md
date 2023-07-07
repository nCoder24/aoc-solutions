# Property class

```js
class Property {
  constructor(validator);
  isSatisfied(string);
}
```

# isNiceString with Property collection

```js
const isNiceString = (string) => {

  const requiredProperties = [
    containsThreeVowels,
    containsOneDuplicateLetter,
    doesNotContainSpecialCombination,
  ];

  return requiredProperties.every((property) => property(string));
};
```

# Properties as regx

```js
const isNiceString = (string) => {
  const requiredProperties = [
    containsThreeVowels,
    containsOneDuplicateLetter,
    doesNotContainSpecialCombination,
  ];

  requiredProperties.every((property) => property.test(string));
};
```

# 3 ways to check a string is a nice string
- function calls joined with and(&).
- arrayOfFunctions(requiredProperties) and .every()
- Property Class with .test(string) method and .every()
- Property as regex and .every(property => property.test(string))
