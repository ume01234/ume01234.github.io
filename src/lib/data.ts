export interface Activity {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
}

export interface Achievement {
  certifications: string[];
  internships: string[];
  events: string[];
}

export interface Work {
  id: string;
  title: string;
  description: string;
  url: string;
  technologies?: string[];
  features?: string[];
  longDescription?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  date: string;
  platform?: string; // 投稿サイト名（Medium, Note, Zennなど）
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

type Language = 'en' | 'ja';

const data = {
  en: {
    profileData: {
      name: 'Rikuto Hashizume',
      catchCopy: 'The Brewing Engineer',
      vision: 'Creating new worlds through technology',
      aboutMe: `I focus on data science and web engineering as my core disciplines, adding the sensibility of generative art as a spice. My goal is to be an engineer who can break down complex technology and extract (drip) it as "value" that anyone can savor.`,
      education: [
        'University of Tsukuba, College of General Studies, Science Group 3 - Enrollment',
        'University of Tsukuba, School of Informatics, Media Sciences - Transfer',
        'Digital Nature Group (Yoichi Ochiai Laboratory) - Affiliation',
      ],
    },
    activities: [
      {
        id: '1',
        title: 'Next.js × TypeScript Project',
        thumbnail: '/images/placeholder-1.jpg',
        description: 'Practical modern web application development. Building SPAs using App Router.',
      },
      {
        id: '2',
        title: 'UI/UX Design Research',
        thumbnail: '/images/placeholder-2.jpg',
        description: 'Learning user-centered design principles and researching interfaces that balance accessibility and usability.',
      },
      {
        id: '3',
        title: 'Open Source Contributions',
        thumbnail: '/images/placeholder-3.jpg',
        description: 'Improving code review and collaboration skills through community contributions.',
      },
      {
        id: '4',
        title: 'Technical Blog Writing',
        thumbnail: '/images/placeholder-4.jpg',
        description: 'Outputting learned content and sharing knowledge with others on the same path.',
      },
    ],
    achievements: {
      certifications: [
        'EIKEN Grade Pre-1',
        'Regular Driver\'s License',
        'Fundamental Information Technology Engineer',
        'Applied Information Technology Engineer',
      ],
      internships: [
        'SAP Japan (IT Consultant) March 2024',
        'Works Applications (DX Planning) August 2025',
        'Mybest (Data Scientist) September 2025',
        'Logglass (Engineer) September 2025',
      ],
      events: [
        'The University of Tokyo Matsuo & Iwasawa Lab GCI Winter Completion',
        'Deep Learning Fundamentals Course (hosted by the above) Completion',
        'E-Certification Preparation Course (hosted by the above) In Progress',
        'Track Job Hackathon May 2025 Participation',
      ],
    },
    works: [
      {
        id: '1',
        title: 'Portfolio Site Development',
        description: 'This site itself is my first work. A portfolio site themed around coffee, built with Next.js and Framer Motion.',
        url: 'https://z-ume01234.pages.dev',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
        features: [
          'Responsive split-screen layout',
          'Scroll-linked animations',
          'Multilingual support (EN/JA)',
          'Smooth page transitions',
          'Coffee-themed design system',
        ],
        longDescription: `This portfolio site represents my journey as a developer, combining modern web technologies with thoughtful design. The site features a unique split-screen layout that adapts beautifully to different screen sizes, creating an immersive experience for visitors.

The implementation leverages Next.js App Router for optimal performance and SEO, while Framer Motion provides smooth, scroll-linked animations that enhance the user experience. The coffee-themed design system creates a warm, inviting atmosphere that reflects my personality and approach to development.

Key highlights include a dynamic liquid background animation that responds to scroll progress, multilingual support for both English and Japanese audiences, and a comprehensive showcase of my projects, achievements, and blog posts. The site is fully responsive and optimized for performance, ensuring fast load times and smooth interactions across all devices.`,
      },
      {
        id: '2',
        title: 'Corporate Website Development (Earth Re Pure Inc.)',
        description: 'Implemented and maintained a corporate website as a volunteer for an acquaintance\'s company. Also handled server contracts and domain transfers.',
        url: 'https://example.com',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Google Analytics'],
        features: [
          'Responsive design',
          'SEO optimization',
          'Contact form implementation',
          'Server and domain management',
          'Content management',
        ],
        longDescription: `Developed and maintained a corporate website for Earth Re Pure Inc. as a volunteer project. The website was built using modern web technologies to ensure optimal performance and user experience.

Key responsibilities included implementing the website structure, setting up hosting infrastructure, managing domain transfers, and ensuring smooth operation. The project involved working closely with the client to understand their needs and deliver a solution that effectively represents their business.

The website features a clean, professional design that is fully responsive across all devices. SEO optimization was implemented to improve search engine visibility, and a contact form was integrated to facilitate communication with potential customers.`,
      },
      {
        id: '3',
        title: 'Deep Learning × Art: Model Accuracy Improvement Experiment',
        description: 'Conducted an experiment to improve accuracy for the art domain by fine-tuning an image captioning model.',
        url: 'https://example.com',
        technologies: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'Jupyter Notebook'],
        features: [
          'Image captioning model fine-tuning',
          'Art domain dataset preparation',
          'Model evaluation and metrics',
          'Transfer learning techniques',
          'Performance optimization',
        ],
        longDescription: `This research project focused on improving the accuracy of image captioning models specifically for the art domain. By fine-tuning pre-trained models on a curated dataset of artworks, I aimed to enhance the model's ability to generate accurate and contextually relevant captions for paintings and other artistic works.

The experiment involved collecting and preprocessing a specialized dataset of artworks, fine-tuning transformer-based models using transfer learning techniques, and evaluating performance using various metrics. The project demonstrated the effectiveness of domain-specific fine-tuning in improving model accuracy for specialized use cases.

Key achievements included successfully adapting general-purpose image captioning models to the art domain, achieving improved accuracy metrics, and documenting the fine-tuning process and results for future reference.`,
      },
      {
        id: '4',
        title: 'Reinforcement Learning × Game: Agent Creation',
        description: 'Conducted an experiment to create game agents using reinforcement learning and train them to learn optimal actions.',
        url: 'https://example.com',
        technologies: ['Python', 'PyTorch', 'Gymnasium', 'Stable-Baselines3', 'NumPy'],
        features: [
          'RL agent implementation',
          'Environment setup and configuration',
          'Policy optimization',
          'Reward function design',
          'Training and evaluation',
        ],
        longDescription: `This project involved creating intelligent game agents using reinforcement learning techniques. The goal was to train agents that could learn optimal strategies through interaction with game environments, demonstrating the power of RL in solving complex decision-making problems.

The implementation involved setting up game environments using Gymnasium, implementing various RL algorithms such as PPO and DQN, and training agents to achieve high performance. The project explored different reward functions and training strategies to optimize agent behavior.

Key outcomes included successfully training agents that could outperform baseline strategies, understanding the trade-offs between different RL algorithms, and gaining practical experience in implementing and tuning reinforcement learning systems. The project provided valuable insights into the challenges and opportunities in applying RL to game environments.`,
      },
    ],
    blogPosts: [
      {
        id: '1',
        title: 'Practical Usage of Next.js App Router',
        subtitle: 'Best practices for modern web application development using App Router.',
        url: 'https://example.com/blog/1',
        date: '2024-03-15',
        platform: 'Medium',
      },
      {
        id: '2',
        title: 'Achieving Type-Safe Development with TypeScript',
        subtitle: 'Explaining the importance of type definitions and practical type design techniques.',
        url: 'https://example.com/blog/2',
        date: '2024-03-10',
        platform: 'Zenn',
      },
      {
        id: '3',
        title: 'Beautiful Animations with Framer Motion',
        subtitle: 'Introducing implementation methods for scroll-linked animations and page transitions.',
        url: 'https://example.com/blog/3',
        date: '2024-03-05',
        platform: 'Note',
      },
      {
        id: '4',
        title: 'Efficient Styling with Tailwind CSS',
        subtitle: 'How to write maintainable CSS with a utility-first approach.',
        url: 'https://example.com/blog/4',
        date: '2024-02-28',
        platform: 'Medium',
      },
      {
        id: '5',
        title: 'The Importance of Web Accessibility',
        subtitle: 'Basic concepts and implementation methods for creating websites that are easy for all users to use.',
        url: 'https://example.com/blog/5',
        date: '2024-02-20',
        platform: 'Zenn',
      },
    ],
    sections: {
      aboutMe: 'About Me',
      education: 'Affiliation & Education',
      activities: 'Current Main Activities',
      certifications: 'Certifications',
      internships: 'Internships',
      events: 'External Events',
      works: 'Projects',
      blog: 'Blog',
      viewAll: 'View All',
      sourceCode: 'Source code is available on',
      back: 'Back',
    },
  },
  ja: {
    profileData: {
      name: '橋爪 陸人',
      catchCopy: '技術と感性を、一杯の価値へ',
      vision: '技術を通じて、新しい世界を創造する',
      aboutMe: `データサイエンスとWebエンジニアリングを主軸に、ジェネラティブアートの感性をスパイスとして加えています。目指しているのは、複雑な技術を噛み砕き、誰もが味わえる「価値」として抽出（ドリップ）できるエンジニアです。`,
      education: [
        '筑波大学 総合学域群 理系3　入学',
        '筑波大学 情報学群メディア創成学類　移行',
        'Digital Nature Group(落合陽一研究室)　所属',
      ],
    },
    activities: [
      {
        id: '1',
        title: 'Next.js × TypeScript プロジェクト',
        thumbnail: '/images/placeholder-1.jpg',
        description: 'モダンなWebアプリケーション開発の実践。App Routerを活用したSPAの構築に取り組んでいます。',
      },
      {
        id: '2',
        title: 'UI/UXデザイン研究',
        thumbnail: '/images/placeholder-2.jpg',
        description: 'ユーザー中心設計の原則を学び、アクセシビリティと使いやすさを両立したインターフェースの設計を研究しています。',
      },
      {
        id: '3',
        title: 'オープンソース貢献',
        thumbnail: '/images/placeholder-3.jpg',
        description: 'コミュニティへの貢献を通じて、コードレビューやコラボレーションのスキルを向上させています。',
      },
      {
        id: '4',
        title: '技術ブログ執筆',
        thumbnail: '/images/placeholder-4.jpg',
        description: '学習した内容をアウトプットし、同じ道を歩む人々と知識を共有しています。',
      },
    ],
    achievements: {
      certifications: [
        '実用英語検定準一級',
        '普通自動車免許',
        '基本情報技術者',
        '応用情報技術者',
      ],
      internships: [
        'SAP Japan（ITコンサルタント）2024年3月',
        'Works Applications（DX企画）2025年8月',
        'Mybest（データサイエンティスト）2025年9月',
        'Logglass（エンジニア）2025年9月',
      ],
      events: [
        '東京大学松尾・岩澤研究室 GCI Winter 修了',
        '同上主催 深層学習基礎講座 修了',
        '同上主催 E資格対策講座 受講中',
        'Track Job Hackathon 2025年5月参加',
      ],
    },
    works: [
      {
        id: '1',
        title: 'ポートフォリオサイト制作',
        description: 'このサイト自体が作品の一つです。Next.jsとFramer Motionを活用した、コーヒーをテーマにしたポートフォリオサイト。',
        url: 'https://z-ume01234.pages.dev',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
        features: [
          'レスポンシブな分割画面レイアウト',
          'スクロール連動アニメーション',
          '多言語対応（日本語/英語）',
          'スムーズなページ遷移',
          'コーヒーテーマのデザインシステム',
        ],
        longDescription: `このポートフォリオサイトは、開発者としての私の旅路を表現し、モダンなWeb技術と丁寧なデザインを組み合わせています。サイトは、異なる画面サイズに美しく適応する独特の分割画面レイアウトを特徴としており、訪問者に没入感のある体験を提供します。

実装では、Next.js App Routerを活用して最適なパフォーマンスとSEOを実現し、Framer Motionがスムーズなスクロール連動アニメーションを提供してユーザー体験を向上させています。コーヒーテーマのデザインシステムは、温かみのある親しみやすい雰囲気を作り出し、私の個性と開発へのアプローチを反映しています。

主な特徴には、スクロールの進行に応答する動的な液体背景アニメーション、英語と日本語の両方のオーディエンス向けの多言語サポート、そして私のプロジェクト、実績、ブログ投稿の包括的な展示が含まれます。サイトは完全にレスポンシブで、パフォーマンスに最適化されており、すべてのデバイスで高速な読み込み時間とスムーズな操作を保証します。`,
      },
      {
        id: '2',
        title: '企業webサイト制作(株式会社earth re pure)',
        description: 'ボランティアとして知人企業のwebサイトを実装・運用。サーバーの契約やドメインの移管等も行いました。',
        url: 'https://example.com',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Google Analytics'],
        features: [
          'レスポンシブデザイン',
          'SEO最適化',
          'お問い合わせフォーム実装',
          'サーバー・ドメイン管理',
          'コンテンツ管理',
        ],
        longDescription: `株式会社earth re pureの企業サイトをボランティアとして開発・運用しました。モダンなWeb技術を使用して、パフォーマンスとユーザー体験を最適化したサイトを構築しました。

主な業務内容として、サイト構造の実装、ホスティングインフラの構築、ドメイン移管の管理、そしてスムーズな運用を担当しました。クライアントと密に連携し、ビジネスニーズを理解した上で、効果的に企業を表現するソリューションを提供しました。

サイトは、すべてのデバイスで完全にレスポンシブな、クリーンでプロフェッショナルなデザインを特徴としています。検索エンジンの可視性を向上させるためのSEO最適化を実装し、潜在顧客とのコミュニケーションを促進するお問い合わせフォームを統合しました。`,
      },
      {
        id: '3',
        title: '深層学習×絵画でモデルの精度向上実験',
        description: '画像キャプショニングモデルをファインチューニングすることで、絵画ドメインに対して精度向上を目指した実験を行いました。',
        url: 'https://example.com',
        technologies: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'Jupyter Notebook'],
        features: [
          '画像キャプショニングモデルのファインチューニング',
          '絵画ドメインデータセットの準備',
          'モデル評価とメトリクス',
          '転移学習技術',
          'パフォーマンス最適化',
        ],
        longDescription: `この研究プロジェクトは、絵画ドメインに特化した画像キャプショニングモデルの精度向上に焦点を当てました。キュレーションされた絵画データセットで事前学習済みモデルをファインチューニングすることで、絵画やその他の芸術作品に対して正確で文脈的に適切なキャプションを生成するモデルの能力を向上させることを目指しました。

実験には、専門的な絵画データセットの収集と前処理、転移学習技術を使用したTransformerベースのモデルのファインチューニング、そして様々なメトリクスを使用したパフォーマンス評価が含まれました。このプロジェクトは、専門的な用途のためにドメイン固有のファインチューニングがモデル精度を向上させる効果を実証しました。

主な成果には、汎用の画像キャプショニングモデルを絵画ドメインに適応させることに成功し、改善された精度メトリクスを達成し、将来の参照のためにファインチューニングプロセスと結果を文書化することが含まれます。`,
      },
      {
        id: '4',
        title: '強化学習×ゲームでエージェントを作成',
        description: '強化学習を用いて、ゲーム内のエージェントを作成し、最適な行動を学習させる実験を行いました。',
        url: 'https://example.com',
        technologies: ['Python', 'PyTorch', 'Gymnasium', 'Stable-Baselines3', 'NumPy'],
        features: [
          'RLエージェントの実装',
          '環境のセットアップと設定',
          'ポリシー最適化',
          '報酬関数の設計',
          '訓練と評価',
        ],
        longDescription: `このプロジェクトは、強化学習技術を使用してインテリジェントなゲームエージェントを作成することを含みました。目標は、ゲーム環境との相互作用を通じて最適な戦略を学習できるエージェントを訓練し、複雑な意思決定問題を解決する際のRLの力を実証することでした。

実装には、Gymnasiumを使用したゲーム環境のセットアップ、PPOやDQNなどの様々なRLアルゴリズムの実装、そして高性能を達成するためのエージェントの訓練が含まれました。このプロジェクトは、異なる報酬関数と訓練戦略を探索してエージェントの行動を最適化しました。

主な成果には、ベースライン戦略を上回るエージェントの訓練に成功し、異なるRLアルゴリズム間のトレードオフを理解し、強化学習システムの実装と調整における実践的な経験を得ることが含まれます。このプロジェクトは、ゲーム環境にRLを適用する際の課題と機会についての貴重な洞察を提供しました。`,
      },
    ],
    blogPosts: [
      {
        id: '1',
        title: 'Next.js App Routerの実践的な使い方',
        subtitle: 'App Routerを使ったモダンなWebアプリケーション開発のベストプラクティスをまとめました。',
        url: 'https://example.com/blog/1',
        date: '2024-03-15',
        platform: 'Medium',
      },
      {
        id: '2',
        title: 'TypeScriptで型安全な開発を実現する',
        subtitle: '型定義の重要性と、実践的な型設計のテクニックについて解説します。',
        url: 'https://example.com/blog/2',
        date: '2024-03-10',
        platform: 'Zenn',
      },
      {
        id: '3',
        title: 'Framer Motionで実現する美しいアニメーション',
        subtitle: 'スクロール連動アニメーションやページ遷移の実装方法を紹介します。',
        url: 'https://example.com/blog/3',
        date: '2024-03-05',
        platform: 'Note',
      },
      {
        id: '4',
        title: 'Tailwind CSSで効率的なスタイリング',
        subtitle: 'ユーティリティファーストのアプローチで、保守性の高いCSSを書く方法。',
        url: 'https://example.com/blog/4',
        date: '2024-02-28',
        platform: 'Medium',
      },
      {
        id: '5',
        title: 'Webアクセシビリティの重要性',
        subtitle: 'すべてのユーザーが使いやすいWebサイトを作るための基本的な考え方と実装方法。',
        url: 'https://example.com/blog/5',
        date: '2024-02-20',
        platform: 'Zenn',
      },
    ],
    sections: {
      aboutMe: '私について',
      education: '所属・学歴',
      activities: '現在の主な取り組み',
      certifications: '資格',
      internships: 'インターン',
      events: '外部イベント',
      works: 'プロジェクト',
      blog: 'ブログ',
      viewAll: '一覧へ',
      sourceCode: 'ソースコードは',
      back: '戻る',
    },
  },
};

// メールアドレス
export const emailAddress = 'zume2.dev@gmail.com';

// GitHubリポジトリURL
export const repositoryUrl = 'https://github.com/ume01234/portfolio-site';

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ume01234',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rikuto-h-aa316137a/',
    icon: 'linkedin',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@zume2.dev',
    icon: 'newspaper',
  },
  {
    name: 'Note',
    url: 'https://note.com/triple_field/portal',
    icon: 'pen-tool',
  },
  {
    name: 'Zenn',
    url: 'https://zenn.dev/sunlight_white',
    icon: 'file-text',
  },
];

// 言語に応じたデータを取得する関数
export function getData(language: Language = 'en') {
  return data[language];
}

// 後方互換性のため、デフォルトエクスポートも提供
export const profileData = data.en.profileData;
export const activities = data.en.activities;
export const achievements = data.en.achievements;
export const works = data.en.works;
export const blogPosts = data.en.blogPosts;
