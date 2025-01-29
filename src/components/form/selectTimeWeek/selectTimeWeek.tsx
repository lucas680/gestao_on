import { useEffect, useRef, useState } from "react";
import styles from "./selectTimeWeek.module.scss";
import { ArrowBottomIcon, ArrowTopIcon } from "@/components/icons/icons";
import { IselectItem } from "../select/select";

interface ISelect {
  disabled?: boolean;
  valuesSelected: IselectItem[];
  onChange: (values: IselectItem[]) => void;
  placeholder: string;
  isValid?: boolean;
  invalidMessage?: string;
}

export default function SelectTimeWeek(props: ISelect) {
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

  const [dayOpen, setDayOpen] = useState<number | undefined>();
  const week = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  const itensWeek: IselectItem[][] = [
    [
      { id: 1, value: "1° aula - 7:00 às 7:55" },
      { id: 2, value: "2° aula - 7:55 às 8:50" },
      { id: 3, value: "3° aula - 9:10 às 10:00" },
      { id: 4, value: "4° aula - 10:00 às 10:50" },
      { id: 5, value: "5° aula - 10:50 às 11:40" },
      { id: 6, value: "6° aula - 13:00 às 13:55" },
      { id: 7, value: "7° aula - 13:55 às 14:50" },
      { id: 8, value: "8° aula - 15:10 às 16:00" },
      { id: 9, value: "9° aula - 16:00 às 16:50" },
      { id: 10, value: "10° aula - 16:50 às 17:40" },
    ],
    [
      { id: 11, value: "1° aula - 7:00 às 7:55" },
      { id: 12, value: "2° aula - 7:55 às 8:50" },
      { id: 13, value: "3° aula - 9:10 às 10:00" },
      { id: 14, value: "4° aula - 10:00 às 10:50" },
      { id: 15, value: "5° aula - 10:50 às 11:40" },
      { id: 16, value: "6° aula - 13:00 às 13:55" },
      { id: 17, value: "7° aula - 13:55 às 14:50" },
      { id: 18, value: "8° aula - 15:10 às 16:00" },
      { id: 19, value: "9° aula - 16:00 às 16:50" },
      { id: 20, value: "10° aula - 16:50 às 17:40" },
    ],
    [
      { id: 21, value: "1° aula - 7:00 às 7:55" },
      { id: 22, value: "2° aula - 7:55 às 8:50" },
      { id: 23, value: "3° aula - 9:10 às 10:00" },
      { id: 24, value: "4° aula - 10:00 às 10:50" },
      { id: 25, value: "5° aula - 10:50 às 11:40" },
      { id: 26, value: "6° aula - 13:00 às 13:55" },
      { id: 27, value: "7° aula - 13:55 às 14:50" },
      { id: 28, value: "8° aula - 15:10 às 16:00" },
      { id: 29, value: "9° aula - 16:00 às 16:50" },
      { id: 30, value: "10° aula - 16:50 às 17:40" },
    ],
    [
      { id: 31, value: "1° aula - 7:00 às 7:55" },
      { id: 32, value: "2° aula - 7:55 às 8:50" },
      { id: 33, value: "3° aula - 9:10 às 10:00" },
      { id: 34, value: "4° aula - 10:00 às 10:50" },
      { id: 35, value: "5° aula - 10:50 às 11:40" },
      { id: 36, value: "6° aula - 13:00 às 13:55" },
      { id: 37, value: "7° aula - 13:55 às 14:50" },
      { id: 38, value: "8° aula - 15:10 às 16:00" },
      { id: 39, value: "9° aula - 16:00 às 16:50" },
      { id: 40, value: "10° aula - 16:50 às 17:40" },
    ],
    [
      { id: 41, value: "1° aula - 7:00 às 7:55" },
      { id: 42, value: "2° aula - 7:55 às 8:50" },
      { id: 43, value: "3° aula - 9:10 às 10:00" },
      { id: 44, value: "4° aula - 10:00 às 10:50" },
      { id: 45, value: "5° aula - 10:50 às 11:40" },
      { id: 46, value: "6° aula - 13:00 às 13:55" },
      { id: 47, value: "7° aula - 13:55 às 14:50" },
      { id: 48, value: "8° aula - 15:10 às 16:00" },
      { id: 49, value: "9° aula - 16:00 às 16:50" },
      { id: 50, value: "10° aula - 16:50 às 17:40" },
    ],
  ];

  return (
    <div ref={selectRef}>
      <div
        className={`${styles.container} ${isOpen ? styles.open : ""} ${
          props.isValid == false && styles.invalid
        } ${props.disabled && styles.disabled}`}
      >
        <div
          className={styles.select}
          onClick={() => !props.disabled && setIsOpen(!isOpen)}
        >
          <p>{props.placeholder}</p>
          {isOpen ? <ArrowTopIcon /> : <ArrowBottomIcon />}
        </div>
        <div className={styles.dropdown}>
          {itensWeek.map((itens, index) => {
            const isOpen = dayOpen == index;
            return (
              <>
                <div className={styles.item} onClick={() => setDayOpen(dayOpen == index ? undefined : index)}>
                  {week[index]}
                </div>
                <div className={`${styles.weekItem} ${isOpen && styles.weekOpen}`}>
                  {itens.map((item, index) => {
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
                          if (isSelected) {
                            props.onChange(
                              props.valuesSelected.filter(
                                (value) => value.id !== item.id
                              )
                            );
                          } else {
                            props.onChange([...props.valuesSelected, item]);
                          }
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          readOnly
                          className={styles.checkbox}
                        />
                        {item.value}
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
      {!props.isValid && props.invalidMessage && (
        <p className={styles.invalidMessage}>{props.invalidMessage}</p>
      )}
    </div>
  );
}
