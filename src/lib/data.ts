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
        title: 'Personal Portfolio Site',
        description: 'This site itself is my first work. A portfolio site themed around space, built with Next.js and Framer Motion.',
        url: 'https://example.com',
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
        title: 'Task Management App',
        description: 'A task management application built with React and TypeScript. Implemented drag & drop functionality and real-time synchronization.',
        url: 'https://example.com',
        technologies: ['React', 'TypeScript', 'Redux', 'Firebase', 'Material-UI'],
        features: [
          'Drag & drop task organization',
          'Real-time collaboration',
          'Task filtering and search',
          'Due date reminders',
          'Team workspace management',
        ],
        longDescription: `A comprehensive task management application designed to help teams stay organized and productive. Built with React and TypeScript, this app provides a robust foundation for managing complex workflows.

The application features an intuitive drag-and-drop interface that allows users to easily reorganize tasks and priorities. Real-time synchronization powered by Firebase ensures that team members always have access to the latest updates, enabling seamless collaboration.

Key features include advanced filtering and search capabilities, customizable task views, and intelligent due date reminders. The app supports multiple workspaces, allowing teams to organize projects by department, client, or any other criteria. The Material-UI design system ensures a consistent, professional appearance across all platforms.`,
      },
      {
        id: '3',
        title: 'Weather Dashboard',
        description: 'A dashboard utilizing weather APIs. A project pursuing beautiful UI and intuitive usability.',
        url: 'https://example.com',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeatherMap API', 'CSS3', 'PWA'],
        features: [
          'Real-time weather data',
          'Interactive weather charts',
          '7-day forecast',
          'Location-based weather',
          'Offline PWA support',
        ],
        longDescription: `A beautiful and intuitive weather dashboard that provides users with comprehensive weather information at a glance. The application leverages the OpenWeatherMap API to deliver accurate, real-time weather data for locations worldwide.

The dashboard features interactive charts that visualize temperature trends, precipitation forecasts, and other meteorological data. Users can easily switch between different locations and view detailed 7-day forecasts with hourly breakdowns.

The design prioritizes clarity and usability, with a clean interface that makes it easy to understand weather conditions at a glance. The application is built as a Progressive Web App (PWA), allowing users to install it on their devices and access weather information even when offline. Responsive design ensures optimal viewing experience across desktop, tablet, and mobile devices.`,
      },
      {
        id: '4',
        title: 'Art Gallery',
        description: 'A 3D art gallery using Three.js. Showcasing works through interactive experiences.',
        url: 'https://example.com',
        technologies: ['Three.js', 'React', 'WebGL', 'GSAP', 'Blender'],
        features: [
          '3D virtual gallery space',
          'Interactive artwork exploration',
          'VR/AR compatibility',
          'Dynamic lighting effects',
          'Artwork detail views',
        ],
        longDescription: `An immersive 3D virtual art gallery that brings artwork to life through interactive web experiences. Built with Three.js and WebGL, this project creates a photorealistic gallery environment that users can explore from their browsers.

The gallery features a carefully designed 3D space with realistic lighting and materials, creating an authentic museum-like atmosphere. Users can navigate through the gallery using intuitive controls, zoom in on artworks to view fine details, and access additional information about each piece.

The project demonstrates advanced 3D web development techniques, including custom shaders, post-processing effects, and optimized rendering pipelines. The gallery is designed to be accessible across different devices, with performance optimizations ensuring smooth experiences even on lower-end hardware. Future plans include VR/AR support to create even more immersive viewing experiences.`,
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
        title: 'Personal Portfolio Site',
        description: 'このサイト自体が最初の作品です。Next.jsとFramer Motionを活用した、コーヒーをテーマにしたポートフォリオサイト。',
        url: 'https://example.com',
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
        title: 'Task Management App',
        description: 'ReactとTypeScriptで構築したタスク管理アプリケーション。ドラッグ&ドロップ機能とリアルタイム同期を実装。',
        url: 'https://example.com',
        technologies: ['React', 'TypeScript', 'Redux', 'Firebase', 'Material-UI'],
        features: [
          'ドラッグ&ドロップによるタスク整理',
          'リアルタイムコラボレーション',
          'タスクのフィルタリングと検索',
          '期限リマインダー',
          'チームワークスペース管理',
        ],
        longDescription: `チームが整理整頓され、生産性を維持できるように設計された包括的なタスク管理アプリケーション。ReactとTypeScriptで構築され、複雑なワークフローを管理するための堅牢な基盤を提供します。

アプリケーションは、ユーザーがタスクと優先順位を簡単に再編成できる直感的なドラッグ&ドロップインターフェースを特徴としています。Firebaseによって強化されたリアルタイム同期により、チームメンバーは常に最新の更新にアクセスでき、シームレスなコラボレーションを可能にします。

主な機能には、高度なフィルタリングと検索機能、カスタマイズ可能なタスクビュー、インテリジェントな期限リマインダーが含まれます。アプリは複数のワークスペースをサポートし、チームが部門、クライアント、またはその他の基準でプロジェクトを整理できるようにします。Material-UIデザインシステムにより、すべてのプラットフォームで一貫したプロフェッショナルな外観が保証されます。`,
      },
      {
        id: '3',
        title: 'Weather Dashboard',
        description: '天気予報APIを活用したダッシュボード。美しいUIと直感的な操作性を追求したプロジェクト。',
        url: 'https://example.com',
        technologies: ['Vue.js', 'Chart.js', 'OpenWeatherMap API', 'CSS3', 'PWA'],
        features: [
          'リアルタイム天気データ',
          'インタラクティブな天気チャート',
          '7日間の予報',
          '位置ベースの天気情報',
          'オフラインPWAサポート',
        ],
        longDescription: `一目で包括的な天気情報を提供する、美しく直感的な天気ダッシュボード。アプリケーションはOpenWeatherMap APIを活用して、世界中の場所の正確なリアルタイム天気データを提供します。

ダッシュボードは、気温トレンド、降水予報、その他の気象データを視覚化するインタラクティブなチャートを特徴としています。ユーザーは異なる場所を簡単に切り替え、時間別の内訳を含む詳細な7日間予報を表示できます。

デザインは明確さと使いやすさを優先し、天気状況を一目で理解しやすいクリーンなインターフェースを提供します。アプリケーションはProgressive Web App（PWA）として構築されており、ユーザーがデバイスにインストールして、オフライン時でも天気情報にアクセスできるようにします。レスポンシブデザインにより、デスクトップ、タブレット、モバイルデバイス全体で最適な閲覧体験が保証されます。`,
      },
      {
        id: '4',
        title: 'Art Gallery',
        description: 'Three.jsを活用した3Dアートギャラリー。インタラクティブな体験を通じて作品を展示。',
        url: 'https://example.com',
        technologies: ['Three.js', 'React', 'WebGL', 'GSAP', 'Blender'],
        features: [
          '3D仮想ギャラリースペース',
          'インタラクティブな作品探索',
          'VR/AR互換性',
          '動的ライティング効果',
          '作品詳細ビュー',
        ],
        longDescription: `インタラクティブなWeb体験を通じて作品に命を吹き込む、没入型の3D仮想アートギャラリー。Three.jsとWebGLで構築されたこのプロジェクトは、ユーザーがブラウザから探索できる写実的なギャラリー環境を作成します。

ギャラリーは、リアルなライティングとマテリアルを備えた慎重に設計された3Dスペースを特徴とし、本物の博物館のような雰囲気を作り出します。ユーザーは直感的なコントロールを使用してギャラリーをナビゲートし、作品にズームインして細部を表示し、各作品に関する追加情報にアクセスできます。

プロジェクトは、カスタムシェーダー、ポストプロセシング効果、最適化されたレンダリングパイプラインを含む、高度な3D Web開発技術を示しています。ギャラリーは異なるデバイス間でアクセス可能になるように設計されており、パフォーマンス最適化により、低スペックのハードウェアでもスムーズな体験を保証します。将来の計画には、さらに没入感のある閲覧体験を作成するためのVR/ARサポートが含まれます。`,
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
