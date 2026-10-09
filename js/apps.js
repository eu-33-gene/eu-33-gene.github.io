// アプリ一覧のデータ。ここに追加・編集するだけでページに反映されます。
//   name        アプリ名
//   description 一言の説明
//   url         公開URL
//   image       カード上部に表示する画像（任意。OGP画像を images/ に保存して指定）
//   color       画像がないときのアイコン背景色（任意）
const APPS = [
  {
    name: "Queueue",
    description: "QRコードを貼るだけで始められる、会員登録不要・無料の順番待ちサービス。5言語対応。",
    url: "https://queueue.net/",
    image: "images/queueue.webp",
    color: "#2f6fed",
  },
  {
    name: "Venn Maker",
    description: "集合どうしの関係を選ぶだけでベン図を自動生成。SVG / PNG / Mermaid / draw.io で書き出し可能。",
    url: "https://vennmaker.net/",
    image: "images/vennmaker.webp",
    color: "#7c4dce",
  },
  {
    name: "FIBA Ranking",
    description: "バスケットボール世界ランキングの順位とポイントの仕組みを、試合結果からわかりやすく解説。",
    url: "https://fiba-ranking.com/",
    image: "images/fiba-ranking.webp",
    color: "#e0682b",
  },
  {
    name: "東京でんしゃマップ",
    description: "東京の電車の路線と駅を地図で見られるマップ（試作版）。駅をえらぶと、着くまでの時間のめやすがわかります。",
    url: "https://map.toiro.app/",
    image: "images/tokyo-densha-map.webp",
    color: "#2e9e4f",
  },
];
