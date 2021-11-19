# Todo

## Theming

- behaviours in `Themes/behaviours.js`
  - fonts
  - colours
  - box model
  - icons
  - avatar frames
- base theme in `Themes/themes.js`
- themes in `Themes/themes.js`
- `useTheme(name)` hook
  - import every behaviour
  - compose custom theme according to `name`. Ex:
  ```
  [...]
    case 'a11y':
      return {
        ...base,
        ...dyslexiaFonts,
        ...colorblindColours
      }
    case 'steampunk':
      return {
        ...base,
        ...ligaturedFonts,
        ...brownColours,
        ...largeBoxModel
        ...techIcons,
        ...techFrames
      }
  [...]
  ```
- Find a good input method to choose theme
  - <select> ?
  - radial menu ?
  - ???

## Misc

- stop using mock data, systematically use backend
- create a `useApi(verb,route)` hook
- translations
  - context + hook ?
  - `react-intl` ? `react-i18next` ?
- create all routes + 404
- create all Entities
  - Games
  - Groups
  - News
  - Parties
  - Users
- foreach entity, create adequate components
  - Badge
  - Card
  - Detail
  - Row
- geolocalisation
- back-office
- authentication
