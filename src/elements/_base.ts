export const LAYOUT = {
  HelperText: `
    <span class="disabled">DISABLED</span>
    <span class="readonly">READONLY</span>
  `
}

export const KEYBOARD = {
  Enter: 13,
  Escape: 27,
  Space: 32,
  PageUp: 33,
  PageDown: 34,
  End: 35,
  Home: 36,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40
}

export let helper = {
  withinViewport: ( node ) => {

    let domRect = node.getBoundingClientRect()

    return {
      top: domRect.top >= 0,
      left: domRect.left >= 0,
      bottom: domRect.bottom <= ( window.innerHeight || document.documentElement.clientHeight ),
      right: domRect.right <= ( window.innerWidth || document.documentElement.clientWidth )
    }

  }
}
