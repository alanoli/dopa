const buildConstraint = (column, assertion, value) => {
    return {
        column,
        assertion,
        value
    }
}

export { buildConstraint };