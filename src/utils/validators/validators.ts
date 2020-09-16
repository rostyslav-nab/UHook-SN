export type ValidatorsTypes = (value: string) => string | undefined

export const requiredFields: ValidatorsTypes = (value) => {
    if(value) {
        return undefined
    } else {
        return 'Field is required'
    }
}

export const maxLengthCreator = (maxLength: number): ValidatorsTypes => (value) => {
    if(value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    } else {
        return undefined
    }
}