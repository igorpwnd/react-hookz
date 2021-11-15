import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';

export default () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>UseImperativeHandle</h1>
      <p>
        Através de useRef é possível capturar um elemento do Dom, preparando um
        componente filho para isso, é possível capturar um componente filho
        também. Sendo assim é possível também exportar funções para serem
        executadas do pai para o filho. (Não me vejo usando isso tão cedo, mas é
        interessante).
      </p>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      /**
       * Tentei fazer com !toggle mas não deu
       * setToggle(!toggle); */

      // Mas assim deu!
      setToggle((_toggle: boolean) => {
        return !_toggle;
      });
    },
  }));
  return (
    <React.Fragment>
      <button>Button From Child</button>
      {toggle && <span> Toggle</span>}
    </React.Fragment>
  );
});
