export function findByDataTest(wrapper, dataTest) {
    return wrapper.find(`[data-test="${dataTest}"]`);
}
