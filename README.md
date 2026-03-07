# tournament-brackets-ui

A React component library for rendering tournament brackets. Supports both **team** and **individual** brackets in multiple sizes and three layout variants: expanded, collapsed-left, and collapsed-right.

## Installation

```bash
npm install tournament-brackets-ui
```

**Peer dependencies:** React 18 or 19, React DOM 18 or 19.

## Usage

Import the components and optional styles:

```jsx
import { Expanded, CollapsedLeft, CollapsedRight } from "tournament-brackets-ui";
import "tournament-brackets-ui/style.css";
```

### Components

- **`Expanded`** — Full bracket layout with all rounds visible.
- **`CollapsedLeft`** — Bracket with early rounds collapsed on the left.
- **`CollapsedRight`** — Bracket with early rounds collapsed on the right.

Each component can render either **teams** or **individuals**. Use the `entity` prop or the shorthand subcomponents:

```jsx
// Using entity prop
<Expanded entity="teams" size={8} teams={teams} />
<Expanded entity="individuals" size={8} players={players} />

// Using shorthand (entity is fixed)
<Expanded.Teams size={8} teams={teams} />
<Expanded.Individuals size={8} players={players} />
```

Same pattern for `CollapsedLeft` and `CollapsedRight`.

### Supported sizes

| Entity      | Sizes                          |
|------------|---------------------------------|
| Teams      | 8, 9, 10, 11, 12, 13, 14, 16   |
| Individuals| 8, 9, 10, 11, 12, 13, 14, 15, 16 |

You must pass a `size` that matches the length of your `teams` or `players` array.

### Data shape

**Teams:** an array of strings (e.g. team names or labels).

```jsx
const teams = ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F", "Team G", "Team H"];
<Expanded.Teams size={8} teams={teams} />
```

**Individuals:** an array of objects with `id`, `name`, and optional `club`.

```jsx
const players = [
  { id: "E01", name: "Amira Hassan", club: "NFC" },
  { id: "E02", name: "Jinwoo Park", club: "SJU" },
  // ... one entry per player, length must match size
];
<Expanded.Individuals size={8} players={players} />
```

### Styling (optional)

**Individuals** — Pass `textStyles` to customize player ID and name/club text:

```jsx
<Expanded.Individuals
  size={8}
  players={players}
  textStyles={{
    playerId:  { fontFamily: "Arial", fontSize: 14, color: "#000" },
    playerText: { fontFamily: "Arial", fontSize: 12, color: "#333" },
  }}
/>
```

**Teams** — For expanded team brackets you can pass `teamIDFontFamily`, `teamIDColor`, and `teamIDFontSize` to style the team ID cell.


## License

MIT
