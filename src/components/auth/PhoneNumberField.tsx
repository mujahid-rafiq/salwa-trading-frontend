import { useState } from "react";
import { COUNTRY_DIAL_CODES, POPULAR_COUNTRY_ISO } from "../../constants/countryDialCodes";
import { toE164PhoneNumber } from "../../lib/phone";

type PhoneNumberFieldProps = {
  value: string;
  onChange: (e164: string) => void;
  onBlur?: () => void;
  error?: string;
  inputClassName?: string;
  defaultIso?: string;
};

const PhoneNumberField = ({
  value,
  onChange,
  onBlur,
  error,
  inputClassName,
  defaultIso = "PK",
}: PhoneNumberFieldProps) => {
  const [iso, setIso] = useState(defaultIso);
  const [nationalNumber, setNationalNumber] = useState("");
  const popularCountries = COUNTRY_DIAL_CODES.filter((country) => POPULAR_COUNTRY_ISO.includes(country.iso));
  const otherCountries = COUNTRY_DIAL_CODES.filter((country) => !POPULAR_COUNTRY_ISO.includes(country.iso));

  const fieldClassName =
    inputClassName ??
    "w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20";

  const emitChange = (nextIso: string, nextNational: string) => {
    const country = COUNTRY_DIAL_CODES.find((item) => item.iso === nextIso);
    onChange(toE164PhoneNumber(country?.dial ?? "92", nextNational));
  };

  return (
    <div>
      <label className="mb-2 block text-sm text-gray-300">Phone Number</label>
      <div className="flex gap-2">
        <select
          aria-label="Country code"
          value={iso}
          onChange={(event) => {
            const nextIso = event.target.value;
            setIso(nextIso);
            emitChange(nextIso, nationalNumber);
          }}
          onBlur={onBlur}
          className={`${fieldClassName} w-[8.75rem] shrink-0 pr-2 sm:w-[10.5rem]`}
        >
          {popularCountries.map((country) => (
            <option key={country.iso} value={country.iso}>
              {country.iso} +{country.dial}
            </option>
          ))}
          <option disabled>──────────</option>
          {otherCountries.map((country) => (
            <option key={country.iso} value={country.iso}>
              {country.name} (+{country.dial})
            </option>
          ))}
        </select>
        <input
          name="phoneNumber"
          type="tel"
          inputMode="tel"
          autoComplete="tel-national"
          placeholder="300 1234567"
          required
          value={nationalNumber}
          onChange={(event) => {
            const nextNational = event.target.value;
            setNationalNumber(nextNational);
            emitChange(iso, nextNational);
          }}
          onBlur={onBlur}
          className={fieldClassName}
        />
      </div>
      <p className="mt-2 text-xs text-gray-500">
        Select your country code, then enter the rest of your number.
        {value ? ` Saved as ${value}.` : ""}
      </p>
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  );
};

export default PhoneNumberField;
