'use strict';

const logoStage = document.getElementById('logoStage');
const glowButton = document.getElementById('glowButton');
const buttonText = document.getElementById('buttonText');
const interactionNote = document.getElementById('interactionNote');
const year = document.getElementById('year');

// Keep the footer year up to date.
year.textContent = new Date().getFullYear();

// Toggle a soft blue glow around the original logo image.
glowButton.addEventListener('click', () => {
    const isPowered = logoStage.classList.toggle('is-powered');
    glowButton.setAttribute('aria-pressed', String(isPowered));
    buttonText.textContent = isPowered ? 'Deactivate logo glow' : 'Activate logo glow';
    interactionNote.textContent = isPowered
        ? 'PCEASY FIX is powered up.'
        : 'A little extra power for your brand.';
});
