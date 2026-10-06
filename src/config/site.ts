import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://herodrigues.dev/",
    author: "Herinson Rodrigues",
    desc: "Personal website and blog of Herinson Rodrigues, software engineer.",
    title: "Herinson Rodrigues",
    ogImage: "avatar.png",
    postPerPage: 5,
    favicon: "/favicon.png",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: true,
    showRSSInFooter: true,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "40e52803-0d6b-4f0d-8d7a-28d13a1d0bed", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "G-9YTYVBE9Q6",
    // Umami Analytics configuration
    umami: umami
};
