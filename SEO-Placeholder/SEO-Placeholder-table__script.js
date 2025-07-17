const screenWidth = window.screen.width;
let mobList = document.querySelector('.seo-menu-wrapper');

let mobListHeightClose = parseInt(window.getComputedStyle(document.querySelector(".ul-drop-down-mobile ul"),
    null).height);
let mobListMarginTopHeight = parseInt(window.getComputedStyle(document.querySelector(
    ".seo-menu-wrapper"), null).marginTop);

if (screenWidth <= 767) {
    mobList.style.height = mobListHeightClose + mobListMarginTopHeight + 'px';
}

function SeoShowMore() {
    if (document.querySelectorAll(".seo-menu-container").length > 0) {

        const btnText = document.querySelector('.seo-menu-container .seo-btn-text');
        const btnAction = document.querySelector('.seo-menu-container .seo-btn');
        let btnArrow = document.querySelector(".seo-arrow-img");

        let heightLi;
        if (document.querySelector('.ul-dropdown--desktop')) {
            heightLi =
                Math.ceil(document.querySelector('.ul-dropdown--desktop').querySelectorAll("li").length) *
                (parseInt(window.getComputedStyle(document.querySelector('.ul-dropdown--desktop li'), null)
                    .height));
            btnAction.style.display = "flex";
            mobList.style.marginBottom = "0";
        }

        btnAction.addEventListener('click', () => {

            if (btnText.classList.contains('opened')) {
                btnText.textContent = 'View more';
                console.log(btnArrow.style.transition);
                btnArrow.style.transform = "rotate(90deg)";
            } else {
                btnText.textContent = 'View less';
                btnArrow.style.transform = "rotate(270deg)";
            }
            btnText.classList.toggle('opened');

            if (screenWidth <= 767) {

                if (mobList.classList.contains('drop--show-mob')) {
                    mobList.style.height = mobListHeightClose + mobListMarginTopHeight + 'px';
                } else {
                    mobList.style.height = "auto"
                }
                document.querySelector('.seo-menu-wrapper').classList.toggle(
                    'drop--show-mob');

            } else {
                document.querySelectorAll('.ul-dropdown--desktop').forEach(i => i.classList.toggle(
                    'drop--show-desk'));
                if (document.querySelector('.ul-dropdown--desktop').classList.contains(
                    "drop--show-desk")) {

                    document.querySelectorAll(".ul-dropdown--desktop.drop--show-desk").forEach((
                        i) => {
                        i.style.minHeight = heightLi + 'px';
                    })
                } else {

                    document.querySelectorAll(".ul-dropdown--desktop").forEach((
                        i) => {
                        i.style.minHeight = '0px';
                    })
                }

            }

        });

    }
}


SeoShowMore();
