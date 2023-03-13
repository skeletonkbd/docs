---
title: 'WindowsでIMEのオン/オフを切り替えるキーを設定する'
description: '日本語入力と英字入力を切り替えるキーをそれぞれ設定する方法を紹介します。'
---

Windows 環境で英語キーボードを使う場合、日本語入力に切り替えるには `` ALT + `  `` が標準です。設定をすると`Ctrl + Space` または `Shift + Space` で切り替えることもできます。

ですが、Mac のように IME のオン/オフをそれぞれ別のキーに割り当てたいという方もいると思います。このページではそのための設定方法をご紹介します。

### Microsoft IME の場合

IME のオン/オフを別のキーに割り当てるためには、 `変換`/`無変換`を使用する必要があるのですが、そもそも英語キーボードの場合は`変換`/`無変換`が使えません。そこで、[PowerToys](https://github.com/microsoft/PowerToys 'PowerToys') を使って`LNG1`と`LNG2`に該当するキーコードを`変換`と`無変換`に置き換えるという手順が必要になります。

### Google 日本語入力の場合

設定の自由度が高いため、`変換`/`無変換`を使用しなくても、普段使用しないキー（`F13` / `F14`など）で代用することもできます。その場合は以下の PowerToys をインストールする手順は省略しても構いません。

## キーマップを確認

以下は Frost68 のデフォルトのキーマップです。`LNG1`と`LNG2`を IME のオン/オフに使いたいところですが、残念ながら Windows では動作しません。以下の設定が必要になります。

<img src="/assets/f68/frost68_keymap.png">

Skelelton68 シリーズの場合は、同じ位置のキーが `F13` と `F14` に割り当てられているので以下を読みかえてください。

## 手順 1: PowerToys のインストールと設定

[こちらのページ](https://github.com/microsoft/PowerToys/releasess)から PowerToys をダウンロードして、インストールします。

インストールが完了したら起動して、左側のメニューから`Keyboard Manager`を開きます。

<img src="/assets/ime/pt1.jpg">

`キーの再マップ`をクリックして、以下の通りに設定します。これで`LNG1`が`変換`、`LNG2`が`無変換`に置き換わります。

<img src="/assets/ime/pt2.jpg">

## 手順 2: IME の設定

`変換`/`無変換`で IME のオン/オフを切り替えるために、IME 側の設定をやっていきます。

### Microsoft IME の設定

Microsoft IME の設定画面で、以下の通りに設定します。

<img src="/assets/ime/msime.jpg">

### Google 日本語入力 の設定

Googgle 日本語入力のプロパティで、`キー設定の選択`で`編集`をクリックします。

<img src="/assets/ime/googlel1.jpg">

以下の 4 項目を設定します。PowerToys を省略している場合は他のキーに置き換えてください。

<img src="/assets/ime/googlel2.jpg">

| モード       | 入力キー         | コマンド     |
| ------------ | ---------------- | ------------ |
| 直接入力     | Henkan(変換)     | IME を有効化 |
| 入力文字なし | Henkan(変換)     | IME を有効化 |
| 直接入力     | Muhenkan(無変換) | IME を無効化 |
| 入力文字なし | Muhenkan(無変換) | IME を無効化 |

以上で設定作業は完了です。あくまで一例ですので、お好みに合わせて調整してください。
