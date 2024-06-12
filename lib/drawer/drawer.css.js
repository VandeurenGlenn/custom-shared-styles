import { css } from '@vandeurenglenn/lite';
export default css`
  :host {
    display: contents;
  }

  custom-pane {
    box-sizing: border-box;
    height: 100%;
    --custom-pane-width: var(--custom-drawer-with, 320px);
  }

  slot[name='headline']::slotted(*) {
    color: var(--md-sys-color-on-surface-variant);
    font-family: var(--md-sys-typescale-title-small-font-family-name);
    font-style: var(--md-sys-typescale-title-small-font-family-style);
    font-weight: var(--md-sys-typescale-title-small-font-weight);
    font-size: var(--md-sys-typescale-title-small-font-size);
    letter-spacing: var(--md-sys-typescale-title-small-tracking);
    line-height: var(--md-sys-typescale-title-small-height);
    text-transform: var(--md-sys-typescale-title-small-text-transform);
    text-decoration: var(--md-sys-typescale-title-small-text-decoration);
    text-transform: capitalize;
    margin: 0;
  }

  ::slotted([slot='footer']) {
    display: block;
    box-sizing: border-box;
    min-height: 48px;
    border-top: 1px solid rgba(0, 0, 0, 0.14);
  }

  ::slotted([slot='content']) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }

  ::slotted(*) {
    pointer-events: none;
  }

  aside {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
