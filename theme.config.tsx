import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

function Logo() {
  return <span>Olos para Desenvolvedores</span>;
}

function Head() {
  return (
    <>
      <title>Olos para Desenvolvedores</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://www.olos.com.br/wp-content/uploads/2020/03/cropped-android-icon-192x192-1-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://www.olos.com.br/wp-content/uploads/2020/03/cropped-android-icon-192x192-1-192x192.png"
      />
    </>
  );
}

const config: DocsThemeConfig = {
  logo: <Logo />,
  head: <Head />,
  search: {
    placeholder: "Buscar...",
  },
  footer: {
    text: "Olos Tecnologia e Sistemas LTDA.",
  },
  toc: {
    title: "Nesta página",
    extraContent: false,
  },
  feedback: {
    content: "",
  },
  editLink: {
    text: "",
  },
  gitTimestamp: "",
  sidebar: {
    defaultMenuCollapseLevel: -1,
  },
  i18n: [
    { locale: "pt-BR", text: "Português BR" },
    { locale: "es", text: "Español" },
    { locale: "us", text: "English" },
  ],
};

export default config;
