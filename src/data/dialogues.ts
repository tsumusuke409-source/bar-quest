// ─── dialogues.ts ────────────────────────────────────────────────────────────
// Lecture dialogue data for Bar Quest - Spirits of the Night

export const DIALOGUES = [
  // ─── Chapter 1 ─────────────────────────────────────────────────────────────
  {
    key: 'lec_1_1',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'よく来てくれたね。ここはバー「ムーンライト」だ。私はマスターと呼んでくれ。今日から君にバーテンダーの世界を教えていこう。',
        highlight: 'バーテンダー',
      },
      {
        speaker: 'player' as const,
        expression: 'happy' as const,
        text: 'よろしくお願いします、マスター！バーテンダーって、カクテルを作るだけじゃないんですよね？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'その通りだ。バーテンダーは飲み物を提供するだけでなく、お客様がくつろげる空間と時間を演出するプロだ。接客、会話、知識——全てが求められる。',
        highlight: '空間と時間を演出',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: 'バーには「バー」「ラウンジバー」「スポーツバー」など様々な種類がある。それぞれ雰囲気や提供するサービスが異なる。まずはバーというものを理解することが大切だ。',
        highlight: 'バーの種類',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'プロのバーテンダーは「ホスピタリティ」の塊だ。ホスピタリティとはお客様への心からのもてなし精神——期待を超えるサービスを提供する姿勢のことだよ。',
        highlight: 'ホスピタリティ',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ところで「カクテル」という言葉の由来って何ですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '諸説あるが、最も有力なのはフランス語の「コクテル（雄鶏の尾）」から来たという説だ。混合した酒の色が雄鶏の尾羽のように鮮やかだったことに由来するとされている。',
        highlight: 'コクテル',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'カクテルには「ショートドリンク」と「ロングドリンク」がある。ショートドリンクは90ml以下の小さいグラスで提供する高濃度なカクテル、ロングドリンクは炭酸やジュースで割って大きなグラスで出すカクテルだ。',
        highlight: 'ショートドリンク',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '日本では「未成年者飲酒禁止法」により、20歳未満への飲酒提供は禁止されている。バーテンダーには年齢確認の義務があり、これは絶対に守らなければならない。',
        highlight: '未成年者飲酒禁止法',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'バーの営業には知っておくべき用語がある。「ラストオーダー」は閉店前に最後の注文を受け付ける時刻のこと。「チャージ（席料）」は入店時に支払う基本料金で、おつまみが含まれることもある。',
        highlight: 'ラストオーダー',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '「ウェルカムドリンク」は到着したお客様に無料または格安で提供し歓迎の意を示す飲み物。「オープンバー」は結婚式や会社パーティーで参加者が自由に注文できる飲み放題形式だ。',
        highlight: 'ウェルカムドリンク',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '「責任ある飲酒提供（RSA）」も大切だ。酔っているお客様への追加提供を断り、安全な帰宅を促すこと——飲酒運転を防ぐ行動もバーテンダーの責任だよ。',
        highlight: '責任ある飲酒提供',
      },
      {
        speaker: 'player' as const,
        expression: 'normal' as const,
        text: 'バーテンダーは技術だけでなく、法律も社会的責任も知らないといけないんですね。',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'その通りだ。では最初のテストをしてもらおう。今日学んだことを確認するよ！',
        highlight: '最初のテスト',
      },
    ],
  },
  {
    key: 'lec_1_2',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'さて、今日はバーテンダーの道具について学んでもらおう。道具を使いこなせてこそ、一人前のバーテンダーだ。',
        highlight: '道具',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'まずは「シェーカー」だ。材料を振り混ぜて冷やすための道具で、バーテンダーの象徴とも言える。スタンダードな「コブラーシェーカー」はボディ・ストレーナー・キャップの三つのパーツから成る。',
        highlight: 'シェーカー',
        visual: 'shaker',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'シェーカーにはもう一種類、「パリジャン（フレンチ）シェーカー」がある。ボディとキャップの二つのパーツのみで、ストレーナーは別に使う必要がある。プロのバーテンダーはこちらを好むことが多い。',
        highlight: 'パリジャン',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '次に「バースプーン」だ。長い柄にらせん状のねじりがある特殊なスプーンで、ミキシンググラスでのステアに使う。柄をひねりながらスムーズに液体を混ぜるのがコツだ。',
        highlight: 'バースプーン',
        visual: 'bar_spoon',
      },
      {
        speaker: 'player' as const,
        expression: 'surprised' as const,
        text: 'なるほど！メジャーカップというのはどう使うんですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「メジャーカップ（ジガー）」は材料の量を正確に計るための道具だ。標準的なサイズは30mlと45mlの両端がある。正確な計量こそがおいしいカクテルの基本だよ。',
        highlight: 'メジャーカップ',
        visual: 'jigger',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ミキシンググラス」はマティーニやマンハッタンなど、アルコールのみのカクテルをステアする際に使う。透明感のある仕上がりが求められる時に使用する大きな厚手のグラスだ。',
        highlight: 'ミキシンググラス',
        visual: 'mixing_glass',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「マドラー（ペストル）」はグラスの中でミント、フルーツ、砂糖などを押しつぶして香りや味を引き出す棒状の道具だ。モヒートのミントやオールドファッションドの砂糖に使う。強く潰しすぎると苦みが出るので加減が大切。',
        highlight: 'マドラー',
        visual: 'muddler',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ホーソン・ストレーナー」はコイル状のバネが付いた金属製のこし器だ。シェーカーやミキシンググラスの口に装着して、氷や果物の種などを濾しながらカクテルをグラスに注ぐ。',
        highlight: 'ストレーナー',
        visual: 'strainer',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '「アイスピック」は大きな氷塊から必要な大きさの氷を切り出すための金属製の錐だ。透明な大きなクリアアイスを作る際に使う。鋭利な道具なので取り扱いには十分注意すること。',
        highlight: 'アイスピック',
        visual: 'ice_pick',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「カクテルピン（ジュルプストロー）」はオリーブ、チェリー、カクテルオニオンなどのガーニッシュをマティーニグラスに飾るための細い金属製またはプラスチック製の針だ。',
        highlight: 'カクテルピン',
        visual: 'cocktail_pick',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '最後に「ゼスター」と「チャンネルナイフ」の違いを覚えておこう。ゼスターは柑橘の外皮を細かくすりおろす道具。チャンネルナイフはレモンなどの皮を長い帯状に切り出し、グラスに飾るツイストを作る。',
        highlight: 'チャンネルナイフ',
        visual: 'zester',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'こんなに道具があるんですね。全部覚えられるかな…',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '最初は大変だが、使っていくうちに自然と身につく。まずは今日学んだ道具のテストをしよう！',
        highlight: '道具のテスト',
      },
    ],
  },
  {
    key: 'lec_1_3',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '今日はグラスについて学ぼう。正しいグラスに正しいカクテルを提供することは、バーテンダーの基本中の基本だ。',
        highlight: 'グラス',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'まず「カクテルグラス（マティーニグラス）」——逆三角形のV字型で脚が長いグラスだ。マティーニなど冷たいショートカクテルに使う。脚が長いことで手の温度が飲み物に伝わりにくいという利点がある。',
        highlight: 'カクテルグラス',
        visual: 'cocktail',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ロックグラス」はオールドファッションドグラスとも呼ばれる。背が低くどっしりとした形で、スコッチのオンザロックやオールドファッションドカクテルに使う。',
        highlight: 'ロックグラス',
        visual: 'rocks',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ハイボールグラスとコリンズグラスの違いは何ですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ハイボールグラス」は200〜300ml程度の細長いグラスでハイボールや炭酸カクテルに使う。「コリンズグラス」はさらに背が高く細長く容量も多い（300〜400ml）。トムコリンズなどのロングカクテル用だ。',
        highlight: 'ハイボールグラス',
        visual: 'highball',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「シャンパンフルート」は細長い形状で炭酸が長く保持され、泡立ちも美しい。かつて広く使われていたソーサー型（クープ）は炭酸が逃げやすいため、現代では一般的ではなくなっている。',
        highlight: 'シャンパンフルート',
        visual: 'champagne_flute',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「マルガリータグラス」はすり鉢状に広がった縁が特徴的で、塩（スノースタイル）をつけるのに適した形状だ。フローズンマルガリータにも使われる。',
        highlight: 'マルガリータグラス',
        visual: 'margarita',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ショットグラス」の容量は通常30〜45mlだ。テキーラやウイスキーをストレートで飲むための小さいグラスで、バーショット（1ショット＝30ml）の基準にもなっている。',
        highlight: 'ショットグラス',
        visual: 'shot',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ワイングラス」はステム（脚）部分を持つのが正しい持ち方だ。ボウル（球形の部分）を持つと手の温度がワインに伝わり、適切な温度が保てなくなる。',
        highlight: 'ワイングラス',
        visual: 'wine',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'モスコミュールは「銅製マグカップ」で提供するのが伝統的なスタイルだ。銅が飲み物を素早く冷やし、特有の金属の香りが独特の風味を加えると言われている。',
        highlight: '銅製マグカップ',
        visual: 'copper_mug',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'アイリッシュコーヒーには「取っ手のある耐熱ガラスのマグカップ（ゴブレット型）」を使う。熱いコーヒーとウイスキー、生クリームを層状に提供するのに適した形状だ。',
        highlight: 'アイリッシュコーヒー',
        visual: 'irish_coffee',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '最後に「チリング（グラスの事前冷却）」を覚えておこう。カクテルをグラスに注いだ時に素早く温度が上がるのを防ぐためだ。冷やしたグラスで提供することでカクテルの品質が長く維持される。',
        highlight: 'チリング',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'グラスの種類もこんなに奥が深いんですね。',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '正しいグラスへの理解はバーテンダーの基本だ。では今日学んだグラスのテストをしよう！',
        highlight: 'グラスのテスト',
      },
    ],
  },
  {
    key: 'lec_1_S',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '第1章の学習、よく頑張ってくれたね。今日は今まで学んだことをまとめて確認しよう。',
      },
      {
        speaker: 'player' as const,
        expression: 'happy' as const,
        text: 'バーテンダーの役割、道具、グラスについて学びました。どれも奥が深かったです！',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'バーテンダーの仕事は「技術」「知識」「ホスピタリティ」の三本柱から成る。道具とグラスへの理解は技術の基本だ。正しいグラスに正しい方法で提供することが品質の第一歩だ。',
        highlight: '技術・知識・ホスピタリティ',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '今日は総合テストをしてもらう。基本はしっかり頭に入っているかな？プロとしての土台がしっかりしていないと、先に進んでも崩れてしまうからね。',
        highlight: '総合テスト',
      },
      {
        speaker: 'player' as const,
        expression: 'normal' as const,
        text: '精一杯頑張ります！',
      },
    ],
  },

  // ─── Chapter 2 ─────────────────────────────────────────────────────────────
  {
    key: 'lec_2_1',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '第2章へようこそ！今度はスピリッツ——蒸留酒——を学んでいこう。カクテルの材料の中心となる大切な知識だ。',
        highlight: 'スピリッツ',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'まず「ジン」から始めよう。ジンはグレーンスピリッツ（主にトウモロコシや大麦）を原料とし、ジュニパーベリーなどのボタニカルで風味付けした蒸留酒だ。',
        highlight: 'ジン',
        visual: 'gin',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ジンには大きく「ロンドン・ドライ・ジン」「ジュネヴァ」「スラム・ジン」などのスタイルがある。最もよく使われるのはロンドン・ドライ・ジンで、キリッとした辛口が特徴だ。',
        highlight: 'ロンドン・ドライ・ジン',
        visual: 'gin_bottle',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ジュニパーベリー以外にも色々な材料が使われるんですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'そう！コリアンダー、アンジェリカルート、カルダモン、柑橘の皮など10種類以上のボタニカルが使われることも珍しくない。それがジンの複雑な香りを作り出している。代表的なブランドはビーフィーター、タンカレー、ゴードンズなどだ。',
        highlight: 'ボタニカル',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ジンは「カクテルの母」とも呼ばれ、マティーニ、ジントニック、ギムレットなど数多くの名カクテルのベースとなっている。アルコール度数は通常40〜47%だ。',
        highlight: 'カクテルの母',
      },
    ],
  },
  {
    key: 'lec_2_2',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '次はウォッカだ。ロシア語で「小さな水」を意味するウォッカは、世界で最も広く飲まれるスピリッツの一つだ。',
        highlight: 'ウォッカ',
        visual: 'vodka',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ウォッカは主に穀物（小麦、ライ麦、大麦）やジャガイモを原料とし、何度も蒸留・ろ過することで非常に純粋なスピリッツを作り出す。無色透明で無味無臭に近いのが特徴だ。',
        highlight: '蒸留・ろ過',
      },
      {
        speaker: 'player' as const,
        expression: 'surprised' as const,
        text: '無味無臭なら、カクテルに入れても味が変わらないんですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'まさにそれがウォッカの強みだ！他の材料の味を邪魔しないから、フルーツジュースやリキュールと組み合わせやすい。モスコミュール、ブラッディメアリー、コスモポリタンなどはみんなウォッカベースだよ。',
        highlight: 'ウォッカベース',
        visual: 'vodka_bottle',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '有名なブランドにはスミノフ、アブソルート、グレイグース、ベルヴェデールなどがある。ロシアとポーランドがウォッカの本場として知られている。アルコール度数は通常40%だ。',
        highlight: 'スミノフ',
      },
    ],
  },
  {
    key: 'lec_2_3',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'さあ、カリブ海の太陽のスピリッツ——「ラム」について学ぼう！',
        highlight: 'ラム',
        visual: 'rum',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ラムはサトウキビの搾り汁（サトウキビジュース）または糖蜜を発酵・蒸留して作られる。カリブ海諸島、中南米が主要な産地だ。',
        highlight: 'サトウキビ',
        visual: 'rum_bottle',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ラムには「ホワイトラム（ライトラム）」「ゴールドラム」「ダークラム（ヘビーラム）」の三つの主要なスタイルがある。色と熟成度が異なり、使い方も変わってくる。',
        highlight: 'ホワイトラム',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'それぞれどんなカクテルに使うんですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'ホワイトラムはモヒートやダイキリなど爽やかなカクテルに。ゴールドラムはマイタイなど。ダークラムはクーバーリブレやホットラムなど風味豊かな使い方が多い。バカルディ、ハバナクラブ、マイヤーズラムが有名だ。',
        highlight: 'モヒート',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ラムは18世紀の海賊たちが愛した酒としても有名だ。アルコール度数は通常37.5〜43%だが、オーバープルーフという強いものは75%を超えることもある。',
        highlight: '海賊',
      },
    ],
  },
  {
    key: 'lec_2_4',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '今日は「テキーラ」だ。メキシコが原産地の個性的なスピリッツで、近年世界中でブームになっているね。',
        highlight: 'テキーラ',
        visual: 'tequila',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'テキーラはアガベ——サボテンに似た植物——の一種、「ブルー・アガベ」のみを原料とする。メキシコのハリスコ州などの指定地域でのみ生産が認められた原産地名称保護を受けている。',
        highlight: 'ブルー・アガベ',
        visual: 'agave',
      },
      {
        speaker: 'player' as const,
        expression: 'surprised' as const,
        text: 'サボテンからお酒が作られるんですか！？すごいですね。',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'アガベはサボテンの仲間ではないが、似た植物だ。熟成年数によって「ブランコ（シルバー）」「レポサド」「アネホ」「エクストラ・アネホ」と分類される。長く熟成するほど風味が複雑になる。',
        highlight: 'アネホ',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'テキーラの代名詞と言えばマルガリータ。塩とライムと組み合わせる飲み方は世界中で愛されている。クエルボ、パトロン、1800などが有名なブランドだ。アルコール度数は通常38〜40%だ。',
        highlight: 'マルガリータ',
      },
    ],
  },
  {
    key: 'lec_2_5',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'スピリッツの王様とも言われる「ウイスキー」だ。世界中に様々なスタイルがあって、奥深い世界だよ。',
        highlight: 'ウイスキー',
        visual: 'whiskey',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ウイスキーは穀物を原料に発酵・蒸留し、木樽で熟成させる。主な産地は「スコットランド（スコッチ）」「アメリカ（バーボン）」「アイルランド」「日本（ジャパニーズ）」「カナダ」の5大産地だ。',
        highlight: '5大産地',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'スコッチとバーボンはどう違うんですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'スコッチはスコットランド産で大麦麦芽を使い、ピート（泥炭）の風味が特徴的だ。バーボンはアメリカ・ケンタッキー産が多く、51%以上のコーンを原料とし、新品の炭化オーク樽で熟成させる。バニラや甘みが特徴だ。',
        highlight: 'バーボン',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '日本のウイスキーも世界で高く評価されているよ。ニッカ、サントリー山崎、白州などは国際的な賞を受賞している。ウイスキーはオールドファッションドやマンハッタン、ウイスキーサワーのベースとなる。',
        highlight: 'ジャパニーズウイスキー',
        visual: 'whiskey_bottle',
      },
    ],
  },
  {
    key: 'lec_2_6',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'スピリッツの最後は「ブランデー」だ。これはワインや果実酒を蒸留して作られる貴族的なスピリッツだよ。',
        highlight: 'ブランデー',
        visual: 'brandy',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'ブランデーの代名詞が「コニャック」だ。フランスのコニャック地方でのみ生産され、ユニブランというぶどう品種を主に使う。VSOP、XOなどの格付けがある。',
        highlight: 'コニャック',
        visual: 'cognac_bottle',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'コニャック以外にもブランデーの種類はあるんですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'もちろん！アルマニャック（フランス南西部）、カルバドス（アップルブランデー、ノルマンジー産）、グラッパ（イタリア）なども有名だ。また世界各地でぶどう以外の果物から作るフルーツブランデーもある。',
        highlight: 'アルマニャック',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'バーテンダーとしては、ブランデーが使われるサイドカーやブランデーアレキサンダーなどのクラシックカクテルを覚えておくことが大切だ。熟成した風味がカクテルに深みを加える。',
        highlight: 'サイドカー',
      },
    ],
  },
  {
    key: 'lec_2_S',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '6種類のスピリッツをよく学んでくれたね！ジン、ウォッカ、ラム、テキーラ、ウイスキー、ブランデー——これらが世界の蒸留酒の基本だ。',
        highlight: '6大スピリッツ',
      },
      {
        speaker: 'player' as const,
        expression: 'normal' as const,
        text: 'それぞれ原料も産地も個性も全然違うんですね。全部覚えるのが大変でしたが、面白かったです！',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '知識として覚えるだけでなく、実際に飲み比べることで本当の理解が深まる。バーテンダーは自分で体験することも大切な勉強だ。',
        highlight: '体験から学ぶ',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '今日は総合テストで確認しよう。それぞれのスピリッツの産地、原料、特徴をしっかり覚えているかな？',
      },
    ],
  },

  // ─── Chapter 3 ─────────────────────────────────────────────────────────────
  {
    key: 'lec_3_1',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '第3章は「技法」だ。同じ材料でも作り方が違えば味も変わる。バーテンダーの腕の見せ所だよ。',
        highlight: '技法',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'まずは「ビルド」から。ビルドとは、グラスの中に直接材料を入れて作る最も基本的な技法だ。ジントニックやハイボールなど炭酸を使うカクテルによく使われる。',
        highlight: 'ビルド',
        visual: 'build_technique',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ビルドのポイントは順序だ。まず氷を入れ、次に強い度数のスピリッツ、最後に炭酸を静かに注ぐ。炭酸を注ぐ際は氷に当てないようにするのがコツで、炭酸が抜けにくくなる。',
        highlight: '注ぐ順序',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: '炭酸を最後に入れるのには理由があるんですね。',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'そう、炭酸は最後に入れて軽くステアするか、全くかき混ぜない。長くかき混ぜると炭酸が逃げてしまう。ビルドはシンプルに見えるが、正確さが大切な技法だ。',
        highlight: '炭酸の扱い',
      },
    ],
  },
  {
    key: 'lec_3_2',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '次は「ステア」だ。ミキシンググラスにスピリッツと材料を入れ、バースプーンで静かに混ぜる技法だ。',
        highlight: 'ステア',
        visual: 'stir_technique',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ステアはマティーニやマンハッタンのように、透明感のある仕上がりが求められるカクテルに使われる。余計な空気を入れず、クリアな見た目を保つのが目的だ。',
        highlight: '透明感',
        visual: 'mixing_glass',
      },
      {
        speaker: 'player' as const,
        expression: 'surprised' as const,
        text: 'シェークとどう使い分けるんですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: 'ステアは全ての材料がアルコールベースで、濁りを出したくない時に使う。シェークは卵白、クリーム、フルーツジュースなどを混ぜる時だ。「全てのカクテルをシェークすればいい」という考えは間違いで、技法の選択が品質を決める。',
        highlight: '技法の選択',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ステアのコツはバースプーンをグラスの内壁に沿わせ、スプーン自体は回転させずに柄をひねって回す動作だ。約10〜15秒間、均一に回す。よく冷えた状態で提供するのが重要だ。',
        highlight: 'バースプーンの使い方',
      },
    ],
  },
  {
    key: 'lec_3_3',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '「シェーク」はバーテンダーの象徴的な技法だ。シェーカーに材料と氷を入れ、力強く振って冷やしながら混ぜる。',
        highlight: 'シェーク',
        visual: 'shake_technique',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'シェークには「スタンダードシェーク」「ハードシェーク」がある。スタンダードは10〜15秒振る一般的な方法。ハードシェークは上田和男氏が考案した日本発祥の特殊技法で、よりなめらかな口当たりを生む。',
        highlight: 'ハードシェーク',
        visual: 'shaker',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'シェーカーが冷たくなるのはなぜですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'シェーカーの外側が白くなるほど結露するくらいが適切に冷えたサイン。材料は素早く冷やされ、空気が含まれることで泡立ちと口当たりの良さが生まれる。ダイキリ、マルガリータ、ギムレットなどがシェークカクテルの代表だ。',
        highlight: '結露',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '注意点として、炭酸飲料はシェーカーには入れない。激しく振ると圧力で爆発する危険がある。シェーク後はストレーナーでこしながらグラスに注ぐことも忘れずに。',
        highlight: '炭酸飲料注意',
      },
    ],
  },
  {
    key: 'lec_3_4',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ブレンド」は電動ブレンダーで材料と氷を一緒に砕きながら混ぜる技法だ。フローズンカクテルに使われる。',
        highlight: 'ブレンド',
        visual: 'blender',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'フローズンマルガリータやピニャコラーダなど、シャーベット状のカクテルはブレンドで作られる。氷の量と材料のバランスが重要で、仕上がりの滑らかさに影響する。',
        highlight: 'フローズンマルガリータ',
        visual: 'blender_cocktail',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ブレンドの際に気をつけることはありますか？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '氷は適量で、砕き過ぎると水っぽくなってしまう。材料は先に入れ、氷を後から加えてブレンドするのが基本だ。また、すぐに提供しないと溶けてしまうので、注文が入ってから作るのが鉄則だよ。',
        highlight: '氷の量',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '今学んだ4つの技法——ビルド、ステア、シェーク、ブレンド——はカクテル作りの全ての基本だ。正しい場面で正しい技法を選ぶことがプロへの道だ。',
        highlight: '4つの技法',
      },
    ],
  },
  {
    key: 'lec_3_S',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '技法を全て学んでくれたね。今日は実際に初めてのカクテルを作ってもらおう。「ジン・トニック」だ。ビルド技法の代表格だよ。',
        highlight: 'ジン・トニック',
        visual: 'gin_tonic',
      },
      {
        speaker: 'player' as const,
        expression: 'happy' as const,
        text: 'ついに実際のカクテルを作れるんですね！',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ジン・トニックはハイボールグラスに氷を入れ、ジン45mlを注ぎ、冷やしたトニックウォーターを静かに満たす。最後にライムを搾りガーニッシュする。シンプルだからこそ技術が光る一杯だ。',
        highlight: 'ライムのガーニッシュ',
        visual: 'highball',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: 'ジン・トニックのポイントはトニックウォーターを静かに注ぐこと。氷や壁に当てないようにすることで炭酸を逃さない。また、グラスをよく冷やしておくことも重要だ。',
        highlight: 'トニックウォーター',
      },
      {
        speaker: 'player' as const,
        expression: 'normal' as const,
        text: '頑張ります！ビルドの練習にぴったりですね。',
      },
    ],
  },

  // ─── Chapter 4 ─────────────────────────────────────────────────────────────
  {
    key: 'lec_4_1',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '第4章ではついに本格的なクラシックカクテルを学ぶ。まず「マティーニ」——カクテルの王様から始めよう！',
        highlight: 'マティーニ',
        visual: 'martini',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'マティーニはジンとドライベルモットをステアして作るシンプルなカクテルだ。割合は様々だが、一般的にジン60ml、ドライベルモット10〜20mlが基本だ。',
        highlight: 'ドライベルモット',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ドライマティーニとエクストラドライの違いは何ですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ベルモットの量で変わる。ベルモットを少なくするほど「ドライ」になる。エクストラドライはわずかにグラスを濡らす程度。ジェームス・ボンドの「シェークして」というのは本来はステアが正しいが、映画で有名になった。',
        highlight: 'エクストラドライ',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'ガーニッシュはオリーブかレモンツイストが伝統的だ。オリーブマティーニ、ギブソン（パールオニオン）、ダーティマティーニ（オリーブブライン入り）など多くのバリエーションが生まれている古典中の古典だよ。',
        highlight: 'オリーブ',
        visual: 'martini_glass',
      },
    ],
  },
  {
    key: 'lec_4_2',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「マンハッタン」はライウイスキー（またはバーボン）とスイートベルモットをステアしたクラシックカクテルだ。「カクテルの女王」とも呼ばれる。',
        highlight: 'マンハッタン',
        visual: 'manhattan',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '基本的なレシピはライウイスキー45ml、スイートベルモット15ml、アンゴスチュラビターズ1〜2ダッシュだ。チェリーをガーニッシュに使うのが伝統的なスタイルだよ。',
        highlight: 'アンゴスチュラビターズ',
      },
      {
        speaker: 'player' as const,
        expression: 'surprised' as const,
        text: 'マティーニとよく似ていますね。違いはウイスキーとベルモットの種類ですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'その通り！マティーニはジン＋ドライベルモット、マンハッタンはウイスキー＋スイートベルモット。似た構造だが全く異なる表情を持つ。それがクラシックカクテルの奥深さだ。',
        highlight: 'スイートベルモット',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'マンハッタンにはドライマンハッタン（ドライベルモット使用）、パーフェクトマンハッタン（ドライ＋スイート混合）などのバリエーションもある。ニューヨークのマンハッタン区が名前の由来と言われる。',
        highlight: 'ニューヨーク',
      },
    ],
  },
  {
    key: 'lec_4_3',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ギムレット」はジンとライムジュースのシンプルなカクテルだ。「ギムレットには早すぎる」という小説の一節でも有名だよ。',
        highlight: 'ギムレット',
        visual: 'gimlet',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'レシピはジン45ml、ライムジュース15ml。フレッシュライムで作るものとロース社のライムコーディアルを使うものがある。コーディアルを使うと甘みが加わり、よりクラシックなスタイルになる。',
        highlight: 'ライムコーディアル',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ダイキリとよく似ていますね。ジンとラムの違いだけ？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '鋭い！ギムレット（ジン）とダイキリ（ラム）は確かに構造が似ている。しかし使うスピリッツによって風味は全く異なる。こういった比較で覚えると知識が深まるよ。',
        highlight: 'ジン vs ラム',
      },
    ],
  },
  {
    key: 'lec_4_4',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '「モヒート」はキューバ生まれのリフレッシングなカクテルだ。文豪ヘミングウェイが愛したことでも有名だよ。',
        highlight: 'モヒート',
        visual: 'mojito',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'レシピはホワイトラム45ml、ライム1/2個、砂糖2tsp、ミントの葉10枚ほど、ソーダ水。ミントとライムをマドラーで軽く潰すムドルという工程がポイントだ。',
        highlight: 'ムドル',
        visual: 'muddler',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ミントは強く潰すと苦くなりますか？',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: 'まさに！ミントは叩きつけるようにしてはいけない。優しく押して香りを出す程度で止めること。強く潰しすぎると苦味が出て台無しになる。ライムも搾りすぎると苦くなるので注意だ。',
        highlight: '優しく押す',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'モヒートはビルド技法で作る。氷で満たしたハイボールグラスにラムを入れ、ソーダ水を注いで完成。生のミントが食欲をそそる見た目も魅力のカクテルだよ。',
        highlight: 'ビルド',
      },
    ],
  },
  {
    key: 'lec_4_5',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ダイキリ」はラムとライムとシュガーシロップだけのシンプルなカクテルだ。1900年代初頭にキューバの鉱山で生まれたと言われている。',
        highlight: 'ダイキリ',
        visual: 'daiquiri',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'レシピはホワイトラム45ml、ライムジュース22ml、シュガーシロップ7ml。シェークして冷やしたカクテルグラスに注ぐ。シンプルなレシピだが材料の品質とバランスが全てを決める。',
        highlight: 'シュガーシロップ',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ヘミングウェイもダイキリが好きだったんですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'そう、ヘミングウェイはモヒートとダイキリの両方を愛した。彼は糖尿病のためシュガーなしでラムとライムのみのダブルダイキリを飲んでいたらしい。これを「ヘミングウェイダイキリ」または「パパ・ドブル」と呼ぶ。',
        highlight: 'ヘミングウェイダイキリ',
      },
    ],
  },
  {
    key: 'lec_4_6',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '「マルガリータ」はテキーラベースで世界一有名なカクテルの一つだ。テキーラ、トリプルセック、ライムの三つだけで作る。',
        highlight: 'マルガリータ',
        visual: 'margarita',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'レシピはテキーラ45ml、トリプルセック（コアントロー）15ml、ライムジュース15ml。マルガリータグラスの縁に塩をつける「スノースタイル」が定番だが、塩なしでも提供できる。',
        highlight: 'スノースタイル',
        visual: 'margarita_glass',
      },
      {
        speaker: 'player' as const,
        expression: 'surprised' as const,
        text: 'グラスの縁に塩をつけるのはなぜですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '塩はライムの酸味と甘さを引き立てる役割を果たす。唇に触れる塩がカクテルの風味を複雑にするんだ。ただしお客様によっては塩が苦手な方もいるので、必ず確認するのがプロのマナーだよ。',
        highlight: '塩の役割',
      },
    ],
  },
  {
    key: 'lec_4_7',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「ネグローニ」はイタリア生まれの洗練されたカクテルだ。1919年にフィレンツェのカフェで伯爵カミロ・ネグローニが考案したと言われる。',
        highlight: 'ネグローニ',
        visual: 'negroni',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'レシピはジン、カンパリ、スイートベルモットが各30ml——等量の三種だ。ステアして大きな氷の入ったロックグラスに注ぎ、オレンジを飾る。苦みと甘さが見事にバランスしたカクテルだ。',
        highlight: 'カンパリ',
        visual: 'campari',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'カンパリはどんなリキュールですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'カンパリはイタリアのハーブリキュールで、チコリなど多くのボタニカルから作られる鮮やかな赤色が特徴だ。独特の苦みと甘さを持つ。ネグローニの代わりにスプリッツという飲み方もイタリアでは人気だよ。',
        highlight: 'カンパリ',
      },
    ],
  },
  {
    key: 'lec_4_8',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「サイドカー」は1920年代パリで生まれたブランデーベースのクラシックカクテルだ。戦間期のフランスの華やかな時代を象徴するカクテルだよ。',
        highlight: 'サイドカー',
        visual: 'sidecar',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'レシピはコニャック（ブランデー）45ml、コアントロー（トリプルセック）15ml、レモンジュース15ml。グラスの縁に砂糖をつけるスノースタイルが古典的なスタイルだ。',
        highlight: 'コニャック',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'マルガリータと構造が似ていますね。',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'まさにその通り！マルガリータ（テキーラ、トリプルセック、ライム）とサイドカー（ブランデー、トリプルセック、レモン）は「デイジー」ファミリーと言われる、同じ構造を持つカクテルグループだ。スピリッツを変えることで全く異なる表情になる。',
        highlight: 'デイジーファミリー',
      },
    ],
  },
  {
    key: 'lec_4_9',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '「オールドファッションド」はアメリカで最も古いカクテルの一つと言われ、ウイスキーの原型的な飲み方だ。',
        highlight: 'オールドファッションド',
        visual: 'old_fashioned',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'レシピはバーボン（またはライウイスキー）60ml、アンゴスチュラビターズ2ダッシュ、砂糖1tsp、水少量だ。ロックグラスで直接砂糖とビターズを混ぜてからウイスキーを加えるビルド技法だ。',
        highlight: 'ビターズ',
        visual: 'rocks',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ビターズとはどんなものですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'ビターズは薬草や果物、スパイスをアルコールに漬け込んだ濃縮調味料だ。数滴でカクテルに複雑さと深みを加える。アンゴスチュラビターズはトリニダードトバゴ産の最も有名なビターズだよ。',
        highlight: 'アンゴスチュラ',
      },
    ],
  },
  {
    key: 'lec_4_10',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '「コスモポリタン」は1990年代にドラマ「セックス・アンド・ザ・シティ」で大ヒットしたピンク色の美しいカクテルだよ。',
        highlight: 'コスモポリタン',
        visual: 'cosmopolitan',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'レシピはウォッカ（シトロン）45ml、トリプルセック15ml、ライムジュース7.5ml、クランベリージュース30mlだ。シェークして冷えたカクテルグラスに注ぎ、ライムスライスを飾る。',
        highlight: 'クランベリージュース',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'ウォッカ・シトロンというのは特別な種類のウォッカですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'そう、シトロンウォッカはレモン風味のフレーバーウォッカだ。コスモポリタンには柑橘の爽やかさが合う。ただし普通のウォッカでも十分においしく作れるよ。',
        highlight: 'シトロンウォッカ',
      },
    ],
  },
  {
    key: 'lec_4_S',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '10種類の定番カクテルをよく覚えてくれたね！これだけ作れるようになれば、バーのレギュラーメニューのほとんどに対応できる。',
        highlight: '定番カクテル10種',
      },
      {
        speaker: 'player' as const,
        expression: 'happy' as const,
        text: '一つ一つ個性があって面白かったです。同じ技法でも材料が変わると全然違うカクテルになるんですね！',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'クラシックカクテルのレシピは基本だが、お客様の好みや季節に合わせてアレンジする応用力も大切だ。まずは基本を完璧にマスターすることが先決だよ。',
        highlight: 'アレンジの応用力',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: 'では最後にダイキリをもう一度作ってもらおう。全てのシェーク技法の総復習として最適な一杯だ。集中して丁寧に作ってくれ。',
        highlight: 'ダイキリ',
      },
    ],
  },

  // ─── Chapter 5 ─────────────────────────────────────────────────────────────
  {
    key: 'lec_5_1',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '第5章は「接客」だ。カクテルの技術は十分身についてきた。今度は心を磨く番だよ。',
        highlight: '接客',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「第一印象」は極めて重要だ。お客様がドアを開けた瞬間から接客は始まっている。笑顔でのアイコンタクト、はっきりとした「いらっしゃいませ」の挨拶が全ての始まりだ。',
        highlight: '第一印象',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: '席に案内する時の注意点はありますか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'お客様の状況を瞬時に読む。一人ならカウンター席を提案、カップルならボックス席を選ぶなど。また常連様には好みの席を覚えておくことで、特別感を演出できる。',
        highlight: '状況を読む',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'コート、荷物の管理も大切だ。重い荷物は預かるか置ける場所を案内する。細かな気遣いの積み重ねがお客様の信頼を育てる。',
        highlight: '細かな気遣い',
      },
    ],
  },
  {
    key: 'lec_5_2',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'オーダーを取ることはただ注文を聞くことではない。お客様の気分や希望を引き出すコミュニケーションの場だ。',
        highlight: 'オーダー',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「今日はどのようなお気持ちですか？」「どんな味わいがお好みですか？」など、オープンクエスチョンで会話を引き出す。辛口・甘口、強め・弱め、さっぱり・コクがあるなど好みを確認する。',
        highlight: 'オープンクエスチョン',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: 'お客様がメニューを長く見ている時はどうすればいいですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'プレッシャーをかけないことが大切だ。少し距離を置いて「何かわからないことがあればお声がけください」と一言添えるだけでいい。焦って注文を急かすのは最悪の接客だよ。',
        highlight: 'プレッシャーをかけない',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: 'また、アレルギーの確認も重要だ。特にフルーツジュースや乳製品を使うカクテルを提案する際は、必ず確認する。お客様の安全を守ることがバーテンダーの責任だ。',
        highlight: 'アレルギー確認',
      },
    ],
  },
  {
    key: 'lec_5_3',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'おすすめを聞かれた時、「何でもいいですよ」と答えてはいけない。それはお客様への失礼だ。バーテンダーの知識と感性で最高の一杯を提案しよう。',
        highlight: 'おすすめの提案',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'まずお客様の情報を集める。初来店か？食事の前後か？気分は？アルコールの強さの希望は？この情報をもとに2〜3種類の候補を提案し、最終的に選んでもらう。',
        highlight: '情報収集',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: '外国語が得意でない外国のお客様が来た時はどうすればいいですか？',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '英語の基本的な説明は覚えておくといい。ジェスチャーや指を差す、写真で見せるなど言語に頼らない方法も有効だ。笑顔と丁寧さは言語を超えるよ。',
        highlight: '言語を超える笑顔',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '提案する際は具体的な味の説明をする。「甘みとほろ苦さが絶妙なバランスのカクテルです」「スッキリと爽やかで夏の夜にぴったりです」など、情景が浮かぶ言葉を選ぼう。',
        highlight: '具体的な言葉で表現',
      },
    ],
  },
  {
    key: 'lec_5_4',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '今日の内容は非常に重要だ。「酔客への対応」——お客様の安全を守る責任について学ぼう。',
        highlight: '酔客への対応',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'バーテンダーには「責任ある飲酒提供（Responsible Service of Alcohol）」の義務がある。明らかに飲み過ぎているお客様に追加のアルコールを提供することは、法的にも倫理的にも問題がある。',
        highlight: '責任ある飲酒提供',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: '断る時はどう言えばいいですか？傷つけないようにしたいのですが…',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '「今夜のお体の状態を考えると、お水と何か軽いものをお出しする方がよいかと思います」と、あくまでお客様の健康を思っての提案として伝える。否定するのではなく、ケアとして提示することが大切だ。',
        highlight: 'お客様の健康を思って',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: '水を提供すること、食事を勧めること、タクシーを手配すること——これらは酔客を安全に帰すための重要なアクションだ。お客様のために断ることもバーテンダーの大切な仕事だよ。',
        highlight: '断ることも仕事',
      },
    ],
  },
  {
    key: 'lec_5_5',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '今日は「常連客と初心者」への対応を学ぼう。同時に対応が必要な場面は多い。バランスを取るのがプロの腕前だ。',
        highlight: '常連と初心者',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '常連様は「顔なじみ」として特別感を大切にする。名前を呼んだり、好みを覚えていたりすることで関係が深まる。しかし初来店のお客様を疎かにしないよう注意が必要だ。',
        highlight: '常連への特別感',
      },
      {
        speaker: 'player' as const,
        expression: 'thinking' as const,
        text: '常連さんと話しながら新しいお客様も対応するのは難しそうですね。',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: 'プロのバーテンダーは「周辺視野」を常に持つ。会話に集中しながらも、他のお客様のグラスが空いていないか、困っていないかを確認し続ける。この意識こそが一流と二流の差だ。',
        highlight: '周辺視野',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '時に常連様に「こちら初めていらっしゃる方ですが、ご紹介してよいですか」と橋渡しをすることで、バーが新たな出会いの場になることもある。それがバーの本来の役割だよ。',
        highlight: '出会いの場',
      },
    ],
  },
  {
    key: 'lec_5_S',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '接客の全てを学んでくれたね。今日はいよいよシフト全体をシミュレーションしてもらう。様々なお客様が来店する一晩を乗り越えよう。',
        highlight: 'シフトシミュレーション',
      },
      {
        speaker: 'player' as const,
        expression: 'normal' as const,
        text: '色々なお客様への対応、VIPゲストへの接客……緊張しますが、やってみます！',
      },
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: 'バーテンダーは何が起きても冷静でなければならない。突発的な事態でも笑顔と余裕を失わないこと。これが長年の修練で身につく「プロの心得」だ。',
        highlight: 'プロの心得',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '今夜は特別なゲスト、山田社長がいらっしゃる予定だ。VIPの接客も含め、一晩のシフトを完璧にこなしてもらおう。頑張れよ。',
        highlight: 'VIP対応',
      },
    ],
  },

  // ─── Chapter 6 / Final ─────────────────────────────────────────────────────
  {
    key: 'lec_final',
    slides: [
      {
        speaker: 'master' as const,
        expression: 'strict' as const,
        text: 'よくここまで来てくれた。第1章から第5章まで、多くのことを学んできたね。今日が最後の試練だ。',
        highlight: '最後の試練',
      },
      {
        speaker: 'player' as const,
        expression: 'normal' as const,
        text: 'はい、マスター。全ての力を出し切ります。',
      },
      {
        speaker: 'master' as const,
        expression: 'normal' as const,
        text: '私はこの試練に全てを詰め込んだ。基礎知識、スピリッツ、技法、カクテル、接客——バーテンダーとして必要な全ての力が試される。',
        highlight: '全てが試される',
        visual: 'bar_interior',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: 'ただ覚えていれば合格できるものではない。本当に理解し、体に染み込んでいるかどうかを確認する。君の「バーテンダー魂」を見せてくれ。',
        highlight: 'バーテンダー魂',
      },
      {
        speaker: 'player' as const,
        expression: 'happy' as const,
        text: 'マスター、ここまで教えてくれてありがとうございます。全力で臨みます！',
      },
      {
        speaker: 'master' as const,
        expression: 'happy' as const,
        text: '君が一流のバーテンダーになる日を楽しみにしている。さあ、始めよう！',
        visual: 'master_character',
      },
    ],
  },
]

export const getDialogue = (key: string) => DIALOGUES.find(d => d.key === key)
