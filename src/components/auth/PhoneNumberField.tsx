type PhoneNumberFieldProps = {
  value: string;
  onChange: (phoneNumber: string) => void;
  onBlur?: () => void;
  error?: string;
  inputClassName?: string;
};

const PhoneNumberField = ({
  value,
  onChange,
  onBlur,
  error,
  inputClassName,
}: PhoneNumberFieldProps) => {
  const fieldClassName =
    inputClassName ??
    "w-full rounded-xl border border-gray-700 bg-[#1E1E1E] px-4 py-3 text-white placeholder:text-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-yellow-500/20";

  return (
    <div>
      <label className="mb-2 block text-sm text-gray-300">Phone Number</label>
      <input
        name="phoneNumber"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        placeholder="+923001234567"
        required
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        className={fieldClassName}
      />
      <p className="mt-2 text-xs text-gray-500">
        Enter your number with country code, e.g. +923001234567 or +12025550123
      </p>
      {error ? <p className="mt-2 text-xs text-red-400">{error}</p> : null}
    </div>
  );
};

export default PhoneNumberField;
