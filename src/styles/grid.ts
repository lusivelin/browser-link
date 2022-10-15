import { css } from "@stitches/core";
import { selectMaxScreen, selectMinScreen, SelectScreen } from "./media"

export const row = css({
    display: "flex",
    flexFlow: "row wrap",
    minWidth: 0,
})

export const ratios = ({
    name,
    cols,
    func,
}: SelectScreen & { cols: number; func: (param: SelectScreen) => string }) =>
    [...Array(cols).keys()]
        .map((x) => ++x)
        .map((col) => [
            col,
            {
                [func?.({ name })]: {
                    flex: `0 0 ${((col / cols) * 100).toFixed(4)}%`,
                    maxWidth: `${((col / cols) * 100).toFixed(4)}%`,
                },
            },
        ])

const cols = 24
export const col = css({
    display: "block",
    width: "100%",

    variants: {
        xxl: Object.fromEntries(
            ratios({ name: "xxl", cols, func: selectMinScreen })
        ),
        xl: Object.fromEntries(
            ratios({ name: "xl", cols, func: selectMinScreen })
        ),
        lg: Object.fromEntries(
            ratios({ name: "lg", cols, func: selectMinScreen })
        ),
        md: Object.fromEntries(
            ratios({ name: "md", cols, func: selectMinScreen })
        ),
        sm: Object.fromEntries(
            ratios({ name: "sm", cols, func: selectMinScreen })
        ),
        xs: Object.fromEntries(
            ratios({
                name: "xs",
                cols,
                func: selectMaxScreen,
            })
        ),
    },

    defaultVariants: {
        xs: "24",
    },
})

export const div = css({})
