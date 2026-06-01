// SSR-safe, no-crash wrapper around the Telegram Web App bridge.
// Every accessor degrades to a no-op / empty value in a normal browser
// where window.Telegram is undefined.

type TelegramThemeParams = Record<string, string | undefined>;

interface TelegramWebApp {
  ready?: () => void;
  expand?: () => void;
  themeParams?: TelegramThemeParams;
  initDataUnsafe?: Record<string, unknown>;
}

interface TelegramNamespace {
  WebApp?: TelegramWebApp;
}

declare global {
  interface Window {
    Telegram?: TelegramNamespace;
  }
}

function getWebApp(): TelegramWebApp | undefined {
  if (typeof window === "undefined") return undefined;
  return window.Telegram?.WebApp;
}

export function isTelegram(): boolean {
  return Boolean(getWebApp());
}

export function ready(): void {
  const wa = getWebApp();
  if (!wa) return;
  try {
    wa.ready?.();
    wa.expand?.();
  } catch {
    /* no-op outside Telegram */
  }
}

export function getThemeParams(): TelegramThemeParams {
  return getWebApp()?.themeParams ?? {};
}

export function getInitDataUnsafe(): Record<string, unknown> {
  return getWebApp()?.initDataUnsafe ?? {};
}
