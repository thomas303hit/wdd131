/**
 * Place.js - JavaScript for Iceland Country Page
 * Handles dynamic content updates including:
 * - Current year in footer
 * - Last modified date
 * - Wind chill calculation
 */

// Static weather values matching the HTML display
const temperature = 42; // °F
const windSpeed = 5; // mph

/**
 * Calculate wind chill factor using the National Weather Service formula
 * Formula: 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
 * where T = temperature in °F and V = wind speed in mph
 * 
 * @param {number} temp - Temperature in Fahrenheit
 * @param {number} wind - Wind speed in mph
 * @returns {number} Wind chill factor in Fahrenheit
 */
function calculateWindChill(temp, wind) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
}

/**
 * Check if wind chill calculation is viable based on conditions
 * For Imperial (English) units:
 * - Temperature must be <= 50°F
 * - Wind speed must be > 3 mph
 * 
 * @param {number} temp - Temperature in Fahrenheit
 * @param {number} wind - Wind speed in mph
 * @returns {boolean} True if conditions are met for wind chill calculation
 */
function isWindChillViable(temp, wind) {
    return temp <= 50 && wind > 3;
}

/**
 * Update the wind chill display on the page
 * Calculates and displays wind chill if conditions are met,
 * otherwise displays "N/A"
 */
function updateWindChill() {
    const windChillElement = document.getElementById('wind-chill');
    
    if (isWindChillViable(temperature, windSpeed)) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${Math.round(windChill)}°F`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

/**
 * Update the current year in the footer
 */
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

/**
 * Update the last modified date in the footer
 * Displays in a readable format: MM/DD/YYYY HH:MM:SS
 */
function updateLastModified() {
    const modifiedElement = document.getElementById('last-modified');
    const lastModified = document.lastModified;
    modifiedElement.textContent = `Last Modified: ${lastModified}`;
}

/**
 * Initialize all dynamic content when the DOM is fully loaded
 */
function init() {
    updateCurrentYear();
    updateLastModified();
    updateWindChill();
    
    // Log to console for verification
    console.log('Page initialized successfully');
    console.log(`Temperature: ${temperature}°F, Wind Speed: ${windSpeed} mph`);
    console.log(`Wind Chill Viable: ${isWindChillViable(temperature, windSpeed)}`);
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}