import './Field.scss'

interface FieldProps {
  placeholder: string;
  type: "text" | "password" | "email";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Field: React.FC<FieldProps> = ({ placeholder, type, onChange, value }) => {
  return (
    <div className="field-wrapper">
      <div className="field-label">
        <img src="public/_.png" alt="icon" className="icon-input" />
        <label className="label-ui">{placeholder}</label>
      </div>
      <input
        className="input-ui"
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};
 
export default Field;