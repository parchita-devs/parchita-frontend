import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "linear-gradient(to bottom, #0b1120 0%, #0d1224 50%, #12142e 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Keeps it fixed on scroll
        minHeight: "100vh",
        color: "white", // Ensures good contrast
        fontFamily: "Poppins",
        overflowX: "hidden",
        width: "100%",
      },
    },
  },
  breakpoints: {
    sm: "320px", // For mobile devices
    md: "768px", // For laptops
    lg: "1280px", // For desktops
  },
  sizes: {
    container: {
      sm: "100%", // Full width on small screens (mobile)
      md: "80%", // 80% width on laptops
      lg: "1200px", // Fixed width for desktops
    },
  },
  fontSizes: {
    xs: "10px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
  },
  components: {
    Button: {
      variants: {
        primary: {
          outline: "none",
          fontSize: "md",
          fontWeight: 400,
          color: "white",
          bg: "#9D48C7",
          borderRadius: "8px",
          width: "100%",
          _hover: {
            bg: "#9D48C7",
          },
          _focus: {
            boxShadow: "none",
          },
        },
        secondary: {
          bg: "transparent",
          color: "white",
          width: "100%",
          border: "1px solid white",
          _hover: {
            bg: "transparent",
          },
        },
      },
    },
    Input: {
      variants: {
        primary: {
          field: {
            backgroundColor: "#FFFFFF1A",
            fontSize: "14px",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.34)",
            outline: "none",
            _focus: {
              outline: "none",
              border: "1px solid rgba(255, 255, 255, 0.34)",
            },
            _placeholder: {
              color: "#F1F5F9",
            },
          },
        },
        secondary: {
          field: {
            backgroundColor: "#FFFFFF",
            fontFamily: "Poppins",
            borderRadius: "50px",
            px: 5,
            py: 7,
            border: "2px solid rgba(255, 255, 255, 0.34)",
            outline: "none",
            _focus: {
              outline: "none",
              border: "1px solid rgba(255, 255, 255, 0.34)",
            },
            _placeholder: {
              color: "#FFFFFF",
            },
          },
        },
      },
    },

    Divider: {
      variants: {
        primaryDivider: {
          h: "1px",
          bgGradient: "linear(to-r, #FFFFFF00, #FFFFFF4D, #FFFFFF00)",
        },
      },
    },

    Select: {
      baseStyle: {
        field: {
          bg: "linear-gradient(to right, #0b1120, #0d1224)", // Background color
          color: "white",
          borderColor: "gray.600",
          _hover: { bg: "#12142e" },
          _focus: {
            bg: "linear-gradient(to right, #0b1120, #0d1224)",
            borderColor: "blue.400",
            boxShadow: "0 0 0 1px blue.400",
          },
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          bg: "linear-gradient(to right, #0b1120, #0d1224) !important", // Background of dropdown
          color: "white",
          borderRadius: "8px",
          border: "1px solid gray",
        },
        item: {
          bg: "transparent",
          _hover: { bg: "#1a1f36" }, // Hover color for options
          _focus: { bg: "#1a1f36" },
          _active: { bg: "#1a1f36" },
        },
      },
    },
  },
});

export default theme;
