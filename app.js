let dragged;

function openApp(urlScheme) {
    window.location.href = urlScheme;
}

function adjustLayout() {
    if (window.innerWidth < 600) {
        document.body.style.backgroundColor = "#f0f0f0";
    } else {
        document.body.style.backgroundColor = "#ffffff";
    }
}

function filterApps() {
    const query = document.getElementById('search').value.toLowerCase();
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        const altText = button.getAttribute('alt').toLowerCase();
        if (altText.includes(query)) {
            button.style.display = 'inline-block';
        } else {
            button.style.display = 'none';
        }
    });
}

function drag(event) {
    dragged = event.target;
}

document.getElementById('appContainer').addEventListener('dragover', function(event) {
    event.preventDefault();
});

document.getElementById('appContainer').addEventListener('drop', function(event) {
    event.preventDefault();
    if (event.target.className.includes('button')) {
        event.target.parentNode.insertBefore(dragged, event.target.nextSibling);
    }
});

window.onload = adjustLayout;
window.onresize = adjustLayout;