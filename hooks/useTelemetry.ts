"use client"
import { useEffect } from 'react';


const useTelemetry = ()  => {
    const telemetryId = process.env.NEXT_PUBLIC_TELEMETRY_ID || undefined;

    useEffect(() => {

        if (telemetryId === undefined) {
            console.error("Telemetry ID missing")
        }

        if (document.getElementById(`pixel-telemetry-${telemetryId}`)) return;


        const script = document.createElement('script');
        script.id = `pixel-telemetry-${telemetryId}`;
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src = `https://connect.facebook.net/en_US/fbevents.js`;
        document.head.appendChild(script);

        // Initialize Pixel with the given ID
        script.onload = () => {
            const currentWindow = window as any
            if (!currentWindow.fbq) {
                currentWindow.fbq = function () {
                    (currentWindow.fbq as any).queue = (currentWindow.fbq as any).queue || [];
                    (currentWindow.fbq as any).queue.push(arguments);
                };
                (currentWindow.fbq as any).loaded = true;
            }
            currentWindow.fbq('init', telemetryId);
            currentWindow.fbq('track', 'PageView');
        };

        // fallback
        const noscript = document.createElement('noscript');
        const img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.style.display = 'none';
        img.src = `https://www.facebook.com/tr?id=${telemetryId}&ev=PageView&noscript=1`;
        noscript.appendChild(img);
        document.body.appendChild(noscript);

        // cleanup
        return () => {
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
            if (noscript.parentNode) {
                noscript.parentNode.removeChild(noscript);
            }
        };
    }, [telemetryId]);

    // custom event tracking
    const sendEvent = (eventName: string, eventData?: Record<string, any>) => {
        const currentWindow = window as any;
        if (currentWindow.fbq) {
            currentWindow.fbq('track', eventName, eventData)
        }
    }

    return sendEvent
};

export default useTelemetry;