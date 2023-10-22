

import { HtmlHTMLAttributes, ReactNode, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type CardDataProps = HtmlHTMLAttributes<HTMLParagraphElement> & {
  data: string;
};

const CardData = forwardRef<HTMLInputElement, CardDataProps>(
  ({ data, ...props }, ref) => {
    return (
      <>
        <p
          className={twMerge(
            `text-center dark:text-white`,
            props.className
          )}
        >
          {data}
        </p>
      </>
    );
  }
);

export default CardData;