import React from "react";

interface TextareaProps {
  name: string;
  id?: string;
  cols: number;
  rows: number;
  children?: React.ReactNode;
  className: string;
  defaultValue?: string;
  placeholder: string;
  rest: any;
}

const Textarea = ({
  name,
  id,
  cols,
  rows,
  children,
  className,
  defaultValue,
  placeholder,
  rest,
}: TextareaProps) => {
  return (
    <textarea
      {...rest}
      name={name}
      id={id}
      cols={cols}
      rows={rows}
      className={className}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
    //   {children}
    // </textarea>
  );
};

export default Textarea;
