const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return false;
    } else {
      return true;
    }
  }
};

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
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

type ratingIp = { title: string; rating: number }[];
const filterByRating = (input: ratingIp): ratingIp => {
  const filterRating = input.filter((v) => v.rating >= 4);
  return filterRating;
};

type userType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}[];
const filterActiveUsers = (ip: userType): userType => {
  const activeUser = ip.filter((v) => v.isActive === true);
  return activeUser;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (ip: Book): string => {
  const { title, author, publishedYear, isAvailable } = ip;
  return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
    isAvailable ? "Yes" : "No"
  }`;
};

const getUniqueValues = (
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] => {
  const result: (string | number)[] = [];
  const both = [...arr1, ...arr2];

  for (let i = 0; i < both.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j] === both[i]) {
        found = true;
        break;
      }
    }

    if (!found) result.push(both[i]);
  }

  return result;
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  return products
    .map((p) => {
      const initialTotal = p.price * p.quantity;

      if (p.discount !== undefined) {
        const discountAmount = (initialTotal * p.discount) / 100;
        return initialTotal - discountAmount;
      }

      return initialTotal;
    })
    .reduce((acc, curr) => acc + curr, 0);
};
