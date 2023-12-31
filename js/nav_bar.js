

function navBar() {
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = `
    <!-- Navigation -->
    <nav class="navbar" id="mainNav">
    <div class="container">
        <ul class="navbar-items">
            <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="../index.html">Home</a>
            </li>  
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../pages/research.html">Research</a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../pages/experience.html">Experience</a>
            </li>
            <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="../pages/outreach.html">Outreach</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    `;

    document.body.prepend(headerContainer);
}