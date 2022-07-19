import React from 'react';
import { history } from 'umi';
import styles from './index.module.less';

interface CardItemProps {
  title: string;
  description: string;
  logo: string;
  link?: string;
}

interface SectionProps {
  title: string;
  logo: string;
  cardsList?: CardItemProps[];
}

// 首页应用列表
const appsList: SectionProps[] = [
  {
    title: '敏捷开发平台',
    logo: 'swift-develop',
    cardsList: [
      {
        title: '敏捷应用',
        description: '快速构建web应用',
        logo: 'web-app',
        link: '/biSheng/dashboard/analysis',
      },
      {
        title: '敏捷大屏',
        description: '快速构建可视化大屏',
        logo: 'swift-screen',
        link: '',
      },
    ],
  },
  {
    title: '大数据平台',
    logo: 'big-data',
    cardsList: [
      {
        title: '数融平台',
        description: '雷数大数据开发平台',
        logo: 'data-front',
        link: '/dataFront',
      },
      {
        title: '商业智能平台',
        description: '雷数BI平台',
        logo: 'thunder-bi',
        link: '/thunderBi/dashboards',
      },
    ],
  },
  {
    title: '数字孪生',
    logo: 'digital-twin',
    cardsList: [
      {
        title: '物联网',
        description: '雷数IOT平台',
        logo: 'iot-platform',
        link: '',
      },
    ],
  },
  {
    title: 'AI算法平台',
    logo: 'ai-algorithm',
  },
];

const Homepage = () => {
  const renderCardItem = (cardItem: CardItemProps) => {
    const { title, description, logo, link } = cardItem || {};
    return (
      <div
        className={styles.cardWrap}
        onClick={() => {
          link && history.push(link);
        }}
      >
        <div className={styles.left}>
          <img src={require(`@/assets/${logo}.png`)} />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.arrow}>
          <img src={require('@/assets/go.png')} />
        </div>
      </div>
    );
  };

  const renderSection = (section: SectionProps) => {
    const { title, logo, cardsList = [] } = section || {};
    return (
      <div className={styles.section}>
        <div className={styles.sectionTitle}>
          <img src={require(`@/assets/${logo}.png`)} />
          {title}
        </div>
        <div className={styles.cardList}>{cardsList.map(renderCardItem)}</div>
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={require('@/assets/logo.png')} />
        </div>
        <div className={styles.title}>雷数云平台</div>
        <div className={styles.subTitle}>助力企业搭建高效平台</div>
      </div>
      <div className={styles.contentWrap}>{appsList.map(renderSection)}</div>
    </div>
  );
};

export default Homepage;
