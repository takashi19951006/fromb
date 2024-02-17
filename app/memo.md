### box
- mt-[20px]とmb-[20px]が上下にある場合、お互いに打ち消しあって、大きい方が採用される
- 普通にheightとかwidthで大きさ設定してもこれにpadding、margin、borderが設定される。そうじゃなく、トータルの大きさを設定するのがbox-sizeing。tailwindcssで書くとbox-border
- コメントアウトのショートカットキーはcnt+/
### blockとinlineの違い 
- 改行されるかどうか
- w h の挙動(ブロックにはwidth,height効くんだけど、インラインには効かない)
- インラインに対してm,p,b等をかけても聞くんだけど、ブロックのこと考えないので崩れやすい。基本書かない。
- display:inlineでブロックタグでもインラインにできる
- インラインでありながらw,h,m,b,pとかかけたいなーってときはどちらの特性ももつinline-blox使え

### flexbox
これやっとけいぃ
https://flexboxfroggy.com/#ja
-justify-contentは横方向の設定、align-itemsは縦方向の設定
flex-start: アイテムはコンテナーの左側に並びます。
flex-end: アイテムはコンテナーの右側に並びます。
center: アイテムはコンテナーの中央に並びます。
space-between: アイテムはその間に等しい間隔を空けて表示されます。(コンテンツの間なので一番左のやつは左にはスペースない)
space-around: アイテムはその周囲に等しい間隔を空けて表示されます。(周囲なので左右に対しspaceが空く)

### flex-direction
row: アイテムは文章と同じ方向に配置されます。
row-reverse: アイテムは文章と逆の方向に配置されます。
column: アイテムは上から下に向かって配置されます。(clumnになったときjustify-contenとitem-alignは逆になる)
column-reverse: アイテムは下から上に向かって配置されます。

### order
flexの子要素には番号が振られており、小さい順で並べられている。order:1みたいに番号を設定する事で順序を変えられる。defoult=1

### align-self
個別のflexにのみ適応できる
align-itemと同じプロパティ


### flex-wrap
アイテムを強制的に1行にするか折り返すか決めれる
- wrap
- wrap-reverse

### flex-flow
flex-wrapとflex-directionがよく一緒に使われるから一気に設定できるのとしてこれ作られた

### align-content
itemじゃなくて行について指定をするときはこれ

### flexプロパティ
- flex-1とかで割合を指定できる



