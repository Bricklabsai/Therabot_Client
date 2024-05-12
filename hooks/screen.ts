export function useScreenSize() {
    const isMobile = window.innerWidth < 768;
    return { isMobile }
}