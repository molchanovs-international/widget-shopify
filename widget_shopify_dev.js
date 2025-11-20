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

/* Mobile icon size */
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

/* ПОПАП — ДЕСКТОП ( > 768px ) */
#feedback-popup {
    display: none;
    position: fixed;

    top: 40px;                     /* 40px сверху */
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    max-width: 800px;             /* максимальная ширина на десктопе */

    height: calc(100vh - 80px);   /* 40 сверху + 40 снизу */

    background: white;
    border-radius: 0;             /* квадратные углы */

    z-index: 999999;
    overflow: hidden;
    padding: 0;
    box-sizing: border-box;
}

/* iframe занимает всю область */
#feedback-iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
}

/* Кнопка закрытия */
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

/* МОБИЛЬНАЯ ВЕРСИЯ (≤ 768px)
   Попап занимает ВСЮ ширину и ВСЮ высоту экрана */
@media (max-width: 768px) {
    #feedback-popup {
        top: 0;
        left: 0;
        transform: none;

        width: 100vw;             /* ширина = ширине экрана */
        height: 100vh;            /* высота = высоте экрана */
        max-width: none;

        border-radius: 0;         /* углы квадратные */
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
