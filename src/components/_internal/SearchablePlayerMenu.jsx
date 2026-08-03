import { useEffect, useId, useMemo, useRef, useState } from "react";
import styles from "../Individuals/stylesheet.module.css";

/**
 * Searchable roster picker for empty bracket slots.
 * @param {{
 *   options: Array<{ id?: string, name?: string, club?: string }>,
 *   onSelect: (player: { id?: string, name?: string, club?: string }) => void,
 *   placeholder?: string,
 *   groupLabel?: string,
 * }} props
 */
export function SearchablePlayerMenu({
  options = [],
  onSelect,
  placeholder = "Pick",
  groupLabel = "Select player",
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const rootRef = useRef(null);
  const searchRef = useRef(null);
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

  useEffect(() => {
    if (open) {
      setQuery("");
      queueMicrotask(() => searchRef.current?.focus());
    }
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => {
      const id = String(o.id ?? "").toLowerCase();
      const name = String(o.name ?? "").toLowerCase();
      const club = String(o.club ?? "").toLowerCase();
      return id.includes(q) || name.includes(q) || club.includes(q);
    });
  }, [options, query]);

  const pick = (player) => {
    onSelect(player);
    setOpen(false);
  };

  return (
    <div className={styles.advancePickRoot} ref={rootRef}>
      <button
        type="button"
        className={`${styles.slotAdvanceSelect} ${styles.slotAdvanceSelectPlaceholder} ${
          open ? styles.slotAdvanceSelectOpen : ""
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label="Search and pick a player"
        onClick={() => setOpen((v) => !v)}
      >
        {placeholder}
      </button>

      {open ? (
        <div
          className={`${styles.advancePickPopup} ${styles.playerSearchPopup}`}
          role="listbox"
          id={listId}
          aria-label={groupLabel}
        >
          <div className={styles.advancePickHeader}>{groupLabel}</div>
          <div className={styles.playerSearchFieldWrap}>
            <input
              ref={searchRef}
              type="search"
              className={styles.playerSearchField}
              placeholder="Search ID or name…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search players"
            />
          </div>
          <ul className={`${styles.advancePickList} ${styles.playerSearchList}`}>
            {filtered.length === 0 ? (
              <li className={styles.playerSearchEmpty}>No matches</li>
            ) : (
              filtered.map((o, i) => {
                const key = `${o.id ?? ""}-${o.name ?? ""}-${i}`;
                return (
                  <li key={key} role="presentation">
                    <button
                      type="button"
                      role="option"
                      className={styles.advancePickOption}
                      onClick={() => pick(o)}
                    >
                      <span className={styles.advancePickOptionId}>
                        {o.id || "—"}
                      </span>
                      <span className={styles.advancePickOptionName}>
                        {o.club?.trim()
                          ? `${o.name || "—"} (${o.club.trim()})`
                          : o.name || "—"}
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
