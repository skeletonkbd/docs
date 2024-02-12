export const SITE = {
  title: 'SkeletonKBD Doc',
  description: 'スケルトンキーボードのドキュメントサイトです。  ',
  defaultLanguage: 'en-us',
} as const

export const OPEN_GRAPH = {
  image: {
    src: 'https://docs.skeletonkbd.com/assets/f68/f01.jpg',
    alt:
      'astro logo on a starry expanse of space,' +
      ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'skeletonkbd',
}

export const KNOWN_LANGUAGES = {
  日本語: 'ja',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: 'skeletonkbd',
  appId: '7KTK8LCAXO',
  apiKey: '1042a6c3601f5a28b69c21baddedca41',
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  ja: {
    ビルドガイド: [
      { text: 'SkeletonNumPad', link: 'ja/skeletonnumpad' },
      { text: 'Skeleton68', link: 'ja/skeleton68' },
      { text: 'Frost68 & Clear68', link: 'ja/frost68' },
      { text: '🚧 Skeleton8', link: 'ja/skeleton8' },
    ],
    カスタマイズ: [
      { text: 'スタビライザーの取り付け', link: 'ja/install-stabilizer' },
      {
        text: 'キーマップのカスタマイズ ',
        link: 'ja/keymap',
      },
      {
        text: '効率の良いルブのやり方（リニアキースイッチ編） ',
        link: 'ja/how-to-lube',
      },
    ],
  },
}
