import { useState } from "react";
import styles from "./select.module.scss";
import { ArrowBottomIcon, ArrowTopIcon } from "@/components/icons/icons";

interface ISelect {
  isMultiple?: boolean;
  valuesSelected: string[];
  onChange: (values: string[]) => void;
  itens: string[];
  placeholder: string;
  isValid?: boolean;
  invalidMessage?: string;
  twoColumns?: boolean;
  width?: number;
}

export default function Select(props: ISelect) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: props.width }}>
      <div
        className={`${styles.container} ${isOpen ? styles.open : ""} ${
          props.isValid == false && styles.invalid
        }`}
        onClick={() => !props.isMultiple && setIsOpen(!isOpen)}
      >
        <div
          className={styles.select}
          onClick={() => props.isMultiple && setIsOpen(!isOpen)}
        >
          {props.valuesSelected.length == 0 || isOpen ? (
            <p>{props.placeholder}</p>
          ) : (
            <p>
              {props.valuesSelected.map((e, index) =>
                index == props.valuesSelected.length - 1 ? e : `${e}, `
              )}
            </p>
          )}
          {isOpen ? <ArrowTopIcon /> : <ArrowBottomIcon />}
        </div>
        <div className={styles.dropdown}>
          {props.isMultiple && (
            <div
              className={`${styles.item} ${
                props.valuesSelected.length == props.itens.length
                  ? styles.selected
                  : ""
              }`}
              onClick={() => {
                if (props.valuesSelected.length == props.itens.length) {
                  props.onChange([]);
                } else {
                  props.onChange([...props.itens]);
                }
              }}
            >
              {props.isMultiple && (
                <input
                  type="checkbox"
                  checked={props.valuesSelected.length == props.itens.length}
                  readOnly
                  className={styles.checkbox}
                />
              )}
              Selecionar todos
            </div>
          )}
          <div>
            {props.twoColumns ? (
              <div className={styles.columns}>
                {/* Primeira Coluna */}
                <div className={styles.column}>
                  {props.itens
                    .slice(0, Math.ceil(props.itens.length / 2))
                    .map((item, index) => {
                      const isSelected = props.valuesSelected.includes(item);

                      return (
                        <div
                          key={`col1-${index}`}
                          className={`${styles.item} ${
                            isSelected ? styles.selected : ""
                          }`}
                          onClick={() => {
                            if (props.isMultiple) {
                              if (isSelected) {
                                props.onChange(
                                  props.valuesSelected.filter(
                                    (value) => value !== item
                                  )
                                );
                              } else {
                                props.onChange([...props.valuesSelected, item]);
                              }
                            } else {
                              props.onChange([item]);
                            }
                          }}
                        >
                          {props.isMultiple && (
                            <input
                              type="checkbox"
                              checked={isSelected}
                              readOnly
                              className={styles.checkbox}
                            />
                          )}
                          {item}
                        </div>
                      );
                    })}
                </div>

                {/* Segunda Coluna */}
                <div className={styles.column}>
                  {props.itens
                    .slice(Math.ceil(props.itens.length / 2))
                    .map((item, index) => {
                      const isSelected = props.valuesSelected.includes(item);

                      return (
                        <div
                          key={`col2-${index}`}
                          className={`${styles.item} ${
                            isSelected ? styles.selected : ""
                          }`}
                          onClick={() => {
                            if (props.isMultiple) {
                              if (isSelected) {
                                props.onChange(
                                  props.valuesSelected.filter(
                                    (value) => value !== item
                                  )
                                );
                              } else {
                                props.onChange([...props.valuesSelected, item]);
                              }
                            } else {
                              props.onChange([item]);
                            }
                          }}
                        >
                          {props.isMultiple && (
                            <input
                              type="checkbox"
                              checked={isSelected}
                              readOnly
                              className={styles.checkbox}
                            />
                          )}
                          {item}
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              props.itens.map((item, index) => {
                const isSelected = props.valuesSelected.includes(item);

                return (
                  <div
                    key={index}
                    className={`${styles.item} ${
                      isSelected ? styles.selected : ""
                    }`}
                    onClick={() => {
                      if (props.isMultiple) {
                        if (isSelected) {
                          props.onChange(
                            props.valuesSelected.filter(
                              (value) => value !== item
                            )
                          );
                        } else {
                          props.onChange([...props.valuesSelected, item]);
                        }
                      } else {
                        props.onChange([item]);
                      }
                    }}
                  >
                    {props.isMultiple && (
                      <input
                        type="checkbox"
                        checked={isSelected}
                        readOnly
                        className={styles.checkbox}
                      />
                    )}
                    {item}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      {!props.isValid && props.invalidMessage && (
        <p className={styles.invalidMessage}>{props.invalidMessage}</p>
      )}
    </div>
  );
}
