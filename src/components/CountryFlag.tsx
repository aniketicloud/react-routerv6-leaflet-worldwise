import { FC } from "react";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

interface CountryFlagProps {
  countryCode: string;
}

export const CountryFlag: FC<CountryFlagProps> = ({ countryCode }) => {
  polyfillCountryFlagEmojis();
  return <>{countryCode}</>;
};
