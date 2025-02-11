import styles from "./input.module.scss";

interface Iinput {
  value: string | number | undefined;
  onChange: (e: string) => void;
  onEnter?: () => void;
  isValid?: boolean;
  invalidMessage?: string;
  disabled?: boolean;
  beforeIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  max?: number;
  type?: string;
}

export default function Input(props: Iinput) {

  return (
    <div>
      <div
        className={`${styles.inputContainer} ${
          props.isValid == false && styles.invalidInput
        } ${props.disabled && styles.disabled}`}
      >
        {props.beforeIcon && (
          <div className={styles.beforeIcon}>{props.beforeIcon}</div>
        )}
        <input
          type={props.type}
          value={props.value}
          disabled={props.disabled}
          maxLength={props.max}
          max={props.max}
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
      {!props.isValid && props.invalidMessage && (
        <p className={styles.invalidMessage}>{props.invalidMessage}</p>
      )}
    </div>
  );
}
