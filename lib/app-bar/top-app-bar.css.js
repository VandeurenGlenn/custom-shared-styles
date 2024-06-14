import { css } from '@vandeurenglenn/lite'

export default css`
  :host {
    display: flex;
    flex-direction: column;
    width: calc(100% - 2px);
    background-color: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    box-sizing: border-box;
  }

  .container {
    padding: 20px 12px 24px 12px;
    box-sizing: border-box;
    position: relative;
    height: var(--custom-top-app-bar-height, 64px);
  }

  :host([type='center-aligned']) .container,
  :host([type='small']) .container {
    justify-content: center;
  }

  :host(:not([type='center-aligned'])) ::slotted([name='title']) {
    padding-left: 16px;
  }

  :host(:not([type='large'])) ::slotted([name='title']) {
    padding-bottom: 28px;
  }

  :host([type='medium']) .container {
    height: 112px;
  }
  :host([type='large']) .container {
    height: 152px;
  }

  :host([type='center-aligned']) slot[name='title']::slotted(*) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  :host(:not([type='center-aligned'])) slot[name='title']::slotted(*) {
    padding-left: 6px;
  }

  :host([scrolling]) {
    --md-elevation-level: 2;
    padding: 0 16px;
  }

  flex-row {
    width: 100%;
    align-items: center;
  }

  custom-elevation {
    border-radius: var(--md-sys-shape-corner-large);
  }
`
