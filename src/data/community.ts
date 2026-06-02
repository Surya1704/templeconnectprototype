/** FaithConnect devotee community — update the Telegram URL when the channel is live. */
export const FAITHCONNECT_COMMUNITY = {
  /** WhatsApp invites are issued via the contact section until a public group link is published. */
  whatsapp: "/about#community",
  telegram: "https://t.me/faithconnect_in",
  whatsappLabel: "Join WhatsApp community",
  telegramLabel: "Join Telegram channel",
} as const;

export function isExternalCommunityUrl(url: string): boolean {
  return url.startsWith("http");
}
