import './Field.scss'

interface FieldProps {
  placeholder: string;
  required?: boolean;
  icon?: string;
children?: React.ReactNode;
}

const Field: React.FC<FieldProps> = ({ placeholder, required = false, icon, children }) => {
  return (
    <div className="field-wrapper">
      <div className="field-label">
        {required && <img src={icon} alt="icon" className="icon-input" />}
        <label className="label-ui">
          {placeholder}
        </label>
      </div>
      <div>{children}</div>
    </div>
  );
};
 
export default Field;