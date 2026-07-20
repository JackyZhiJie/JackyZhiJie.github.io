import type { Project } from '@types';
import img1 from '../img/projects/img1.jpg';
import img2 from '../img/projects/img2.jpg';
import img3 from '../img/projects/img3.jpg';
import img4 from '../img/projects/img4.jpg';
import img5 from '../img/projects/img5.jpg';
import iotProject1Img from '../img/iot/project2.jpg';
import n8n2 from '../img/projects/n8n2.png';
import n8n1 from '../img/projects/n8n1.png';
import cintech_green from '../img/projects/cintec_green.png'
import chinewriting01 from '../img/write_right/algo.jpg'
import iot01 from '../img/iot/award.jpg'
import iot02 from '../img/iot/project1.jpg'
import iot03 from '../img/iot/project2.jpg'
import pdf01 from '../img/projects/img-to-pdf01.png'
import web2docx01 from '../img/projects/web-to-book01.jpg'
import { Images } from 'lucide-react';


export const projects: Project[] = [
  {
    id: '1',
    name: 'Award-winning <strong>Handwriting Analysis</strong> Individual Project',
    descript: 'Developed a web-based system to improve Chinese handwriting quality through <strong>font analysis</strong>, <strong>educational feedback</strong>, and <strong>game-based learning</strong>. Covers algorithm development, interface design, and user testing.',
    category: ['publication', 'education'],
    icon: 'award',
    tags: ['ReactJS', 'OpenCV API', 'Font Vector'],
    // link: 'https://github.com/JackyZhiJie/chinese-handwriting',
    links: [
      { label: 'PDF', url: 'https://github.com/JackyZhiJie/chinese-handwriting/raw/main/paper.pdf' },
      { label: 'DOI', url: 'https://doi.org/10.1109/ICEED62316.2024.1092380' },
      { label: 'Video', url: 'https://www.youtube.com/watch?v=demo' },
      // { label: 'Slides', url: 'https://github.com/JackyZhiJie/chinese-handwriting/raw/main/slides.pdf' }
    ],
    images: [chinewriting01, img2, img4],
    metadata: {
      label: 'IEEE Publication',
      value: 'DOI: 10.1109/ICEED62316.2024.1092380',
    },
    isAwarded: true,
    awardText: 'IEEE Publication 2024',
    bullets: [
      {
        text: '1st Runner-up, Professor Charles K. Kao Student Creativity Awards 2025',
        link: 'https://www.cse.cuhk.edu.hk/news/achievements/pckksca2025/',
      },
      {
        text: 'CUHK Outstanding Student Award for Innovation and Invention 2024',
        link: 'https://www.uc.cuhk.edu.hk/tc/story/dedication-in-action-impacting-beyond-aspiration-xie-chen-zhi-jie-jacky/',
      },
      {
        text: 'Publication at the 13th IEEE International Conference on Engineering Education 2024 (First Author)',
        link: 'https://doi.org/10.1109/ICEED62316.2024.10923800',
      },
      {
        text: 'Conference Presentation Video',
        link: 'https://www.youtube.com/watch?v=DV9rwP-U1nE',
      }
    ],
    // summary: 'This project demonstrates the integration of technical innovation and educational impact, earning recognition in competitions, university awards, and international publication.',
    imageCaption: 'Innovative Hough Algorithm',
    imageCaptions: [
      'Innovative Hough Algorithm Demo',
      'Professor Charles K. Kao Student Creativity Awards 1st Runner-up Certificate',
      'ICEED 2024 Research Presentation Slide Preview'
    ],
  },
  {
    id: '2',
    name: 'CUHK CINTEC <strong>Arduino Air Quality</strong> STEM Workshop',
    descript: 'A comprehensive STEM workshop developed and conducted at CUHK CINTEC, focusing on <strong>environmental monitoring</strong> and <strong>Arduino programming</strong>. Designed to teach secondary school students about air pollution through hands-on experimentation with <strong>PM2.5 sensors</strong>.',
    category: ['education'],
    icon: 'cpu',
    tags: ['Arduino C', 'Gas Calibration', 'Public STEM'],
    link: 'https://github.com/JackyZhiJie/CINTEC-Arduino-Air-Quality-Workshop',
    image: img4,
    images: [img2, img1],
    metadata: {
      label: 'CUHK STEM',
      value: 'CUHK STEM',
    },
  },
  {
    id: '3',
    name: 'CUHK CINTEC <strong>Arduino Green Energy</strong> STEM Workshop',
    descript: 'Developed and conducted at CUHK CINTEC. This STEM workshop focuses on <strong>piezoelectric energy harvesting</strong> and ultrasonic sensing using Arduino, introducing students to <strong>sustainable energy concepts</strong>.',
    category: ['education'],
    icon: 'cpu',
    tags: ['Arduino C', 'Gas Calibration', 'Public STEM'],
    link: 'https://github.com/JackyZhiJie/CINTEC-Arduino-Green-Energy-Workshop',
    image: cintech_green,
    images: [img4, img3, cintech_green],
    metadata: {
      label: 'CUHK STEM',
      value: 'CUHK STEM',
    },
  },
  {
    id: '4',
    name: 'n8n - <strong>Automated News Reporter</strong>',
    descript: 'This workflow keeps the team updated with news without manual searching. Leveraging a <strong>local LLM</strong>, raw RSS feeds are processed into <strong>structured summaries</strong>, delivering the top 5 articles to the inbox.',
    category: ['engineering'],
    icon: 'newspaper',
    tags: ['n8n', 'Automation', 'Local LLM'],
    link: 'https://github.com/JackyZhiJie/n8n-Tech-News-Automation',
    image: n8n1,
    images: [n8n1, n8n2],
    metadata: {
      label: 'n8n',
      value: 'n8n',
    },
  },
  {
    id: '5',
    name: 'n8n - <strong>Signalling Fault Detection</strong> Agent',
    descript: 'Acts as a watchdog for the <strong>signalling infrastructure</strong>. Monitors local log files for changes to trigger an analysis pipeline. The AI Agent detects patterns indicating breakpoints in <strong>induction loop coils</strong>.',
    category: ['engineering'],
    icon: 'scroll',
    tags: ['n8n', 'Automation', 'Local LLM'],
    link: 'https://github.com/JackyZhiJie/n8n-Signalling-Facult-Detection-Agent',
    image: n8n2,
    images: [n8n2, n8n1],
    metadata: {
      label: 'n8n',
      value: 'n8n',
    },
  },
  {
    id: '6',
    name: '<strong>Champion</strong> of the Professional Stream - <strong>IoT Data Hackathon 2026</strong>',
    descript: 'Led team Keep Data Moving to victory by developing an innovative <strong>IoT solution</strong> addressing UAVs, <strong>data automation</strong>, and <strong>network security</strong> in the low-altitude economy.',
    category: ['engineering'],
    icon: 'trophy',
    tags: ['Hackathon', 'Champion', 'Rapid Prototyping'],
    links: [
      { label: 'Solutionn Casebook', url: 'https://www.gs1hk.org/sites/default/files/2026-06/IOT_Data_Hackathon_2026_20260529_V2.pdf' },
      { label: 'Yahoo News', url: 'https://finance.yahoo.com/sectors/technology/articles/iot-data-hackathon-2026-winners-091300455.html' },
      { label: '經濟日報 報導', url: 'https://money.udn.com/money/story/123828/9445880' },
      { label: 'My LinkedIn Post', url: 'https://www.linkedin.com/posts/jackyxczj_iothackathon2026-mtr-keepdatamoving-activity-7451113204476272640-_h5S?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy' }
    ],
    link: 'https://github.com/JackyZhiJie/Keep-Data-Moving-GS1-IoT-DataHackathon2026',
    images: [iot01, iot02, iot03],
    metadata: {
      label: 'MTR Corp',
      value: 'Champion',
    },
    isAwarded: true,
    awardText: 'Champion & Triple Award Winner',
    bullets: [
      {
        text: 'Champion of the Professional Stream',
        iconType: 'trophy'
      },
      {
        text: 'Best Low-Altitude Economy Innovation Award (presented by HKT)',
        iconType: 'cpu'
      },
      {
        text: 'Innovator of Secure by Design Award (presented by Check Point)',
        iconType: 'shield'
      }
    ],
    // summary: 'This victory showcases technical excellence in building robust, data-driven solutions for the emerging low-altitude economy, combined with strong team leadership and the ability to translate complex ideas into winning, practical solutions.',
    imageCaption: 'IoT Data Hackathon Demo',
    imageCaptions: [
      'Hackathon Award',
      'Expo Booth',
    ],
  },
  {
    id: '7',
    name: 'Web Book to <strong>DOCX Converter</strong>',
    descript: 'A Python script that automatically converts an entire online web book into a single, perfectly formatted Microsoft Word (.docx) document using COM automation.',
    category: ['others'],
    icon: 'file-code',
    tags: ['Python 3', 'pywin32', 'COM Automation', 'Web Scraping'],
    link: 'https://github.com/JackyZhiJie/web-book-to-docx',
    metadata: {
      label: 'Side Project',
      value: 'Python Utility',
    },
    images: [web2docx01],
  },
  {
    id: '8',
    name: 'Image to <strong>PDF Converter</strong>',
    descript: 'A privacy-first, fully responsive web application that converts images into highly optimized, compressed PDF documents. All operations happen 100% client-side in the browser.',
    category: ['others'],
    icon: 'file-text',
    tags: ['React 18', 'TypeScript', 'pdf-lib', 'Vite 5'],
    link: 'https://github.com/JackyZhiJie/Image-to-PDF-Converter',
    links: [
      { label: 'Live Demo', url: 'https://jackyzhijie.github.io/Image-to-PDF-Converter/' }
    ],
    metadata: {
      label: 'Side Project',
      value: 'React & WebRTC',
    },
    images: [pdf01],
    imageCaption: 'Image to PDF Converter',
  },
];
