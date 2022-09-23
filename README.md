# 掲示板アプリ

## Tech

* Language

  * TypeScript

* Library

  * React 18
  * UI
    * TailwindCSS v3

  * HTTP Request
    * Axios, Aspida

  * Emoji
    * 
  * Embed

# この課題って…

* 基本的なREST APIの操作ができることが１つ挙げられる

## API仕様書

https://app.swaggerhub.com/apis/INFO_3/BulletinBoardApplication/1.0.0

スレッド一覧の取得方法

```
GET
/threads
掲示板スレッド一覧取得API
掲示板スレッド一覧を取得します。
10件ずつしかデータが返ってこないため、次の10件を取得したい場合はクエリパラメータの offset に何番目のデータまでは取得したのかを指定しなくてはなりません。
例）21件目のデータから取得したい場合は、 /threads?offset=20 となります。
```

* すべてのデータが返ってくるわけではないため、Pagenation機能の実装が必要そう
* このAPIの困ったところとして、最終的に何番まで存在するのかがわからないということが挙げられる。
  * APIに対応した実装であれば…
  * Pagenationにある、`1, 2, ... , n, n + 1 `くらいまであれば良さそうかな
  * nのところには数字を入力できるようにしたいわね

## エラーハンドリング

* Suspense
  * https://speakerdeck.com/taro28/reactnosuspensewoshi-tutafei-tong-qi-chu-li-noerahandoringu
* Error Boundary
  * https://ja.reactjs.org/docs/error-boundaries.html
  * CRAを使ったReactでは開発時デフォルトで有効になっているらしい…
* AxiosError
  *  https://www.hypertextcandy.com/react-error-handling#axios-%E3%81%A7%E3%82%A8%E3%83%A9%E3%83%BC%E6%8D%95%E6%8D%89%E3%82%92%E5%85%B1%E9%80%9A%E5%8C%96
  *  AxiosのエラーをReduxで管理する状態

## 状態管理

* Redux
* Recoil
* Recoilは使ったことあるんだけどね…

* 比較
  * https://qiita.com/yoshinoritera55/items/57a14fc08641631452bc

## 技術的な挑戦

* SWRに挑戦
  * https://zenn.dev/uttk/articles/b3bcbedbc1fd00
  * https://swr.vercel.app/ja
* i18nに挑戦(多言語に対応している必要はないけど、すぐにでも使えるレベルまで落とし込みたい)
  * https://react.i18next.com/
  * Nextjsだとこうやってやるらしい
    * https://zenn.dev/sirosuzume/articles/393b17b21034a7


# こんな機能の付加を目指す

ライバーさんを推していく掲示板アプリを頑張って作ってみる
推しの活動を見やすくするために…

* YouTubeとTwitterのリンクを自動で動画・ツイート埋め込みに置き換える
* 絵文字の量をカウントしてタグのように表示することで、熱量がわかりやすいようにする
  ※ 投稿された文字はカード形式でモバイルでも見やすくする

## OGPに対応しているサイトのプレビューをカード形式にして表示させる機能 [時間があれば実装]

* Vercelを使用したServerless Functionが存在する
  * https://kotsukotsu.work/tech/2020-09-13-vercel-%E3%82%A6%E3%82%A7%E3%83%96%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AEogp%E6%83%85%E5%A0%B1%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B-serverless-functions-%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B/

* ほか記事
  * https://qiita.com/hinastory/items/05baa8aec64a75026b3a
* クライアント側に機能をもたせるなら、OGP Scraperを使用してあげるのが良さそう
  * https://www.npmjs.com/package/open-graph-scraper
* SSRかけるなら、Next.jsのAPI機能を用いて作ってあげるのが良さそう

* これで、OGPの情報を取得し、取得された結果を元にカードをコーディングしてあげるといった形

## YouTubeの埋め込み機能

* これはライブラリを使用してかんたんに実装できそう
  * https://dabohaze.site/react-youtube/

## Twitterの埋め込み機能

* TwitterのURLを発見次第、それらを埋め込みに変換する作業を行う
* ライブラリは存在するが、更新が8ヶ月前…
  * https://www.npmjs.com/package/react-twitter-embed
* Next.jsではEmbed時に読み込まれるScriptのロードを抑えたりして、独自の表示形式に置き換えるようなライブラリも存在するらしく、楽しそう
  * https://static-tweet.vercel.app/

## Emojiを数える機能

* punycode.jsと呼ばれるライブラリを使えば一発のような気もしたのだが、このライブラリの最後の更新が4年前だったので、使うの怖いな…となった

* Emojiかどうか判定する機能として、Emojiだけを示す正規表現を使用し、Emojiだけを抽出できないかなと考えた

  * あった。((((；ﾟДﾟ))))ｶﾞｸｶﾞｸﾌﾞﾙﾌﾞﾙ
    Mozila恐るべし…

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes

  * https://stackoverflow.com/questions/70401560/what-is-the-difference-between-emoji-presentation-and-extended-pictographic

* ここに書かれているような、長過ぎる正規表現を書くのはあまり好ましくない

  * https://blog.katsubemakito.net/html5/emoji2htmlentity

* Emojiってなんだろう、めちゃめちゃ複雑だね…

  * https://qiita.com/_sobataro/items/47989ee4b573e0c2adfc