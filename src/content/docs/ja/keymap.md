---
title: 'キーマップのカスタマイズとLEDの調整'
---

当店で販売しているキーボードは [Remap](https://remap-keys.app/) と [VIA](https://www.caniusevia.com/) に対応しています。これらのツールを使うことでキーマップの変更や LED の色・明るさの調整などのカスタマイズをすることができます。

※ツールの開発者様へ当店のキーボード特有の問題についての問い合わせは行わないようお願いします。

以下の作業は、キーボードを USB ケーブルで接続した状態で行います。

## Remap を使用する

https://remap-keys.app/ にブラウザでアクセスして、「START REMAP FOR YOUR KEYBOARD」のボタンをクリックします。

<img src="/assets/km/remap01.webp">

「+ KEYBOARD」と書かれている箇所をクリックします。

<img src="/assets/km/remap02.webp">

「remap-keys.app が HID デバイスへの接続を要求しています」と表示されるので、その中からカスタマイズしたいキーボードを選択します。

<img src="/assets/km/remap03.webp">

すると、上記のような表示になりカスタマイズできる状態になります。


## VIA を使用する


[https://www.caniusevia.com/](https://www.caniusevia.com/) をブラウザで表示します。`Start Now` をクリックします。

<img src="/assets/f68/via01.jpg">

`Authorize device +`をクリックします。

<img src="/assets/f68/via02.jpg">

USB ケーブルで接続していると以下のように表示されますので、対象のキーボードを選択して`接続`をクリックします。

<img src="/assets/f68/via03.jpg">


登録状況はキーボードによって異なります。登録されていない場合は、以下のJSONファイルを使用することでキーマップの変更ができるようになります。

- [SkeletonNumPad 用 JSON ファイル](https://drive.google.com/file/d/1pQhZULNao3KCcN_z6ZrD_KbMdGfBT2Vr/view?usp=sharing)
- [Skeleton68 用 JSON ファイル](https://drive.google.com/file/d/11CGPhgNs7ZOR09w9KxDP_yWmUknH1Uiy/view?usp=sharing)
- [Skeleton68(Underglow 版)用 JSON ファイル](https://drive.google.com/file/d/1PmrUfNR0czD-O7-eFb9FS45spAAfreRE/view?usp=sharing)
- [Frost68 用 JSON ファイル](https://drive.google.com/file/d/1xRvklHlTBu-B7jlhAMFc_c9hrNAf6gyK/view?usp=sharing)

上部のメニューから`DESIGN`のアイコンをクリックして、設定用 JSON ファイルを画面中央にドラッグアンドドロップします。

<img src="/assets/f68/via05.jpg">

これでキーマップのカスタマイズできる状態になります。

<img src="/assets/f68/via04.jpg">
