export const removeLoadingIndicator = () => {
    const loadingIndicator = document.getElementById('DramaMasks__load')
    if (loadingIndicator) {
        loadingIndicator.parentNode.removeChild(loadingIndicator)
    }
}
