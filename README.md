# tournament-brackets-ui

A React component library for rendering tournament brackets. Supports both **team** and **individual** brackets in multiple sizes and three layout variants: **expanded**, **collapsed-left**, and **collapsed-right**.

## Installation

```bash
npm install tournament-brackets-ui
```

**Peer dependencies:** React 18 or 19, React DOM 18 or 19.

## Usage

Import the components, optional helpers, and styles:

```jsx
import {
  Expanded,
  CollapsedLeft,
  CollapsedRight,
  BRACKET_SIZES,
  EXPANDED_SIZES_TEAMS,
  circledScoreDisplay,
  tournamentMkdtScoreInput,
} from "tournament-brackets-ui";
import "tournament-brackets-ui/style.css";

// e.g. validate user input
const ok = EXPANDED_SIZES_TEAMS.includes(size);
```

### Components

| Component | Purpose |
|-----------|---------|
| **`Expanded`** | Full bracket: all rounds visible. |
| **`CollapsedLeft`** | Early rounds collapsed on the **left**. |
| **`CollapsedRight`** | Early rounds collapsed on the **right**. |

Each accepts **`entity`** + **`size`** + data, or use the shorthand subcomponents (entity fixed):

```jsx
<Expanded entity="teams" size={8} teams={teams} />
<Expanded entity="individuals" size={8} players={players} />

<Expanded.Teams size={8} teams={teams} />
<Expanded.Individuals size={8} players={players} />
```

The same pattern works for `CollapsedLeft` and `CollapsedRight`.

### Theme

Pass **`theme="dark"`** (default `"light"`) on any facade to switch bracket lines, text, and fillable controls:

```jsx
<Expanded.Individuals size={8} players={players} theme="dark" />
<CollapsedLeft.Teams size={8} teams={teams} theme="dark" />
```

Optional `textStyles` / `teamIDColor` still override ink color when you set them explicitly.

### Supported bracket sizes

Not every layout supports every size. Use the exported arrays (or `BRACKET_SIZES`) so your app stays aligned with the library.

| Layout | Teams (`entity="teams"`) | Individuals (`entity="individuals"`) |
|--------|---------------------------|------------------------------------------|
| **Expanded** | 2, 4 – 16 | same |
| **CollapsedLeft** / **CollapsedRight** | 5 – 16 | 5 – 16 |

| Export | Contents |
|--------|----------|
| `EXPANDED_SIZES_TEAMS` | Expanded team sizes |
| `EXPANDED_SIZES_INDIVIDUALS` | Expanded individual sizes |
| `COLLAPSED_SIZES_TEAMS` | Collapsed team sizes |
| `COLLAPSED_SIZES_INDIVIDUALS` | Collapsed individual sizes |
| `BRACKET_SIZES` | `{ expanded: { teams, individuals }, collapsed: { teams, individuals } }` |

`size` must match the length of `teams` or `players`. If there is no variant for the combination, the component returns `null` and may log a dev warning.

### Props reference

Props differ by **layout** (expanded vs collapsed) and **entity** (teams vs individuals). Only **`size`** and the data array are always required.

#### Shared (all facades)

| Prop | Required | Description |
|------|----------|-------------|
| **`size`** | **Yes** | Bracket size; must be supported for that layout + entity (see table above). |
| **`teams`** | **Yes** for team brackets | `string[]` — one entry per slot, length = `size`. |
| **`players`** | **Yes** for individual brackets | Array of player objects (see [Data shape](#data-shape)), length = `size`. |
| **`entity`** | No | `"teams"` \| `"individuals"`. Default on the main export is `"teams"`. Omitted when using `.Teams` / `.Individuals`. |
| **`theme`** | No | `"light"` (default) or `"dark"` — bracket lines, text, and fillable chrome. |

#### `Expanded` — teams

| Prop | Required | Description |
|------|----------|-------------|
| **`mode`** | No | `"view"` (default) or `"fillable"` — editable team name cells when fillable. |
| **`fontFamily`** | No | Font family for team ID column (expanded team layouts). |
| **`teamIDColor`** | No | Color for team ID text. |
| **`teamIDFontSize`** | No | Team ID font size in **points**. |

#### `Expanded` — individuals

| Prop | Required | Description |
|------|----------|-------------|
| **`mode`** | No | `"view"` (default) or `"fillable"`. |
| **`textStyles`** | No | `{ playerId, playerText }` — font family, `fontSize` (pt), `color` for ID and name/club. |
| **`scoreInputTransform`** | No | `(rawInput: string) => string` — transform SCORE field input before storing on `player.score`. Default: store as typed. |
| **`formatScoreDisplay`** | No | `(rawScore: string) => string` — how stored `player.score` appears in the SCORE cell. Default: plain text. |
| **`playerOptions`** | No | `{ id, name, club? }[]` — searchable roster for empty opening slots (fillable). |
| **`openingSlotLabels`** | No | `string[]` — placeholder labels for empty opening name cells (e.g. `"Winner of Group 1"`). |
| **`championLabel`** | No | Read-only SCORE-cell label for the final (champion) slot. Default `"WINNER"`. |
| **`onPlayersChange`** | No | `(players) => void` — called whenever the full slot array changes. Use this to mirror state for Save. |

#### `CollapsedLeft` / `CollapsedRight` — teams

| Prop | Required | Description |
|------|----------|-------------|
| **`teamIDFontFamily`** | No | Font family for team ID cells. |
| **`teamIDColor`** | No | Color for team ID text. |
| **`teamIDFontSize`** | No | Team ID font size in **points**. |

#### `CollapsedLeft` / `CollapsedRight` — individuals

| Prop | Required | Description |
|------|----------|-------------|
| **`textStyles`** | No | Same shape as expanded individuals; defaults match library styling if omitted. |

### Data shape

**Teams:** an array of strings (team names or labels).

```jsx
const teams = ["Team A", "Team B", /* ... length === size */];
<Expanded.Teams size={8} teams={teams} />
```

**Individuals:** objects with **`id`**, **`name`**, optional **`club`**, optional **`score`**, and optional **`noShow`** (set when an advance slot is marked No Show).

```jsx
const players = [
  { id: "E01", name: "Amira Hassan", club: "NFC" },
  { id: "E02", name: "Jinwoo Park", club: "SJU" },
  // ... one entry per player, length === size
];
<Expanded.Individuals size={8} players={players} />
```

#### Searchable roster (`playerOptions`)

In fillable mode, pass **`playerOptions`** when opening slots should be chosen from a list (e.g. group winners, a large entry list) instead of free-typing ID/name:

```jsx
const roster = [
  { id: "G1", name: "Winner of Group 1" },
  { id: "G2", name: "Winner of Group 2" },
  // ...can be long; the picker is searchable
];

const openingSlotLabels = Array.from(
  { length: 8 },
  (_, i) => `Winner of Group ${i + 1}`,
);

<Expanded.Individuals
  size={8}
  mode="fillable"
  players={[]} // empty opening slots
  playerOptions={roster}
  openingSlotLabels={openingSlotLabels}
/>
```

- Empty **opening** slots show a **Pick** control with search (ID / name / club).
- Optional **`openingSlotLabels`** show muted, non-editable text in the name cell (placeholder look) until a player is picked; then the real name/club replaces it.
- After a pick, ID and name render as text; **Change** clears the slot to pick again.
- Later-round advance picks (feeder winners) are unchanged.
- Omit `playerOptions` to keep free-text ID and name inputs.

### Fillable individuals — advancing winners

In **`mode="fillable"`**, expanded individual brackets support picking who advances into later-round slots:

1. Empty advance slots show a **Pick** control in the ID cell.
2. Choosing a feeder player copies their **id / name / club** into that slot (score starts empty).
3. **No Show** clears identity fields and marks the slot as no-show.
4. After a pick, hover the name cell and use **Change** to clear the slot and pick again.

Advance wiring is per bracket size (feeder pair → destination slot). Consumers only need `mode="fillable"`; the UI is built in.

### Persisting bracket state (Save)

`players` seeds the bracket on mount (uncontrolled after that). Pass **`onPlayersChange`** to receive the full slot array on every edit:

```jsx
const [bracket, setBracket] = useState(initialPlayers);

<Expanded.Individuals
  size={12}
  mode="fillable"
  players={initialPlayers}
  onPlayersChange={setBracket}
/>

// Save: persist `bracket` to your DB
```

**Slot indexing**

- Array index === bracket slot index (`bracket[0]`, `bracket[1]`, …).
- Length is **`maxSlots`** for that size (opening round **plus** later-round slots), not only `size`. Empty later slots are `{ id: "", name: "", club: "", score: "" }`.
- Opening players are typically `0 .. size-1`. Later indices are advance slots. For 12-player, the final is slot **22** (`bracket[22]` / `bracket.at(-1)` when length is 23).
- Remount when loading a different saved bracket (`key={tournamentId}`) so `players` is re-seeded.

Each slot object can include **`id`**, **`name`**, **`club`**, **`score`**, and **`noShow`**.

## License

MIT
