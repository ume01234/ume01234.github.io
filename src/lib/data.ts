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
  title: string;
  description: string;
  url: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  date: string;
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
      name: 'Your Name',
      catchCopy: 'An Engineer Traveling Through the Galaxy',
      vision: 'Creating new worlds through technology',
      about: `I believe in possibilities as vast as the universe, connecting stars with the language of code.

Through my experiences, I have explored a wide range of technical domains from frontend development to backend and infrastructure. I am particularly interested in UI/UX design that enhances user experience and scalable system architecture.

Currently, I am learning the latest web technologies while honing practical skills through personal projects. I actively contribute to team development and open source, valuing connections within the community.

In the future, I aim to create products that enrich people's lives through the fusion of technology and design.`,
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
        'Fundamental Information Technology Engineer',
        'Applied Information Technology Engineer',
        'AWS Certified Cloud Practitioner',
      ],
      internships: [
        'Company ○○ Frontend Development Internship (Summer 2024)',
        'Company △△ Backend Development Internship (Winter 2023)',
      ],
      events: [
        'React Conference 2024 Attendance',
        'Web Technology Study Group Presentation',
        'Hackathon Winner (Spring 2024)',
      ],
    },
    works: [
      {
        title: 'Personal Portfolio Site',
        description: 'This site itself is my first work. A portfolio site themed around space, built with Next.js and Framer Motion.',
        url: 'https://example.com',
      },
      {
        title: 'Task Management App',
        description: 'A task management application built with React and TypeScript. Implemented drag & drop functionality and real-time synchronization.',
        url: 'https://example.com',
      },
      {
        title: 'Weather Dashboard',
        description: 'A dashboard utilizing weather APIs. A project pursuing beautiful UI and intuitive usability.',
        url: 'https://example.com',
      },
      {
        title: 'Art Gallery',
        description: 'A 3D art gallery using Three.js. Showcasing works through interactive experiences.',
        url: 'https://example.com',
      },
    ],
    blogPosts: [
      {
        id: '1',
        title: 'Practical Usage of Next.js App Router',
        subtitle: 'Best practices for modern web application development using App Router.',
        url: 'https://example.com/blog/1',
        date: '2024-03-15',
      },
      {
        id: '2',
        title: 'Achieving Type-Safe Development with TypeScript',
        subtitle: 'Explaining the importance of type definitions and practical type design techniques.',
        url: 'https://example.com/blog/2',
        date: '2024-03-10',
      },
      {
        id: '3',
        title: 'Beautiful Animations with Framer Motion',
        subtitle: 'Introducing implementation methods for scroll-linked animations and page transitions.',
        url: 'https://example.com/blog/3',
        date: '2024-03-05',
      },
      {
        id: '4',
        title: 'Efficient Styling with Tailwind CSS',
        description: 'How to write maintainable CSS with a utility-first approach.',
        url: 'https://example.com/blog/4',
        date: '2024-02-28',
      },
      {
        id: '5',
        title: 'The Importance of Web Accessibility',
        subtitle: 'Basic concepts and implementation methods for creating websites that are easy for all users to use.',
        url: 'https://example.com/blog/5',
        date: '2024-02-20',
      },
    ],
    sections: {
      career: 'Career & Education',
      activities: 'Current Main Activities',
      certifications: 'Certifications',
      internships: 'Internships',
      events: 'External Events',
      works: 'Works',
      blog: 'Blog',
      viewAll: 'View All',
    },
  },
  ja: {
    profileData: {
      name: 'Your Name',
      catchCopy: '銀河を旅するエンジニア',
      vision: '技術を通じて、新しい世界を創造する',
      about: `私は宇宙のように広がる可能性を信じ、コードという言語で星々を結ぶ旅人です。
  
  これまでの経験を通じて、フロントエンド開発からバックエンド、インフラまで幅広い技術領域を探索してきました。特に、ユーザー体験を向上させるためのUI/UXデザインと、スケーラブルなシステム設計に興味を持っています。
  現在は、最新のWeb技術を学びながら、個人プロジェクトを通じて実践的なスキルを磨いています。チーム開発やオープンソースへの貢献も積極的に行っており、コミュニティとのつながりを大切にしています。
  
  将来は、テクノロジーとデザインの融合により、人々の生活をより豊かにするプロダクトを創出したいと考えています。`,
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
        '基本情報技術者',
        '応用情報技術者',
        'AWS Certified Cloud Practitioner',
      ],
      internships: [
        '株式会社○○ フロントエンド開発インターン（2024年夏）',
        '株式会社△△ バックエンド開発インターン（2023年冬）',
      ],
      events: [
        'React Conference 2024 参加',
        'Web技術勉強会 登壇',
        'ハッカソン優勝（2024年春）',
      ],
    },
    works: [
      {
        title: 'Personal Portfolio Site',
        description: 'このサイト自体が最初の作品です。Next.jsとFramer Motionを活用した、宇宙をテーマにしたポートフォリオサイト。',
        url: 'https://example.com',
      },
      {
        title: 'Task Management App',
        description: 'ReactとTypeScriptで構築したタスク管理アプリケーション。ドラッグ&ドロップ機能とリアルタイム同期を実装。',
        url: 'https://example.com',
      },
      {
        title: 'Weather Dashboard',
        description: '天気予報APIを活用したダッシュボード。美しいUIと直感的な操作性を追求したプロジェクト。',
        url: 'https://example.com',
      },
      {
        title: 'Art Gallery',
        description: 'Three.jsを活用した3Dアートギャラリー。インタラクティブな体験を通じて作品を展示。',
        url: 'https://example.com',
      },
    ],
    blogPosts: [
      {
        id: '1',
        title: 'Next.js App Routerの実践的な使い方',
        subtitle: 'App Routerを使ったモダンなWebアプリケーション開発のベストプラクティスをまとめました。',
        url: 'https://example.com/blog/1',
        date: '2024-03-15',
      },
      {
        id: '2',
        title: 'TypeScriptで型安全な開発を実現する',
        subtitle: '型定義の重要性と、実践的な型設計のテクニックについて解説します。',
        url: 'https://example.com/blog/2',
        date: '2024-03-10',
      },
      {
        id: '3',
        title: 'Framer Motionで実現する美しいアニメーション',
        subtitle: 'スクロール連動アニメーションやページ遷移の実装方法を紹介します。',
        url: 'https://example.com/blog/3',
        date: '2024-03-05',
      },
      {
        id: '4',
        title: 'Tailwind CSSで効率的なスタイリング',
        subtitle: 'ユーティリティファーストのアプローチで、保守性の高いCSSを書く方法。',
        url: 'https://example.com/blog/4',
        date: '2024-02-28',
      },
      {
        id: '5',
        title: 'Webアクセシビリティの重要性',
        subtitle: 'すべてのユーザーが使いやすいWebサイトを作るための基本的な考え方と実装方法。',
        url: 'https://example.com/blog/5',
        date: '2024-02-20',
      },
    ],
    sections: {
      career: '経歴・学歴',
      activities: '現在の主な取り組み',
      certifications: '資格',
      internships: 'インターン',
      events: '外部イベント',
      works: 'Works',
      blog: 'Blog',
      viewAll: '一覧へ',
    },
  },
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    name: 'X (Twitter)',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@yourusername',
    icon: 'book-open',
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
