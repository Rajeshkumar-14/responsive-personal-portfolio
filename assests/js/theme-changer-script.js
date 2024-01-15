$(document).ready(function () {
    // Function to apply styles based on theme START ---------->
    function applyThemeStyles(preferredDarkMode) {
        var themeText = $('.navbar-theme-text');
        var themeIcon = $('.navbar-theme-icon');
        var buttons = $('.btn-outline-custom');
        var socialIcons = $('.contact-social-icon');
        var contactButtons = $('.contact-buttons a');

        if (preferredDarkMode) {
            // Dark Mode
            themeText.text('Dark Theme');
            themeIcon.removeClass('fa-lightbulb fa-sun').addClass('fa-moon');
            $('body').addClass('dark-theme').removeClass('light-theme');
            $('.card').addClass('text-light').removeClass('text-dark');
            $('form label').addClass('text-dark');
            $('.navbar').addClass('navbar-dark').removeClass('navbar-light');

            buttons.removeClass('btn-outline-custom-light').addClass('btn-outline-custom-dark');
            socialIcons.removeClass('contact-social-icon-light').addClass('contact-social-icon-dark');
            contactButtons.removeClass('contact-buttons-light').addClass('contact-buttons-dark');
        } else {
            // Light Mode
            themeText.text('Light Theme');
            themeIcon.removeClass('fa-moon').addClass('fa-lightbulb fa-sun');
            $('body').addClass('light-theme').removeClass('dark-theme');
            $('.card').addClass('text-dark').removeClass('text-light');
            $('form label').removeClass('text-dark');
            $('.navbar').addClass('navbar-light').removeClass('navbar-dark');

            buttons.removeClass('btn-outline-custom-dark').addClass('btn-outline-custom-light');
            socialIcons.removeClass('contact-social-icon-dark').addClass('contact-social-icon-light');
            contactButtons.removeClass('contact-buttons-dark').addClass('contact-buttons-light');
        }
    }

    // Function to get user's system default theme
    function getUserSystemTheme() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Apply theme styles on page load
    applyThemeStyles(getUserSystemTheme());

    // Theme toggle click events
    $('.toggle-light').click(function () {
        applyThemeStyles(false);
        saveThemePreference('light');
    });

    $('.toggle-dark').click(function () {
        applyThemeStyles(true);
        saveThemePreference('dark');
    });

    $('.toggle-default').click(function () {
        const systemTheme = getUserSystemTheme();
        applyThemeStyles(systemTheme);
        saveThemePreference(systemTheme ? 'dark' : 'light');
    });

    // Save theme preference to localStorage
    function saveThemePreference(theme) {
        localStorage.setItem('themePreference', theme);
    }

    // Retrieve theme preference from localStorage
    const savedTheme = localStorage.getItem('themePreference') || 'default';

    // Set initial theme based on saved preference
    if (savedTheme === 'light') {
        $('.toggle-light').click();
    } else if (savedTheme === 'dark') {
        $('.toggle-dark').click();
    } else {
        $('.toggle-default').click();
    }
    // Function to apply styles based on theme END ---------->
});