export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Procreativestore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern store built with Next.js";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
export const signInDefaultValues = {
  email: "",
  password: "",
};
export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const shippingAddressDefaultValues = {
  fullName: "Endy Polanski",
  streetAddress: "123 Main St",
  city: "Paris",
  postalCode: "12345",
  country: "MAGA",
};
