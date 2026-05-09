// ─── characters.ts ────────────────────────────────────────────────────────────
// Character and ServiceScenario data for Bar Quest - Spirits of the Night

export const CHARACTERS = [
  {
    id: 'char_master',
    name: 'マスター',
    type: 'regular' as const,
    description: '老練なバーテンダー。30年以上のキャリアを持ち、この「ムーンライト」を切り盛りする。厳しいが温かく、本物のバーテンダー道を教えてくれる師匠的存在。',
    spriteKey: 'master',
    unlockedByChapter: 1,
  },
  {
    id: 'char_salaryman',
    name: '田中さん',
    type: 'regular' as const,
    description: '45歳のサラリーマン常連客。毎週金曜日に仕事帰りに立ち寄る。いつものウイスキーハイボールが定番で、仕事の悩みや家族の話を打ち明けることも。人情味あふれる常連。',
    spriteKey: 'salaryman',
    unlockedByChapter: 1,
  },
  {
    id: 'char_couple',
    name: '鈴木さんカップル',
    type: 'couple' as const,
    description: '30代前半のカップル。記念日や特別なデートの日に訪れる。彼は甘めのカクテルが好きで、彼女はスタイリッシュなカクテルを好む。二人の距離感を大切にしたサービスが求められる。',
    spriteKey: 'couple',
    unlockedByChapter: 2,
  },
  {
    id: 'char_tourist',
    name: 'スミスさん',
    type: 'tourist' as const,
    description: 'アメリカから来た観光客。日本のバー文化に興味を持ち、日本ならではのカクテルや日本酒を楽しみたいと思っている。英語が主体だが、片言の日本語も使おうとする。日本のおもてなし文化に感動しやすい。',
    spriteKey: 'tourist',
    unlockedByChapter: 4,
  },
  {
    id: 'char_drunk',
    name: '酔っ払い紳士',
    type: 'drunk' as const,
    description: '二次会か三次会で来たような明らかに酔っている中年紳士。まだ飲み足りないと主張するが、安全のためアルコールの提供を断る必要がある難しいお客様。根は悪い人ではなく、対処が腕の見せ所。',
    spriteKey: 'drunk',
    unlockedByChapter: 5,
  },
  {
    id: 'char_vip',
    name: '山田社長',
    type: 'vip' as const,
    description: '大手企業の社長で当店の重要VIPゲスト。細部へのこだわりが強く、ハイレベルなサービスと知識を求める。丁寧でありながら過度にへりくだらない、プロとしての対等な接客が求められる特別な存在。',
    spriteKey: 'vip',
    unlockedByChapter: 5,
  },
]

export const getCharacter = (id: string) => CHARACTERS.find(c => c.id === id)

export const SERVICE_SCENARIOS = [
  // ─── scene_greeting ────────────────────────────────────────────────────────
  {
    id: 'scene_greeting',
    title: '新規客の来店対応',
    characterId: 'char_salaryman',
    situation: '夜8時。田中さんが初めてこのバーに来店した。ドアを開けて入ってきた瞬間から接客が始まる。',
    lines: [
      {
        speaker: 'master' as const,
        text: '（カウンターで作業中のマスターが小声で）新規のお客様が入ってきた。さあ、対応してみろ。',
        expression: 'normal' as const,
      },
      {
        speaker: 'customer' as const,
        text: '（ドアを開けて少し迷いながら中をのぞく）あの…こちら一人でも入れますか？',
        expression: 'normal' as const,
      },
      {
        speaker: 'player' as const,
        text: '（どう対応するか？）',
        choices: [
          {
            text: '笑顔でアイコンタクトをとり、「いらっしゃいませ！もちろんです。こちらへどうぞ」と席に案内する',
            score: 2,
            response: 'ありがとうございます。じゃあカウンターをお願いします（にこりと笑う）',
            feedback: '完璧な第一印象だ。笑顔と明確な挨拶、そして迷っているお客様への迅速な誘導が素晴らしい。',
          },
          {
            text: '「はい、どうぞ」と言って手で席を示す',
            score: 1,
            response: 'あ、はい…（少し戸惑いながら入店）',
            feedback: '悪くはないが、笑顔とアイコンタクトが足りなかった。第一印象をもっと大切に。',
          },
          {
            text: '作業を続けながら「どうぞ」とだけ言う',
            score: -1,
            response: '（少しがっかりした様子で入店）',
            feedback: 'お客様が入ってきたら必ず手を止めて向き合うこと。作業より接客が優先だ。',
          },
          {
            text: '何も言わずにじっと見つめる',
            score: -2,
            response: '（気まずそうに立ち止まる）えっと…入っていいんですかね…？',
            feedback: '最悪だ。お客様を迎える気持ちが全く伝わっていない。入店を迷わせてしまった。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: '（席に座って）初めて来たんですが、どんなものがありますか？',
        expression: 'thinking' as const,
      },
      {
        speaker: 'player' as const,
        text: '（どう案内するか？）',
        choices: [
          {
            text: '「ウイスキーやカクテルを中心にご用意しております。お好みやお気分をお聞かせいただければご提案もできますよ」と丁寧に案内する',
            score: 2,
            response: 'へえ、そうなんですね！じゃあ相談に乗ってもらえますか？',
            feedback: 'メニューを渡すだけでなく、対話の入口を作った。これが本当の接客だ。',
          },
          {
            text: 'メニューを無言で渡す',
            score: 0,
            response: '（メニューをぱらぱらと見る）えっと…どれがおすすめですか？',
            feedback: 'メニューを渡すのは悪くないが、一言添えることでぐっと温かみが増す。',
          },
          {
            text: '「全部書いてあります」とだけ言ってメニューを渡す',
            score: -1,
            response: '（少し傷ついた様子で）あ、そうですか…',
            feedback: '事務的すぎる。お客様は案内だけでなく会話も求めている。',
          },
        ],
      },
    ],
    passingScore: 3,
    unlockedByChapter: 1,
  },

  // ─── scene_order ───────────────────────────────────────────────────────────
  {
    id: 'scene_order',
    title: 'ドリンクオーダーを聞く場面',
    characterId: 'char_couple',
    situation: '鈴木さんカップルがカウンターに着席。記念日のようで少し特別な雰囲気だ。二人ともメニューを見て少し迷っている。',
    lines: [
      {
        speaker: 'master' as const,
        text: '（こっそり）カップルのお客様だ。二人の雰囲気を壊さないよう、絶妙な距離感で対応しろよ。',
        expression: 'normal' as const,
      },
      {
        speaker: 'customer' as const,
        text: '（彼女が）今日は記念日なんです。何かおすすめはありますか？',
        expression: 'happy' as const,
      },
      {
        speaker: 'player' as const,
        text: '（どう答えるか？）',
        choices: [
          {
            text: '「おめでとうございます！お二人のお好みをお聞かせいただけますか？彼女様は甘いものはお好きですか？」と笑顔でお祝いしながら好みを聞く',
            score: 2,
            response: 'ありがとうございます！わたし甘いのが好きで、彼はあまり甘くないのが好きみたいで…',
            feedback: 'まずお祝いの言葉、そして好みの確認。完璧な入り方だ。お客様との距離が縮まった。',
          },
          {
            text: '「コスモポリタンがおすすめです」と即座に答える',
            score: 1,
            response: 'あ、それはどんな味ですか？',
            feedback: '提案は良いが好みを確認せずに勧めるのは早い。まずはお客様のことを知ろう。',
          },
          {
            text: '「全部書いてあるので選んでください」と言う',
            score: -1,
            response: '（二人で困った顔を見合わせる）そうですか…',
            feedback: '記念日という特別な日に来たカップルへの対応としては失格だ。',
          },
          {
            text: '特に何も言わずに立って待つ',
            score: -1,
            response: '（気まずい沈黙の後）えっと、何か聞いてもいいですか？',
            feedback: 'お客様が話しかけてきているのに無反応は論外だ。積極的に会話を始めよう。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: '（彼が）僕はウイスキーが好きなんですけど、彼女はあまりアルコールが強くなくて…',
        expression: 'thinking' as const,
      },
      {
        speaker: 'player' as const,
        text: '（どう提案するか？）',
        choices: [
          {
            text: '「でしたら彼様にはマンハッタンを、彼女様にはコスモポリタンはいかがでしょうか。甘みがありアルコールも控えめで飲みやすいですよ」と両方に合わせた提案をする',
            score: 2,
            response: '（二人で目を見合わせて）いいですね！それでお願いします！',
            feedback: '二人の好みをしっかり聞いて、それぞれに合ったカクテルを提案できた。さすがだ。',
          },
          {
            text: '「ウイスキーは強いですが彼女様はどうされますか？」と問題を繰り返す',
            score: 0,
            response: 'あの…何かいい提案はありますか？',
            feedback: '問題を繰り返すだけで解決策を提示していない。バーテンダーは提案する立場だ。',
          },
          {
            text: '「弱いなら来ない方がいいかもしれませんね」と言う',
            score: -2,
            response: '（傷つきながら）え…そんなこと言わなくても…',
            feedback: '絶対に言ってはいけない言葉だ。全てのお客様に合った提案をするのがプロだ。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: 'ありがとうございます。お願いします！（嬉しそうに）',
        expression: 'happy' as const,
      },
      {
        speaker: 'player' as const,
        text: 'オーダーを確認する',
        choices: [
          {
            text: '「マンハッタンとコスモポリタンですね。ご注文を復唱させていただきます」と確認する',
            score: 2,
            response: '（安心した様子で）はい、そうです！',
            feedback: '注文の復唱確認は誤りを防ぐ大切な習慣だ。プロの仕事だ。',
          },
          {
            text: '頷いてすぐに作りに行く',
            score: 1,
            response: '（少し不安そうに見送る）…合ってるかな',
            feedback: '復唱してお客様に安心感を与えることが重要だ。',
          },
        ],
      },
    ],
    passingScore: 4,
    unlockedByChapter: 2,
  },

  // ─── scene_suggest ─────────────────────────────────────────────────────────
  {
    id: 'scene_suggest',
    title: 'おすすめを聞かれる場面',
    characterId: 'char_tourist',
    situation: '外国人観光客のスミスさんが来店。日本のバー文化に興味があり、日本らしいカクテルや体験を求めている。英語交じりで話す。',
    lines: [
      {
        speaker: 'master' as const,
        text: '（こっそり）外国からのお客様だ。日本語が完全に通じないかもしれないが、笑顔と身振り手振りで対応するんだ。',
        expression: 'normal' as const,
      },
      {
        speaker: 'customer' as const,
        text: 'Hello! Uh... Nihongo sukoshi wakarimasu. ここのおすすめは何ですか？（英語と日本語を混ぜて）',
        expression: 'happy' as const,
      },
      {
        speaker: 'player' as const,
        text: '（どう対応するか？）',
        choices: [
          {
            text: 'ゆっくりはっきりした日本語と簡単な英語を交えて「Welcome! What kind of taste do you like? Sweet or dry?」と好みを確認する',
            score: 2,
            response: 'Oh, thank you! I like... sweet things, and Japanese whisky is very interesting!',
            feedback: '言語の壁を笑顔と丁寧さで乗り越えた。シンプルな英語を交えた対応は素晴らしい。',
          },
          {
            text: '「すみません、英語はわかりません」と言ってしまう',
            score: -1,
            response: '（がっかりした様子）Oh... I see...',
            feedback: 'たとえ完璧でなくても、伝えようとする姿勢が大切だ。ジェスチャーも使おう。',
          },
          {
            text: 'メニューを指差しながら「どれがいいですか？」と身振りで示す',
            score: 1,
            response: '（メニューを見て）Hmm... I don\'t know...',
            feedback: 'ジェスチャーは良いが、好みを引き出す質問ができていない。もう一歩踏み込もう。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: 'Japanese whisky! I heard it\'s very good. ジャパニーズウイスキー、飲みたい！',
        expression: 'happy' as const,
      },
      {
        speaker: 'player' as const,
        text: '（どう提案するか？）',
        choices: [
          {
            text: '「山崎や白州など、日本のウイスキーを使ったハイボールはいかがでしょうか？日本ならではの飲み方です」と写真や実物を見せながら説明する',
            score: 2,
            response: 'Oh wonderful! Yamazaki! Yes please! ぜひ！',
            feedback: '日本の固有の体験を提案し、ビジュアルで補足した。外国人観光客への最高の対応だ。',
          },
          {
            text: '「ウイスキーはこちらです」とボトルを見せるだけ',
            score: 1,
            response: '（ボトルを見て）OK... this one please.',
            feedback: '悪くはないが、日本のウイスキー文化や飲み方について説明できたらもっと良かった。',
          },
          {
            text: '「スコッチもありますよ」と別の提案をする',
            score: -1,
            response: 'Um... no, Japanese whisky please...',
            feedback: 'お客様は明確に日本のウイスキーを求めていた。要望をしっかり聞こう。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: 'This is amazing! とても美味しい！日本最高！（嬉しそうに）',
        expression: 'happy' as const,
      },
      {
        speaker: 'player' as const,
        text: '（最後にひと言）',
        choices: [
          {
            text: 'Thank you so much! Please enjoy Japan!（笑顔で）日本をお楽しみください！',
            score: 2,
            response: 'Thank you! I will come back!また来る！',
            feedback: '温かい見送りで最後まで良い印象を与えた。また来てもらえる関係を作れた。',
          },
          {
            text: '（特に何も言わずにカウンターの作業に戻る）',
            score: 0,
            response: '（少し寂しそうに飲んでいる）',
            feedback: '折角のコミュニケーションの機会を逃した。一言のお礼で印象は大きく変わる。',
          },
        ],
      },
    ],
    passingScore: 4,
    unlockedByChapter: 3,
  },

  // ─── scene_drunk ───────────────────────────────────────────────────────────
  {
    id: 'scene_drunk',
    title: '明らかに酔っているお客への対応',
    characterId: 'char_drunk',
    situation: '夜11時頃、明らかに酔っている中年男性が入店してきた。ろれつが回っておらず、目が潤んでいる。すでに他の店で相当飲んでいる様子だ。',
    lines: [
      {
        speaker: 'master' as const,
        text: '（小声で）酔っているお客様だ。これは難しい対応になるぞ。お客様の安全を第一に考えて行動しろ。',
        expression: 'strict' as const,
      },
      {
        speaker: 'customer' as const,
        text: '（ふらふらしながらカウンターに座って）ねえ、ウイスキーダブルでちょうだい。まだまだ飲めるから（呂律が回っていない）',
        expression: 'normal' as const,
      },
      {
        speaker: 'player' as const,
        text: '（どう対応するか？）',
        choices: [
          {
            text: 'まず水を出して、「お水をどうぞ。今夜はだいぶお飲みになったようなので、少しお休みになりませんか？」と穏やかに状態を確認する',
            score: 2,
            response: 'うーん…（水を受け取って）水か…ありがとう…',
            feedback: 'まず水を出してお客様を落ち着かせる。正しい第一手だ。',
          },
          {
            text: '注文通りウイスキーを提供する',
            score: -1,
            response: '（嬉しそうに飲む）いやあ、いい店だね！もう一杯！',
            feedback: '明らかに酔っているお客様にアルコールを提供するのは責任ある飲酒提供に反する。絶対にしてはいけない。',
          },
          {
            text: '「申し訳ありませんが、今夜はこれ以上アルコールはお出しできません」とはっきり断る',
            score: 2,
            response: 'なんで！？俺はまだ大丈夫だよ！',
            feedback: 'はっきり断ることは正しい判断だ。ただ水や食事の提案も合わせると、より気遣いが伝わる。',
          },
          {
            text: '「少し度数の低いものにしませんか？」とビールを提案する',
            score: -1,
            response: 'じゃあビールで（さらに飲む）',
            feedback: 'アルコールはアルコールだ。これ以上の提供自体を断るべき状況だ。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: 'ちょっとくらいいいじゃない！俺はお金払うんだから！（声が少し大きくなる）',
        expression: 'normal' as const,
      },
      {
        speaker: 'player' as const,
        text: '（さらにどう対応するか？）',
        choices: [
          {
            text: '「お客様のことを思ってのことです。今夜は水と軽いおつまみをお出しします。もし必要であれば、タクシーのご手配もいたしますよ」と穏やかに、しかし毅然として伝える',
            score: 2,
            response: '（少し冷静になって）…そうか。じゃあ…水をもう一杯もらえる？',
            feedback: 'お客様の怒りを受け止めつつ、安全への配慮を具体的な行動で示した。完璧な対応だ。',
          },
          {
            text: '折れてウイスキーを出してしまう',
            score: -2,
            response: '（喜んで飲む）ほら見ろ！まだ飲めるだろう？',
            feedback: '圧力に屈してはいけない。バーテンダーには提供を断る権利と義務がある。',
          },
          {
            text: '「うるさいです。お帰りください」と冷たく言い放つ',
            score: 0,
            response: '（傷ついた様子）そんな言い方しなくてもいいだろう…',
            feedback: '断る判断は正しいが、言い方が冷たすぎる。あくまでお客様を気遣う姿勢で断ること。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: '（しばらく水を飲んでいる）…ごめん、少し酔ってたかも。タクシー頼んでくれる？',
        expression: 'sad' as const,
      },
      {
        speaker: 'player' as const,
        text: '（最後の対応）',
        choices: [
          {
            text: '「もちろんです。すぐお呼びします。お体に気をつけてお帰りください」とタクシーを手配し、温かく見送る',
            score: 2,
            response: '（タクシーに乗る前に）ありがとう。また来るよ。今日はありがとうね。',
            feedback: '完璧な締めくくりだ。困難な対応を最後は信頼関係の構築につなげた。',
          },
          {
            text: '「あとは自分でやってください」と突き放す',
            score: -1,
            response: '（ぐらつきながら立ち上がる）…そうか。わかった',
            feedback: 'ここまで来たのに最後が雑だ。安全な帰宅まで見届けるのもバーテンダーの仕事だ。',
          },
        ],
      },
    ],
    passingScore: 5,
    unlockedByChapter: 4,
  },

  // ─── scene_regulars ────────────────────────────────────────────────────────
  {
    id: 'scene_regulars',
    title: '常連と初来客が同時にいる場面',
    characterId: 'char_salaryman',
    situation: '金曜の夜。常連の田中さんがカウンターで一人飲んでいる。そこに初めて来店する別の客（佐藤さん）が入ってきた。二人を同時に対応する場面だ。',
    lines: [
      {
        speaker: 'master' as const,
        text: '（バックヤードで）田中さんとの会話も大切だが、新しいお客様もちゃんとケアしろよ。両方を上手く対応するのが腕の見せ所だ。',
        expression: 'normal' as const,
      },
      {
        speaker: 'customer' as const,
        text: '（田中さん）いや〜今日も疲れたよ。例のプロジェクトがさ…（話し込もうとしている）',
        expression: 'normal' as const,
      },
      {
        speaker: 'player' as const,
        text: '（その時、新規客が入ってきた。どうするか？）',
        choices: [
          {
            text: '田中さんとの会話を一瞬止めて、新規客に「いらっしゃいませ！」と挨拶し席に案内してからすぐ田中さんへ戻る',
            score: 2,
            response: '（田中さん）ああ、新しいお客さんかい。先に行ってあげな（新規客は嬉しそうに入店）',
            feedback: '両方のお客様を大切にした判断だ。田中さんも新規客も不快にさせなかった。',
          },
          {
            text: '田中さんの話を最後まで聞いてから新規客に対応する',
            score: -1,
            response: '（新規客が入口で立ちすくむ）あの…誰も気づいてくれない…',
            feedback: '新規客を長く待たせてしまった。会話の途中でも必ず入店に気づいて挨拶すること。',
          },
          {
            text: '田中さんを無視して新規客だけに対応する',
            score: -1,
            response: '（田中さんが寂しそうに）…あ、そっちの方が大事そうだね（苦笑）',
            feedback: '常連を大切にすることも重要だ。バランスを取ることが求められている。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: '（新規客の佐藤さん）初めて来たんですが、カウンターでもいいですか？',
        expression: 'normal' as const,
      },
      {
        speaker: 'player' as const,
        text: '（田中さんと佐藤さん、両方に気を配りながらどう振る舞うか？）',
        choices: [
          {
            text: '「もちろんです！田中さん、少し失礼しますね」と田中さんにも声をかけつつ佐藤さんをカウンターへ案内する',
            score: 2,
            response: '（田中さん）いいよいいよ。（佐藤さん）ありがとうございます、隣いいですか？（二人が少し会話を始める）',
            feedback: '両方に声をかけたことで、田中さんも佐藤さんも自然な形で共存できた。橋渡しもできている。',
          },
          {
            text: '「はいどうぞ」とだけ言って席を示す',
            score: 1,
            response: '（佐藤さんが田中さんの隣に少し遠慮がちに座る）',
            feedback: '悪くはないが、田中さんへの配慮と佐藤さんへの温かさがもう少しあると良かった。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: '（田中さん）この人も常連になるかもしれないね。バーってそういう出会いの場だよな。',
        expression: 'happy' as const,
      },
      {
        speaker: 'player' as const,
        text: '（お客様同士を自然につなぐ言葉を言う）',
        choices: [
          {
            text: '「田中さん、佐藤さんは初めてのご来店なんです。よかったらこのお店のことを少し教えてあげてもらえますか？」と自然に橋渡しをする',
            score: 2,
            response: '（田中さん）あ、そうなの！じゃあ俺が色々教えてあげますよ（嬉しそうに）（佐藤さん）ありがとうございます！',
            feedback: '常連と新規客を繋げてバーの空間を活性化させた。これが本来のバーテンダーの役割だ。',
          },
          {
            text: '「そうですね」とだけ相槌を打つ',
            score: 0,
            response: '（二人は自然に会話を始めるが、バーテンダーとしての橋渡しは発生しなかった）',
            feedback: '機会を逃した。常連と新規客を自然に繋げることがバーテンダーの醍醐味だ。',
          },
        ],
      },
    ],
    passingScore: 3,
    unlockedByChapter: 4,
  },

  // ─── scene_fullshift ───────────────────────────────────────────────────────
  {
    id: 'scene_fullshift',
    title: '一晩のシフト総合シミュレーション',
    characterId: 'char_vip',
    situation: '特別な夜。今夜はVIPゲストの山田社長が予約されている。他にも通常のお客様が来店する忙しいシフト。全ての知識と接客技術を総動員する夜だ。',
    lines: [
      {
        speaker: 'master' as const,
        text: '今夜は山田社長がいらっしゃる特別な夜だ。VIPのお客様は細部に目が行くから、全ての対応に細心の注意を払うんだ。',
        expression: 'strict' as const,
      },
      {
        speaker: 'customer' as const,
        text: '（山田社長、予約時間ぴったりに来店。スーツ姿で風格がある）予約した山田です。',
        expression: 'normal' as const,
      },
      {
        speaker: 'player' as const,
        text: '（VIPゲストへの最初の対応）',
        choices: [
          {
            text: '「山田様、お待ちしておりました。ご予約のお席へご案内いたします。本日はよろしくお願いいたします」と笑顔で丁寧に迎える',
            score: 2,
            response: '（満足そうに）いい店だね。よろしく（席に着く）',
            feedback: '名前を呼んでの出迎えは特別感を演出する。VIP対応の基本ができている。',
          },
          {
            text: '「いらっしゃいませ、こちらへ」と普通のお客様と同様に対応する',
            score: 1,
            response: '（普通の反応で席に着く）',
            feedback: '問題はないが、予約のVIPには名前を呼んでの対応が求められる。特別感が足りない。',
          },
          {
            text: '（他のお客様の対応をしていて少し待たせてしまう）',
            score: -1,
            response: '（時計を見ながら待っている）…遅い',
            feedback: 'VIPのお客様を待たせるのは最悪の印象だ。優先度の管理ができていない。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: '（山田社長）今日は疲れてね。体に優しいカクテルを頼む。アルコールは控えめで。',
        expression: 'thinking' as const,
      },
      {
        speaker: 'player' as const,
        text: '（どう提案するか？）',
        choices: [
          {
            text: '「かしこまりました。ジンをベースに柑橘とトニックウォーターでお作りする、爽やかでアルコール控えめの一杯はいかがでしょうか。」と具体的に提案する',
            score: 2,
            response: 'ふむ、ジン・トニックか。それでいこう',
            feedback: 'お客様の要望（控えめなアルコール）を踏まえた具体的な提案が素晴らしい。',
          },
          {
            text: '「ジン・トニックにしますか？」とシンプルに聞く',
            score: 1,
            response: 'そうだな、それでいい',
            feedback: '提案自体は良いが、VIPには少し詳しい説明と情熱を加えるべきだ。',
          },
          {
            text: '「アルコール控えめはノンアルコールカクテルではいかがですか？」と方向を変える',
            score: 0,
            response: '（少し考えて）いや、少しはアルコールを楽しみたいんだが',
            feedback: '「控えめ」はゼロではない。お客様の言葉をしっかり聞いて意図を正確に捉えよう。',
          },
        ],
      },
      {
        speaker: 'master' as const,
        text: '（カウンター越しにこっそり）山田社長はお酒の知識も豊富だ。カクテルを出す時に説明を加えてみろ。',
        expression: 'thinking' as const,
      },
      {
        speaker: 'player' as const,
        text: '（カクテルを提供する際の対応）',
        choices: [
          {
            text: '「ジン・トニックでございます。今夜はロンドン・ドライ・ジンを使用し、冷やしたグラスに新鮮なライムを搾ってお作りしました。」と丁寧に説明しながら提供する',
            score: 2,
            response: '（目を細めて一口飲んで）うん、おいしい。こだわって作っているんだな',
            feedback: 'カクテルの説明を添えることでVIPへの敬意と技術の誇りが伝わった。最高の対応だ。',
          },
          {
            text: 'カクテルを静かに置くだけ',
            score: 1,
            response: '（飲んで）まあ悪くない',
            feedback: '問題はないが、説明を加えることでVIPゲストへの付加価値が大きく上がる。',
          },
          {
            text: '「はい、ジン・トニックです」と言って置く',
            score: 0,
            response: '（無表情で飲む）',
            feedback: 'VIPへの対応としては物足りない。細部への心配りが一流と二流の差だ。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: '（山田社長）実は私の部下がバーテンダーになりたいと言っているんだ。どんな心がけが大切かな？',
        expression: 'thinking' as const,
      },
      {
        speaker: 'player' as const,
        text: '（バーテンダーとしての哲学を伝える）',
        choices: [
          {
            text: '「バーテンダーは技術と知識だけでなく、お客様への真心が一番大切だと思います。どんなカクテルも、心を込めて作るかどうかで味が変わりますから」と真剣に答える',
            score: 2,
            response: '（感心して）いいことを言うね。なかなか哲学があるじゃないか。部下に伝えておこう',
            feedback: 'バーテンダーとしての哲学を真剣に伝えた。VIPとの深い関係を築けた。',
          },
          {
            text: '「一生懸命努力することです」と短く答える',
            score: 1,
            response: 'そうだな（と頷く）',
            feedback: '悪くはないが、VIPとの会話の深みを引き出せていない。もっと自分の言葉で語ろう。',
          },
          {
            text: '「お酒の知識をたくさん覚えることです」と答える',
            score: 0,
            response: '（少し考えて）それだけじゃないと思うが',
            feedback: 'バーテンダーの本質は知識だけでなくホスピタリティだ。大切な部分を見落としている。',
          },
        ],
      },
      {
        speaker: 'customer' as const,
        text: '（山田社長、退席の準備をしながら）今夜はありがとう。また来るよ。',
        expression: 'happy' as const,
      },
      {
        speaker: 'player' as const,
        text: '（最後の対応）',
        choices: [
          {
            text: '「ありがとうございます。次回もお待ちしております。どうかお気をつけてお帰りください」と深くお辞儀して見送る',
            score: 2,
            response: '（振り返って微笑む）うん、良い夜だった。また来る',
            feedback: '完璧な締めくくり。一晩を通じて最高の接客ができた。これが本物のバーテンダーだ。',
          },
          {
            text: '「ありがとうございます」と言う',
            score: 1,
            response: '（会釈して退店）',
            feedback: '感謝は伝わったが、次回来てもらえるような言葉を添えると関係が継続する。',
          },
        ],
      },
    ],
    passingScore: 7,
    unlockedByChapter: 5,
  },
]

export const getScenario = (id: string) => SERVICE_SCENARIOS.find(s => s.id === id)
