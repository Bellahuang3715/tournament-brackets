import { useEffect, useId, useRef, useState } from "react";
import styles from "../Individuals/stylesheet.module.css";

/**
 * Compact trigger + popup for choosing who advances into a bracket slot.
 * @param {{
 *   value: string,
 *   onSelect: (value: string) => void,
 *   options: Array<{ value: string, label: string, id?: string, name?: string }>,
 *   placeholder?: string,
 *   groupLabel?: string,
 * }} props
 */
export function AdvancePickMenu({
  value,
  onSelect,
  options,
  placeholder = "Pick",
  groupLabel = "Pick winner",
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isEmpty = !value;
  const players = options.filter((o) => o.value !== "noshow");
  const noShow = options.find((o) => o.value === "noshow");

  const pick = (next) => {
    onSelect(next);
    setOpen(false);
  };

  return (
    <div className={styles.advancePickRoot} ref={rootRef}>
      <button
        type="button"
        className={`${styles.slotAdvanceSelect} ${
          isEmpty ? styles.slotAdvanceSelectPlaceholder : ""
        } ${open ? styles.slotAdvanceSelectOpen : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label="Pick who advances from the prior match"
        onClick={() => setOpen((v) => !v)}
      >
        {isEmpty ? placeholder : value}
      </button>

      {open ? (
        <div
          className={styles.advancePickPopup}
          role="listbox"
          id={listId}
          aria-label={groupLabel}
        >
          <div className={styles.advancePickHeader}>{groupLabel}</div>
          <ul className={styles.advancePickList}>
            {players.map((o) => (
              <li key={o.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={value === o.value}
                  className={styles.advancePickOption}
                  onClick={() => pick(o.value)}
                >
                  <span className={styles.advancePickOptionId}>
                    {o.id || "—"}
                  </span>
                  <span className={styles.advancePickOptionName}>
                    {o.name || o.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          {noShow ? (
            <>
              <div className={styles.advancePickDivider} />
              <button
                type="button"
                role="option"
                aria-selected={value === "noshow"}
                className={`${styles.advancePickOption} ${styles.advancePickNoShow}`}
                onClick={() => pick("noshow")}
              >
                {noShow.label}
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
