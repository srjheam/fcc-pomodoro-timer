const STYLE = {
  pomodoroPalette: {
    primaryPomodoroColor: "#B30000",
    primaryLightPomodoroColor: "#FF1919",
  },
  breakPalette: {
    primaryBreakColor: "#0971B3",
    primaryLightBreakColor: "#19A6FF",
  },
}

const PALETTE = (onBreak) => ({
  primaryColor: onBreak ? STYLE.breakPalette.primaryBreakColor : STYLE.pomodoroPalette.primaryPomodoroColor,
  primaryLightColor: onBreak ? STYLE.breakPalette.primaryLightBreakColor : STYLE.pomodoroPalette.primaryLightPomodoroColor,
});

export default PALETTE;