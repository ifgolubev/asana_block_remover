function removeWarning() {
    const warnings = document.querySelectorAll('.ClawbackWarningOverlay-container');
    warnings.forEach(warning => {
        warning.remove();
    });
}

// Выполнение функции сразу после загрузки страницы и при изменениях на странице
removeWarning();
const observer = new MutationObserver(removeWarning);
observer.observe(document.body, { childList: true, subtree: true });
