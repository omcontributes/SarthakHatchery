// Change these to your real numbers (country code + number, no + or spaces)
export const PHONE_PRIMARY = "917276236702";
export const PHONE_SECONDARY = "918788629009";
export const EMAIL = "katkadesarthak09@gmail.com";

export const telLink = (phone: string) => `tel:+${phone}`;

export const formatPhone = (phone: string) =>
  `+${phone.slice(0, 2)} ${phone.slice(2)}`;

export const whatsappLink = (message?: string) =>
  `https://wa.me/${PHONE_PRIMARY}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;