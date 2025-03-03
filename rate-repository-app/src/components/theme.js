import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    appBar: "#24292e",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 16,
    subheading: 18,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
};

export default theme;
