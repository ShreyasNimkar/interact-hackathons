import React from 'react';

interface Props {
  label?: string;
  val: string;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  maxLength: number;
  placeholder?: string;
  required?: boolean;
  styles?: React.CSSProperties;
  className?: string;
}

const TextArea = ({ label, val, setVal, maxLength, placeholder, required = false, styles, className }: Props) => {
  return (
    <div className="w-full">
      {label && (
        <div className="text-xs ml-1 font-medium uppercase text-gray-500">
          {label}
          {required && '*'} ({val.trim().length}/{maxLength})
        </div>
      )}
      <textarea
        value={val}
        onChange={el => setVal(el.target.value)}
        maxLength={maxLength}
        className={`w-full min-h-[80px] max-h-80 bg-transparent focus:outline-none border-[1px] border-gray-400 rounded-lg p-2 ${className}`}
        placeholder={placeholder}
        style={styles}
      />
    </div>
  );
};

export default TextArea;
