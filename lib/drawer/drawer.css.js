import { css } from '@vandeurenglenn/lite'
export default css`
  :host {
    display: contents;
  }

  custom-pane {
    box-sizing: border-box;
    height: 100%;
    --custom-pane-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    --custom-pane-width: var(--custom-drawer-width, 320px);
    --custom-pane-header-height: var(--custom-drawer-header-height, 54px);
    --custom-pane-header-padding: var(--custom-drawer-header-padding, 8px);
    --custom-pane-footer-height: var(--custom-drawer-footer-height, 54px);
    --custom-pane-footer-padding: var(--custom-drawer-footer-padding, 8px);
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
    border-top: 1px solid rgba(0, 0, 0, 0.14);
  }

  ::slotted(*) {
    pointer-events: none;
  }
`
