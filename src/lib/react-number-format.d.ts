declare module 'react-number-format' {
  import * as React from 'react';

  interface NumberFormatProps {
    value?: string | number;
    format: string;
    mask?: string | ((value: string) => string);
    customInput?: React.ElementType;
    placeholder?: string;
    onValueChange?: (values: { value: string; formattedValue: string }) => void;
    [key: string]: any;
  }

  const NumberFormat: React.FC<NumberFormatProps>;

  export default NumberFormat;
}
