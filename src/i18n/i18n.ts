import en from "./translations/en.json";
import i18n, { TOptions } from "i18next";
import { initReactI18next } from "react-i18next";

type IsPrimitive<T> = T extends object ? false : true;

type LeafNodes<T, K extends string = ""> = {
    [P in keyof T]: IsPrimitive<T[P]> extends true
        ? // @ts-ignore
          `${K}${K extends "" ? "" : "."}${P}`
        : // @ts-ignore
          LeafNodes<T[P], `${K}${K extends "" ? "" : "."}${P}`>;
}[keyof T];

type TranslationKeys = LeafNodes<typeof en>;

declare module "i18next" {
    interface TFunction {
        (key: TranslationKeys, options?: TOptions): string;
    }
    interface CustomTypeOptions {
        lng: "en";
        resources: TranslationKeys;
        keySeparator: ".";
        nsSeparator: ".";
        returnNull: false;
    }
}

export const resources = {
    en: { translation: en },
} as const;

i18n.use(initReactI18next).init({
    resources,
    lng: navigator.language
        ? navigator.language === "ar"
            ? "ar"
            : "en"
        : "en",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
