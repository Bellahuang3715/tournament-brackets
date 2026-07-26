/**
 * Supported bracket `size` values per layout, kept in sync with the Facade registries.
 * Use these for validation, Storybook controls, or docs in consuming apps.
 */

/** @type {readonly number[]} */
export const EXPANDED_SIZES_TEAMS = Object.freeze([
  2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
]);

/** @type {readonly number[]} */
export const EXPANDED_SIZES_INDIVIDUALS = Object.freeze([
  2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
]);

/** CollapsedLeft / CollapsedRight — teams (no 2- or 4-team collapsed layouts). */
/** @type {readonly number[]} */
export const COLLAPSED_SIZES_TEAMS = Object.freeze([
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
]);

/** CollapsedLeft / CollapsedRight — individuals. */
/** @type {readonly number[]} */
export const COLLAPSED_SIZES_INDIVIDUALS = Object.freeze([
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
]);

/** Convenience map for docs / tooling. */
export const BRACKET_SIZES = Object.freeze({
  expanded: {
    teams: EXPANDED_SIZES_TEAMS,
    individuals: EXPANDED_SIZES_INDIVIDUALS,
  },
  collapsed: {
    teams: COLLAPSED_SIZES_TEAMS,
    individuals: COLLAPSED_SIZES_INDIVIDUALS,
  },
});
