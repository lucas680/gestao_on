import { useEffect, useRef, useState } from "react";
import styles from "./select.module.scss";
import { ArrowBottomIcon, ArrowTopIcon } from "@/components/icons/icons";

export interface IselectItem {
  id: number;
  value: string;
}

interface ISelect {
  isMultiple?: boolean;
  disabled?: boolean;
  valuesSelected: IselectItem[];
  onChange: (values: IselectItem[]) => void;
  itens: IselectItem[];
  placeholder: string;
  isValid?: boolean;
  invalidMessage?: string;
  twoColumns?: boolean;
  width?: number;
}

export default function Select(props: ISelect) {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (selectRef) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);

  return (
    <div style={{ width: props.width }} ref={selectRef}>
      <div
        className={`${styles.container} ${isOpen ? styles.open : ""} ${
          props.isValid == false && styles.invalid
        } ${props.disabled && styles.disabled}`}
        onClick={() => !props.isMultiple && !props.disabled && setIsOpen(!isOpen)}
      >
        <div
          className={styles.select}
          onClick={() => props.isMultiple && !props.disabled && setIsOpen(!isOpen)}
        >
          {props.valuesSelected.length == 0 ||
          (props.valuesSelected.length == 1 &&
            props.valuesSelected[0].value == "") ||
          isOpen ? (
            <p>{props.placeholder}</p>
          ) : (
            <p>
              {props.valuesSelected.map((e, index) =>
                index == props.valuesSelected.length - 1
                  ? e.value
                  : `${e.value}, `
              )}
            </p>
          )}
          {isOpen ? <ArrowTopIcon /> : <ArrowBottomIcon />}
        </div>
        <div className={styles.dropdown}>
          {props.isMultiple && (
            <div
              className={`${styles.item}`}
              onClick={() => {
                if (props.valuesSelected.length == props.itens.length) {
                  props.onChange([]);
                } else {
                  props.onChange(props.itens);
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
                      const isSelected = props.valuesSelected.some(
                        (selected) => selected.id === item.id
                      );

                      return (
                        <div
                          key={`col1-${index}`}
                          className={`${styles.item}`}
                          onClick={() => {
                            if (props.isMultiple) {
                              if (isSelected) {
                                props.onChange(
                                  props.valuesSelected.filter(
                                    (value) => value.id !== item.id
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
                          {item.value}
                        </div>
                      );
                    })}
                </div>

                {/* Segunda Coluna */}
                <div className={styles.column}>
                  {props.itens
                    .slice(Math.ceil(props.itens.length / 2))
                    .map((item, index) => {
                      const isSelected = props.valuesSelected.some(
                        (selected) => selected.id === item.id
                      );

                      return (
                        <div
                          key={`col2-${index}`}
                          className={`${styles.item}`}
                          onClick={() => {
                            if (props.isMultiple) {
                              if (isSelected) {
                                props.onChange(
                                  props.valuesSelected.filter(
                                    (value) => value.id !== item.id
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
                          {item.value}
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              props.itens.map((item, index) => {
                const isSelected = props.valuesSelected.some(
                  (selected) => selected.id === item.id
                );
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
                              (value) => value.id !== item.id
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
                    {item.value}
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
