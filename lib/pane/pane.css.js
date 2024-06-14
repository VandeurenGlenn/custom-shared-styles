import { css } from '@vandeurenglenn/lite'

export default css`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--md-sys-color-surface);
    color: var(--md-sys-color-on-surface);
    position: relative;
    /* border-radius: 12px; */

    --md-elevation-level: 0;

    pointer-events: none;
    opacity: 0;
    width: 100%;
    max-width: var(--custom-pane-width, 100%);
    transition: var(--md-sys-motion-easing-emphasized-accelerate) 200ms opacity,
      var(--md-sys-motion-easing-emphasized-accelerate) 200ms transform;
  }

  :host([left]) {
    border-radius: var(--md-sys-shape-corner-large-end);
    transform: translateX(-100%);
    z-index: 1002;
  }

  :host([right]) {
    border-radius: var(--md-sys-shape-corner-large-start);
    transform: translateX(100%);
    z-index: 1001;
  }

  :host([mobile]) {
    inset: 0;
    position: fixed;
    z-index: 1001;
  }

  :host([type='modal']) {
    --md-elevation-level: 1;
  }

  :host([open]) {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
    transition: var(--md-sys-motion-easing-emphasized-decelerate) 500ms opacity,
      var(--md-sys-motion-easing-emphasized-decelerate) 500ms transform;
  }

  :host([open]) {
    position: relative;
  }

  :host([open][mobile]) {
    position: fixed;
  }

  aside {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .content {
    flex: 1;
    width: 100%;
  }

  :host([right]) custom-icon-button {
    transform: rotateZ(180deg);
  }

  slot[name='header']::slotted(flex-row) {
    padding: var(--custom-pane-header-padding, 8px);
    height: var(--custom-pane-header-height, 54px);
    box-sizing: border-box;
    align-items: center;
  }

  slot[name='footer']::slotted(flex-row) {
    padding: var(--custom-pane-footer-padding, 8px);
    height: var(--custom-pane-footer-height, 54px);
    box-sizing: border-box;
    align-items: center;
  }
`
