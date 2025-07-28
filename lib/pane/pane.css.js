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
    box-shadow: var(--custom-pane-box-shadow, 0px 0px 10px 0px rgba(0, 0, 0, 0.5));
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

  :host([bottom]) {
    border-radius: var(--md-sys-shape-corner-large-top);
    transform: translateY(100%);
    z-index: 1003;
  }

  :host([top]) {
    border-radius: var(--md-sys-shape-corner-large-bottom);
    transform: translateY(100%);
    z-index: 1004;
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
    opacity: 1;
    pointer-events: auto;
    transition: var(--md-sys-motion-easing-emphasized-decelerate) 500ms opacity,
      var(--md-sys-motion-easing-emphasized-decelerate) 500ms transform;
  }

  :host([open]) :host([left]),
  :host([open][right]) {
    transform: translateX(0);
  }

  :host([open][bottom]),
  :host([open][top]) {
    transform: translateY(0);
  }

  :host([open]) {
    position: relative;
  }

  :host([open][mobile]) {
    position: absolute;
  }

  aside {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .content {
    flex: 1;
    overflow-y: auto;
    width: 100%;
  }

  :host([right]) custom-icon-button {
    transform: rotateZ(180deg);
  }

  slot[name='header'] flex-row {
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
