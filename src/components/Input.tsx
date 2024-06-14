import { ChangeEvent, useRef, MutableRefObject, useEffect } from 'react';

export const Input = (): JSX.Element => {
  const inputNumber1 = useRef<HTMLInputElement>(null!);
  const inputNumber2 = useRef<HTMLInputElement>(null!);
  const inputNumber3 = useRef<HTMLInputElement>(null!);
  const inputNumber4 = useRef<HTMLInputElement>(null!);

  const inputHandler = (
    event: ChangeEvent<HTMLInputElement>,
    nextNumber: MutableRefObject<HTMLInputElement>,
  ): void => {
    if (event.target.value.length >= 4) {
      nextNumber.current.focus();
    }
  };

  useEffect(() => {
    inputNumber1.current.focus();
  }, []);

  return (
    <form>
      <input
        type="text"
        ref={inputNumber1}
        maxLength={4}
        onChange={(event) => {
          inputHandler(event, inputNumber1);
        }}
      />
      <input
        type="text"
        ref={inputNumber2}
        maxLength={4}
        onChange={(event) => {
          inputHandler(event, inputNumber2);
        }}
      />
      <input
        type="text"
        ref={inputNumber3}
        maxLength={4}
        onChange={(event) => {
          inputHandler(event, inputNumber3);
        }}
      />
      <input
        type="text"
        ref={inputNumber4}
        maxLength={4}
        onChange={(event) => {
          inputHandler(event, inputNumber4);
        }}
      />
    </form>
  );
};
