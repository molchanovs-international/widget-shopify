function feedback_widget() {
    createAndAppendWidget();
}

function createAndAppendWidget() {
    const widgetContainer = document.createElement('div');

    widgetContainer.innerHTML = `
<style>
/* ИКОНКА ВИДЖЕТА */
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
    background-position: center;
    background-repeat: no-repeat;
}

/* Мобильная версия иконки */
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
    background: rgba(0,0,0,0.45);
    backdrop-filter: blur(4px);
    z-index: 99998;
}

/* ПОПАП */
#feedback-popup {
    display: none;
    position: fixed;
    max-width: 800px;
    width: 90%;
    min-height: 500px;
    max-height: 90vh;
    background: white;
    border-radius: 12px;
    z-index: 999999;
    padding: 32px;
    overflow: hidden;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

/* iframe */
#feedback-iframe {
    width: 100%;
    height: 100%;
    border: none;
}

/* КНОПКА ЗАКРЫТЬ */
#feedback-close-btn {
    position: absolute;
    top: 14px;
    right: 14px;
    font-size: 28px;
    cursor: pointer;
    z-index: 1000000;
    line-height: 20px;
}

/* Адаптация под мобильный */
@media (max-width: 768px) {
    #feedback-popup {
        width: 100%;
        height: 100%;
        max-height: none;
        min-height: 100%;
        border-radius: 0;
        padding: 20px;
        transform: none;
        left: 0;
        top: 0;
    }

    #feedback-close-btn {
        font-size: 34px;
        right: 20px;
        top: 20px;
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

    /* ЭЛЕМЕНТЫ */
    const icon = document.getElementById("feedback-widget-icon");
    const popup = document.getElementById("feedback-popup");
    const overlay = document.getElementById("feedback-overlay");
    const closeBtn = document.getElementById("feedback-close-btn");

    /* ОТКРЫТИЕ ПОПАПА */
    function openPopup() {
        popup.style.display = "block";
        overlay.style.display = "block";
        document.body.style.overflow = "hidden"; 
    }

    /* ЗАКРЫТИЕ ПОПАПА */
    function closePopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    }

    /* КЛИК ПО ИКОНКЕ */
    icon.addEventListener("click", openPopup);

    /* КЛИК ПО КРЕСТИКУ */
    closeBtn.addEventListener("click", closePopup);

    /* КЛИК ВНЕ ПОПАПА */
    overlay.addEventListener("click", closePopup);
}
