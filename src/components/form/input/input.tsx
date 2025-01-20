import styles from "./input.module.scss";

interface Iinput {
  value: string;
  onChange: (e: string) => void;
  onEnter?: () => void;
  isValid?: boolean;
  invalidMessage?: string;
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
}

export default function Input(props: Iinput) {
  return (
    <div>
      <div
        className={`${styles.inputContainer} ${
          props.isValid == false && styles.invalidInput
        }`}
      >
        {props.beforeIcon && (
          <div className={styles.beforeIcon}>{props.beforeIcon}</div>
        )}
        <input
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && props.onEnter) {
              props.onEnter();
            }
          }}
        />
        {props.afterIcon && (
          <div className={styles.afterIcon}>{props.afterIcon}</div>
        )}
      </div>
      {!props.isValid && (
        <p className={styles.invalidMessage}>{props.invalidMessage}</p>
      )}
    </div>
  );
}
