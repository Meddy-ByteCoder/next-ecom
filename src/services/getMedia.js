"use client";

export default function getInitialMedia(query) {
    if (typeof window === 'undefined') {
        return null
    }
    else {
        return window.matchMedia(query).matches
    }
}