const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "boolean") {
    if (value === true) {
      return false;
    } else {
      return true;
    }
  } else {
    return value * 10;
  }
};

const getLength = (value: string | any[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else if (typeof value === "string") {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const filterByRating = (
  arr: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return arr.filter((item) => item.rating >= 4);
};

const filterActiveUsers = (
  users: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  }[]
): {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (obj: Book) => {
  console.log(
    `Title: ${obj.title}, Author: ${obj.author}, Published: ${
      obj.publishedYear
    }, Available: ${obj.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];

  const includes = (value: string | number): boolean => {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    if (!includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
};
