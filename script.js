document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("[data-target]");
    const pages = document.querySelectorAll(".page-view");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetPageId = tab.getAttribute("data-target");

            // 1. Remove active state from all tab buttons
            tabs.forEach(t => t.classList.remove("active"));
            
            // 2. Hide all page views
            pages.forEach(p => p.classList.remove("active"));

            // 3. Set active classes to the clicked element and its paired page frame
            const targetPage = document.getElementById(targetPageId);
            if (targetPage) {
                targetPage.classList.add("active");
            }
            
            // Highlight the correct tab button
            const activeNavbarButton = document.querySelector(`button[data-target="${targetPageId}"]`);
            if (activeNavbarButton) {
                activeNavbarButton.classList.add("active");
            }

            // Scroll smoothly back to top on tab change
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});