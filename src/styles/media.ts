import { screenSizes } from "./screen"

export type SelectScreen = {
    name: keyof typeof screenSizes
    adjustment?: number
}

export const selectMaxScreen = ({ name, adjustment = 0 }: SelectScreen) => {
    return `@media (max-width: ${
        screenSizes[name] + adjustment
    }px)`
}

export const selectMinScreen = ({ name, adjustment = 0 }: SelectScreen) => {
    return `@media (min-width: ${
        screenSizes[name] + adjustment
    }px)`
}
