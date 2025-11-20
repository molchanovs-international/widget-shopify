function feedback_widget() {
    createAndAppendWidget();
}

function createAndAppendWidget() {
    const widgetContainer = document.createElement('div');

    widgetContainer.innerHTML = `
<style>

/* ИКОНКА */
#feedback-widget-icon {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 70px;
    height: 70px;
    cursor: pointer;
    z-index: 99999;
    background-image: url('https://990836f7d74713702099c8c18dc94284.cdn.bubble.io/f1732263873066x569918169448115000/QQ.svg');
    background-size: contain;
    background-repeat: no-repeat;
}

/* Mobile */
@media (max-width: 768px) {
    #feedback-widget-icon {
        width: 50px;
        height: 50px;
    }
}

/* ЗАТЕМНЕНИЕ */
#feedback-overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(4px);
    z-index: 99998;
}

/* ПОПАП */
#feedback-popup {
    display: none;
    position: fixed;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    height: auto;
    background: white;
    border-radius: 12px;
    z-index: 999999;
    overflow: hidden;      /* ВАЖНО */
    padding: 0;            /* НЕТ ПАДДИНГОВ!!! */
    box-sizing: border-box;
    
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

/* iframe заполняет ВСЮ высоту */
#feedback-iframe {
    width: 100%;
    height: 100%;          /* ВАЖНО */
    border: none;
    display: block;
}

/* КНОПКА ЗАКРЫТИЯ */
#feedback-close-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 1000001;
    font-size: 28px;
    cursor: pointer;
    background: white;
    padding: 6px;
    border-radius: 50%;
}

/* МОБИЛЬНОЕ ОТОБРАЖЕНИЕ — попап = весь экран */
@media (max-width: 768px) {
    #feedback-popup {
        width: 100%;
        height: 100%;
        max-height: none;
        max-width: none;
        border-radius: 0;
        transform: none;
        left: 0;
        top: 0;
    }

    #feedback-close-btn {
        top: 20px;
        right: 20px;
        font-size: 34px;
        padding: 8px;
    }
}

</style>

<div id="feedback-widget-icon"></div>
<div id="feedback-overlay"></div>

<div id="feedback-popup">
    <div id="feedback-close-btn">×</div>
    <iframe id="feedback-iframe" src="https://move.molchanovs.com/version-12vig/iframe"></iframe>
</div>
`;

    document.body.appendChild(widgetContainer);

    /* Элементы */
    const icon = document.getElementById("feedback-widget-icon");
    const overlay = document.getElementById("feedback-overlay");
    const popup = document.getElementById("feedback-popup");
    const closeBtn = document.getElementById("feedback-close-btn");

    function openPopup() {
        popup.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    }

    function closePopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }

    icon.addEventListener("click", openPopup);
    closeBtn.addEventListener("click", closePopup);
    overlay.addEventListener("click", closePopup);
}
