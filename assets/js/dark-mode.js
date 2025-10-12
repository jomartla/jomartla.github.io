/**
 * Dark Mode Toggle for Jekyll Blog
 * Provides smooth dark/light mode switching with localStorage persistence
 */

(function() {
    'use strict';

    // Dark mode state management
    const DarkMode = {
        // Returns user's stored preference value or null if none
        getStoredPreference: function() {
            return localStorage.getItem('darkMode');
        },
        // Check if dark mode is currently active (based on DOM attribute)
        isEnabled: function() {
            return document.documentElement.getAttribute('data-theme') === 'dark';
        },

        // Check system preference
        getSystemPreference: function() {
            return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        },

        // Initialize dark mode based on saved preference or system preference
        init: function() {
            const stored = this.getStoredPreference();
            const hasStored = stored !== null;
            const systemPreference = this.getSystemPreference();
            const shouldEnableDark = hasStored ? (stored === 'true') : systemPreference;

            // If user has not chosen yet, apply without persisting
            this.setTheme(shouldEnableDark, { persist: hasStored });
            this.createToggleButton();
            this.updateToggleIcon(shouldEnableDark);
        },

        // Set the theme
        setTheme: function(isDark, options) {
            const html = document.documentElement;
            const persist = !options || options.persist !== false;

            if (isDark) {
                html.setAttribute('data-theme', 'dark');
                if (persist) localStorage.setItem('darkMode', 'true');
            } else {
                html.setAttribute('data-theme', 'light');
                if (persist) localStorage.setItem('darkMode', 'false');
            }
        },

        // Toggle dark mode
        toggle: function() {
            const isCurrentlyDark = this.isEnabled();
            this.setTheme(!isCurrentlyDark, { persist: true });
            this.updateToggleIcon(!isCurrentlyDark);
        },

        // Create the toggle button
        createToggleButton: function() {
            // Check if button already exists
            if (document.querySelector('.dark-mode-toggle')) {
                return;
            }

            const button = document.createElement('button');
            button.className = 'dark-mode-toggle';
            button.setAttribute('aria-label', 'Toggle dark mode');
            button.setAttribute('title', 'Toggle dark mode');
            
            // Add click event listener
            button.addEventListener('click', () => {
                this.toggle();
            });

            // Add to page
            document.body.appendChild(button);
        },

        // Update toggle button icon
        updateToggleIcon: function(isDark) {
            const button = document.querySelector('.dark-mode-toggle');
            if (!button) return;

            // Clear existing content
            button.innerHTML = '';

            if (isDark) {
                // Sun icon for light mode (when in dark mode, show sun to switch to light)
                button.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                `;
            } else {
                // Moon icon for dark mode (when in light mode, show moon to switch to dark)
                button.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                `;
            }
        },

        // Listen for system theme changes
        listenForSystemChanges: function() {
            if (!window.matchMedia) return;
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handler = (e) => {
                // Only update if user hasn't manually set a preference
                if (localStorage.getItem('darkMode') === null) {
                    this.setTheme(e.matches, { persist: false });
                    this.updateToggleIcon(e.matches);
                }
            };

            if (typeof mediaQuery.addEventListener === 'function') {
                mediaQuery.addEventListener('change', handler);
            } else if (typeof mediaQuery.addListener === 'function') {
                mediaQuery.addListener(handler);
            }
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            DarkMode.init();
            DarkMode.listenForSystemChanges();
        });
    } else {
        DarkMode.init();
        DarkMode.listenForSystemChanges();
    }

    // Expose DarkMode to global scope for debugging
    window.DarkMode = DarkMode;

})();
