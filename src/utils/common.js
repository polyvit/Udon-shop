export const buildUrl = (params) => {
  let url = "";
  Object.entries(params).forEach(([key, value], i) => {
    const sign = !i ? "?" : "&";
    url += `${sign}${key}=${value}`;
  });
  return url;
};

export const calcTotalPrice = (array) => {
  return Math.round(
    array.reduce((acc, obj) => obj.price * obj.count + obj.extras + acc, 0)
  );
};

export const sumItems = (array) => {
  return array.reduce((acc, obj) => obj.count + acc, 0);
};

export const validateInput = (value, name) => {
  switch (name) {
    case "email": {
      return value.includes("@");
    }
    case "password": {
      return value.length >= 6;
    }
    default: {
      return value.length > 0;
    }
  }
};

export const transformDate = (date) => {
  let formatter = new Intl.DateTimeFormat("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return formatter.format(new Date(date));
};

export const flatItemsArray = (array) => {
  let res = [];
  array.forEach((item) => res.push(item.name));
  return res.join(", ");
};
