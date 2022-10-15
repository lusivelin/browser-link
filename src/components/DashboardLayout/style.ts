import { css } from "@stitches/core";

export const sideBarWrapper = css({
  background: "#36382E",
  position: "fixed",
  height: "100%",
  color: "#fff",
  zIndex: 10000,
  transition: "width 0.5s",

  variants: {
    collapse: {
      true: {
        width: 200,
      },
      false: {
        width: 80,
      },
    },
  },

  defaultVariants: {
    collapse: "false",
  },
});

export const menuList = css({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  gap: 10,
  width: "100%",
});

export const collapseButton = css({
  position: "absolute",
  bottom: 0,
  width: "100%",
});

export const logoItem = css({
  marginTop: 30,
});

export const menuItem = css({
  width: "100%",
  padding: "10px 0",
  textAlign: "center",
  cursor: "pointer",

  variants: {
    active: {
      true: {
        backgroundColor: "#F06449",
      },
      false: {
        backgroundColor: "transparent",
      },
    },
  },

  defaultVariants: {
    active: "false",
  },
});

export const topHeaderWrapper = css({
  background: "#5BC3EB",
  position: "sticky",

  height: 50,
  display: "flex",
  alignItems: "center",

  transition: "padding-left 0.5s",
  zIndex: 1000,

  variants: {
    collapse: {
      true: {
        paddingLeft: 200,
      },
      false: {
        paddingLeft: 80,
      },
    },
  },

  defaultVariants: {
    collapse: "false",
  },
});

export const contentWrapper = css({
  background: "#DADAD9",
  transition: "padding-left 0.5s",
  height: "100vh",
  padding: 20,

  variants: {
    collapse: {
      true: {
        paddingLeft: 220,
      },
      false: {
        paddingLeft: 100,
      },
    },
  },
});
