export default function Checkbox({value, label, checked, onChange, className}) {
    return (
        <label className={className}>
            <input
                type="checkbox"
                value={value}
                checked={checked}
                onChange={onChange}
            />
            {label}
        </label>
    );
};