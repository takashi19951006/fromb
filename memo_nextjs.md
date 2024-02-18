# next.jsの良さ
- 画像読込の最適サイズにして高速化
- configファイルの煩雑な設定が不要
- SSGとSSRは後ほど解説
- file system routingというファイルを作るだけでroutingされる

# next.jsのappでのrouting方法
- app/about/page.jsとすればaboutページできる
- App RouterはReact Server Components(RSC)でレンダリングされているらしい。よーわからんが


# package.json
コマンド情報やライブラリ情報を記述している

# public
静的なファイルの配置場所

# reactの良さ
- 宣言的なview
- コンポーネントベース
コンポーネントベースにすることで、使いまわせるだけじゃなくて、再読み込みを最初化したり、パフォーマンスの高いwebページが作れる

# props
```js
export function About(props) {<h1>{props.title}</h1>}
```
として
```html
<About title="test"/>
```
みたいにして渡す。数値の時はtitle={1111}
ちなみに<About>Foo</About>とかくとAboutのpropsにはcildlen = fooと渡る