import { createI18n } from "vue-i18n";
import en from "./en";
import zh from "./zh";

export const i18n = createI18n({
  legacy: false,
  locale: "en", // 默认英文
  fallbackLocale: "en",
  messages: { en, zh },
  globalInjection: true,
});
