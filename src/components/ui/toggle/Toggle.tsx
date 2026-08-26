"use client";

type ToggleProps = {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  disabled?: boolean;
  className?: string;
  status?: string;
};

export default function Toggle({
  id,
  checked,
  onChange,
  label,
  status,
  disabled = false,
  className = "",
}: ToggleProps) {
  return (
    <label
      htmlFor={id}
      className={`toggle ${checked ? "toggle--active" : ""} ${
        disabled ? "toggle--disabled" : ""
      } ${className}`.trim()}
    >
      <span className="toggle__label">{label}</span>
      {status && <span className="toggle__status">{status}</span>}
      <input
        id={id}
        type="checkbox"
        className="toggle__input"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange(event.target.checked)}
      />

      <span className="toggle__track" aria-hidden="true">
        <span className="toggle__thumb" />
      </span>
    </label>
  );
}
