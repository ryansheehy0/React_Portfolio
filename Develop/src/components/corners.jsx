export const triangleLength = "200px"

export const corners = {
  topLeft: {
    clipPath: `polygon(
      0 0,
      100% 0,
      0 100%
    )`,
    origin: "top-0 left-0",
    textOrigin: "origin-top-right",
    textRotation: "-rotate-45",
    text: "About Me",
    event: "topLeftOpen",
    top: (offset) => {return offset},
    left: (offset) => {return ""},
    right: (offset) => {return offset}
  },
  topRight: {
    clipPath: `polygon(
      0 0,
      100% 0,
      100% 100%
    )`,
    origin: "top-0 right-0",
    textOrigin: "origin-top-left",
    textRotation: "rotate-45",
    text: "Portfolio",
    event: "topRightOpen",
    top: (offset) => {return offset},
    left: (offset) => {return ""},
    right: (offset) => {return `calc(-48px - ${offset})`}
  },
  bottomLeft: {
    clipPath: `polygon(
      0 0,
      0 100%,
      100% 100%
    )`,
    origin: "bottom-0 left-0",
    textOrigin: "origin-bottom-right",
    textRotation: "rotate-45",
    text: "Contacts",
    event: "bottomLeftOpen",
    top: (offset) => {return `calc(165px - ${offset})`},
    left: (offset) => {return `calc(0px - ${offset})`},
    right: (offset) => {return ""}
  },
  bottomRight: {
    clipPath: `polygon(
      0 100%,
      100% 100%,
      100% 0
    )`,
    origin: "bottom-0 right-0",
    textOrigin: "origin-bottom-left",
    textRotation: "-rotate-45",
    text: "Resume",
    event: "bottomRightOpen",
    top: (offset) => {return `calc(165px - ${offset})`},
    left: (offset) => {return `calc(49px + ${offset})`},
    right: (offset) => {return ""}
  },
}