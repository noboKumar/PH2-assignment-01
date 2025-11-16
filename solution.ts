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


