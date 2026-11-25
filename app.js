/* ==========================================================================
   Abhishek Sinha — Interactive Research Portfolio Logic
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Publications Dataset (Verified Titles, Venues, Authors & BibTeX)
     ------------------------------------------------------------------------ */
  const PUBLICATIONS = [
    {
      id: 'gemini-2-5',
      featuredOrder: 1,
      year: 2025,
      title: 'Gemini 2.5: Pushing the Frontier with Advanced Reasoning, Multimodality, Long Context, and Next Generation Agentic Capabilities',
      authors: 'Gemini Team, Google DeepMind (Core Contributor: Abhishek Sinha)',
      venue: 'Technical Report · 2025',
      shortVenue: 'Gemini 2.5',
      role: 'Core Contributor',
      award: null,
      image: null,
      svgTheme: 'gemini25',
      summary: 'Contributed to native image generation integration with Gemini and multimodal post-training, advancing unified visual understanding and generation capabilities alongside reasoning and long-context modeling.',
      topics: ['multimodal', 'generative'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/abs/2507.06261', primary: true },
        { label: 'Nano Banana Pro Blog', url: 'https://blog.google/technology/ai/nano-banana-pro/' },
        { label: 'Nano Banana Pro Keynote', url: 'https://www.youtube.com/watch?v=hk6gwiZmSWA&t=1789s' }
      ],
      bibtex: `@article{comanici2025gemini25,\n  title={Gemini 2.5: Pushing the Frontier with Advanced Reasoning, Multimodality, Long Context, and Next Generation Agentic Capabilities},\n  author={{Gemini Team, Google DeepMind}},\n  journal={arXiv preprint arXiv:2507.06261},\n  year={2025}\n}`
    },
    {
      id: 'gemini-1-5',
      featuredOrder: 2,
      year: 2024,
      title: 'Gemini 1.5: Unlocking Multimodal Understanding Across Millions of Tokens of Context',
      authors: 'Gemini Team, Google DeepMind (Core Contributor: Abhishek Sinha)',
      venue: 'Technical Report · 2024',
      shortVenue: 'Gemini 1.5',
      role: 'Core Contributor',
      award: null,
      image: null,
      svgTheme: 'gemini15',
      summary: 'Core contributor to multimodal post-training for Gemini 1.5, strengthening visual instruction following and multimodal understanding across ultra-long contexts.',
      topics: ['multimodal'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/abs/2403.05530', primary: true }
      ],
      bibtex: `@article{reid2024gemini15,\n  title={Gemini 1.5: Unlocking multimodal understanding across millions of tokens of context},\n  author={{Gemini Team, Google DeepMind}},\n  journal={arXiv preprint arXiv:2403.05530},\n  year={2024}\n}`
    },
    {
      id: 'h-divergence',
      featuredOrder: 3,
      year: 2022,
      title: 'Comparing Distributions by Measuring Differences that Affect Decision Making',
      authors: 'Shengjia Zhao*, Abhishek Sinha*, Yutong He, Aidan Perreault, Jiaming Song, Stefano Ermon',
      venue: 'ICLR 2022',
      shortVenue: 'ICLR 2022',
      role: 'Joint First Author',
      award: 'Best Paper Award',
      image: 'img/h_div.png',
      summary: 'Proposed H-divergence to measure the discrepancy between two probability distributions via optimal decision loss. Outperformed prior two-sample tests and FID for image quality evaluation, with applications spanning feature selection and climate analysis.',
      topics: ['generative', 'robustness', 'awards'],
      links: [
        { label: 'Paper PDF', url: 'https://openreview.net/pdf?id=KB5onONJIAU', primary: true }
      ],
      bibtex: `@inproceedings{zhao2022comparing,\n  title={Comparing Distributions by Measuring Differences that Affect Decision Making},\n  author={Zhao, Shengjia and Sinha, Abhishek and He, Yutong and Perreault, Aidan and Song, Jiaming and Ermon, Stefano},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2022},\n  note={Best Paper Award}\n}`
    },
    {
      id: 'd2c',
      featuredOrder: 4,
      year: 2021,
      title: 'D2C: Diffusion-Decoding Models for Few-shot Conditional Generation',
      authors: 'Abhishek Sinha*, Jiaming Song*, Chenlin Meng, Stefano Ermon',
      venue: 'NeurIPS 2021',
      shortVenue: 'NeurIPS 2021',
      role: 'Joint First Author',
      award: null,
      image: 'img/D2C.png',
      summary: 'One of the earliest latent diffusion models: pairs a contrastive-regularized VAE for rich semantic latent representations with a diffusion prior over the latent space, achieving state-of-the-art few-shot conditional image generation and manipulation.',
      topics: ['generative', 'representation'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/abs/2106.06819', primary: true },
        { label: 'Project Page', url: 'https://d2c-model.github.io/' },
        { label: 'Code', url: 'https://github.com/jiamings/d2c' }
      ],
      bibtex: `@inproceedings{sinha2021d2c,\n  title={D2C: Diffusion-Decoding Models for Few-shot Conditional Generation},\n  author={Sinha, Abhishek and Song, Jiaming and Meng, Chenlin and Ermon, Stefano},\n  booktitle={Advances in Neural Information Processing Systems (NeurIPS)},\n  year={2021}\n}`
    },
    {
      id: 'nda',
      featuredOrder: 5,
      year: 2021,
      title: 'Negative Data Augmentation',
      authors: 'Abhishek Sinha*, Kumar Ayush*, Jiaming Song, Burak Uzkent, Hongxia Jin, Stefano Ermon',
      venue: 'ICLR 2021',
      shortVenue: 'ICLR 2021',
      role: 'Joint First Author',
      award: null,
      image: 'img/NDA.png',
      summary: 'Introduced a GAN training objective and contrastive learning strategy leveraging out-of-distribution negative data augmentations, delivering strong gains in conditional/unconditional image generation, anomaly detection, and image/video representation learning.',
      topics: ['generative', 'representation'],
      links: [
        { label: 'Paper PDF', url: 'https://openreview.net/pdf?id=Ovp8dvB8IBH', primary: true },
        { label: 'Video Summary', url: 'https://www.youtube.com/watch?v=K-1mN2mz66k' }
      ],
      bibtex: `@inproceedings{sinha2021negative,\n  title={Negative Data Augmentation},\n  author={Sinha, Abhishek and Ayush, Kumar and Song, Jiaming and Uzkent, Burak and Jin, Hongxia and Ermon, Stefano},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2021}\n}`
    },
    {
      id: 'introspection',
      featuredOrder: 6,
      year: 2017,
      title: 'Introspection: Accelerating Neural Network Training By Learning Weight Evolution',
      authors: 'Abhishek Sinha, Aahitagni Mukherjee, Mausoom Sarkar, Balaji Krishnamurthy',
      venue: 'ICLR 2017',
      shortVenue: 'ICLR 2017',
      role: 'First Author',
      award: null,
      image: 'img/introspection.png',
      summary: 'Developed an introspection network that forecasts future weight trajectories to jump ahead along optimization paths, cutting deep network training time by 20% on CIFAR-10 and 40% on ImageNet.',
      topics: ['robustness'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/pdf/1704.04959.pdf', primary: true }
      ],
      bibtex: `@inproceedings{sinha2017introspection,\n  title={Introspection: Accelerating Neural Network Training By Learning Weight Evolution},\n  author={Sinha, Abhishek and Mukherjee, Aahitagni and Sarkar, Mausoom and Krishnamurthy, Balaji},\n  booktitle={International Conference on Learning Representations (ICLR)},\n  year={2017}\n}`
    },
    {
      id: 'fashion-retrieval',
      featuredOrder: 7,
      year: 2019,
      title: 'Powering Robust Fashion Retrieval with Information Rich Feature Embeddings',
      authors: 'Ayush Chopra, Abhishek Sinha, Hiresh Gupta, Mausoom Sarkar, Kumar Ayush, Balaji Krishnamurthy',
      venue: 'CVPR Workshop 2019',
      shortVenue: 'CVPRW 2019',
      role: null,
      award: 'Best Paper Award',
      image: 'img/fashion.png',
      summary: 'Proposed a grid-based Siamese training objective enabling the network to contrast multiple positive and negative apparel instances simultaneously, powering Adobe\'s production visual search system.',
      topics: ['representation', 'awards'],
      links: [
        { label: 'Paper PDF', url: 'https://openaccess.thecvf.com/content_CVPRW_2019/papers/FFSS-USAD/Chopra_Powering_Robust_Fashion_Retrieval_With_Information_Rich_Feature_Embeddings_CVPRW_2019_paper.pdf', primary: true }
      ],
      bibtex: `@inproceedings{chopra2019powering,\n  title={Powering Robust Fashion Retrieval with Information Rich Feature Embeddings},\n  author={Chopra, Ayush and Sinha, Abhishek and Gupta, Hiresh and Sarkar, Mausoom and Ayush, Kumar and Krishnamurthy, Balaji},\n  booktitle={IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)},\n  year={2019},\n  note={Best Paper Award}\n}`
    },
    {
      id: 'manifold-mixup',
      featuredOrder: 8,
      year: 2020,
      title: 'Charting the Right Manifold: Manifold Mixup for Few-shot Learning',
      authors: 'Puneet Mangla, Mayank Singh, Abhishek Sinha, Nupur Kumari, Vineeth N. Balasubramanian, Balaji Krishnamurthy',
      venue: 'WACV 2020',
      shortVenue: 'WACV 2020',
      role: null,
      award: null,
      image: 'img/few_shot.png',
      summary: 'Combined self-supervision (rotation and exemplar tasks) with manifold mixup regularization for few-shot classification, surpassing prior state-of-the-art accuracy on mini-ImageNet, CUB, and CIFAR-FS by 3–8%.',
      topics: ['representation'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/pdf/1907.12087.pdf', primary: true }
      ],
      bibtex: `@inproceedings{mangla2020charting,\n  title={Charting the Right Manifold: Manifold Mixup for Few-shot Learning},\n  author={Mangla, Puneet and Singh, Mayank and Sinha, Abhishek and Kumari, Nupur and Balasubramanian, Vineeth N and Krishnamurthy, Balaji},\n  booktitle={IEEE Winter Conference on Applications of Computer Vision (WACV)},\n  year={2020}\n}`
    },
    {
      id: 'latent-adversarial',
      featuredOrder: 9,
      year: 2019,
      title: 'Harnessing the Vulnerability of Latent Layers in Adversarially Trained Models',
      authors: 'Nupur Kumari, Mayank Singh, Abhishek Sinha, Harshitha Machiraju, Balaji Krishnamurthy, Vineeth N. Balasubramanian',
      venue: 'IJCAI 2019',
      shortVenue: 'IJCAI 2019',
      role: null,
      award: null,
      image: 'img/lat.png',
      summary: 'Analyzed latent-layer susceptibility to perturbations in adversarially trained networks and proposed Latent Adversarial Training (LAT), achieving state-of-the-art robustness against strong attacks.',
      topics: ['robustness'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/pdf/1905.05186.pdf', primary: true }
      ],
      bibtex: `@inproceedings{kumari2019harnessing,\n  title={Harnessing the Vulnerability of Latent Layers in Adversarially Trained Models},\n  author={Kumari, Nupur and Singh, Mayank and Sinha, Abhishek and Machiraju, Harshitha and Krishnamurthy, Balaji and Balasubramanian, Vineeth N},\n  booktitle={International Joint Conference on Artificial Intelligence (IJCAI)},\n  year={2019}\n}`
    },
    {
      id: 'language-grounding',
      featuredOrder: 10,
      year: 2019,
      title: 'Attention Based Natural Language Grounding By Navigating Virtual Environment',
      authors: 'Abhishek Sinha, Akilesh Badrinaaraayanan, Mausoom Sarkar, Balaji Krishnamurthy',
      venue: 'WACV 2019',
      shortVenue: 'WACV 2019',
      role: 'First Author',
      award: null,
      image: 'img/language_grounding.png',
      summary: 'Designed an attention-driven visual-textual fusion architecture for embodied language grounding across 2D grid and 3D virtual navigation environments, outperforming prior methods in both speed and task success.',
      topics: ['multimodal'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/pdf/1804.08454.pdf', primary: true }
      ],
      bibtex: `@inproceedings{sinha2019attention,\n  title={Attention Based Natural Language Grounding by Navigating Virtual Environment},\n  author={Sinha, Abhishek and Badrinaaraayanan, Akilesh and Sarkar, Mausoom and Krishnamurthy, Balaji},\n  booktitle={IEEE Winter Conference on Applications of Computer Vision (WACV)},\n  year={2019}\n}`
    },
    {
      id: 'hybrid-mi',
      featuredOrder: 11,
      year: 2021,
      title: 'Hybrid Mutual Information Lower-Bound Estimators For Representation Learning',
      authors: 'Abhishek Sinha et al.',
      venue: 'ICLR 2021 Workshop · Neural Compression',
      shortVenue: 'ICLRW 2021',
      role: null,
      award: null,
      image: 'img/hybrid_model.png',
      summary: 'Proposed a hybrid variational framework uniting contrastive representation bounds with autoencoding reconstruction and a latent diffusion prior, enabling a single model to excel at both representation learning and generation.',
      topics: ['generative', 'representation'],
      links: [
        { label: 'Paper PDF', url: 'https://openreview.net/pdf?id=0GlUoWkRj8', primary: true }
      ],
      bibtex: `@inproceedings{sinha2021hybrid,\n  title={Hybrid Mutual Information Lower-Bound Estimators For Representation Learning},\n  author={Sinha, Abhishek and others},\n  booktitle={ICLR Workshop on Neural Compression: From Information Theory to Applications},\n  year={2021}\n}`
    },
    {
      id: 'perceptually-aligned',
      featuredOrder: 12,
      year: 2020,
      title: 'On the Benefits of Models with Perceptually-Aligned Gradients',
      authors: 'Gunjan Aggarwal, Abhishek Sinha, Nupur Kumari, Mayank Kumar Singh',
      venue: 'ICLR 2020 Workshop · Towards Trustworthy ML',
      shortVenue: 'ICLRW 2020',
      role: null,
      award: null,
      image: 'img/adversarial.png',
      summary: 'Demonstrated that models adversarially trained with small perturbations exhibit interpretable, perceptually aligned gradients with minimal clean accuracy loss — boosting zero-shot transfer and weakly supervised object localization.',
      topics: ['robustness', 'representation'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/pdf/2005.01499.pdf', primary: true }
      ],
      bibtex: `@inproceedings{aggarwal2020benefits,\n  title={On the Benefits of Models with Perceptually-Aligned Gradients},\n  author={Aggarwal, Gunjan and Sinha, Abhishek and Kumari, Nupur and Singh, Mayank Kumar},\n  booktitle={ICLR Workshop on Towards Trustworthy ML},\n  year={2020}\n}`
    },
    {
      id: 'cfinegan',
      featuredOrder: 13,
      year: 2019,
      title: 'cFineGAN: Unsupervised Multi-Conditional Fine-Grained Image Generation',
      authors: 'Gunjan Aggarwal, Abhishek Sinha',
      venue: 'NeurIPS 2019 Workshop · ML for Creativity & Design',
      shortVenue: 'NeurIPSW 2019',
      role: null,
      award: null,
      image: 'img/finegan.png',
      summary: 'Introduced an unsupervised multi-conditional image synthesis pipeline that disentangles object geometry and appearance, combining the shape of one input image with the fine-grained texture of another.',
      topics: ['generative'],
      links: [
        { label: 'Paper PDF', url: 'https://arxiv.org/pdf/1912.05028.pdf', primary: true }
      ],
      bibtex: `@inproceedings{aggarwal2019cfinegan,\n  title={cFineGAN: Unsupervised multi-conditional fine-grained image generation},\n  author={Aggarwal, Gunjan and Sinha, Abhishek},\n  booktitle={NeurIPS Workshop on Machine Learning for Creativity and Design 3.0},\n  year={2019}\n}`
    },
    {
      id: 'custom-kernel',
      featuredOrder: 14,
      year: 2019,
      title: 'Improving Classification Performance of Support Vector Machines via Guided Custom Kernel Search',
      authors: 'Kumar Ayush, Abhishek Sinha',
      venue: 'GECCO 2019',
      shortVenue: 'GECCO 2019',
      role: null,
      award: null,
      image: 'img/custom_kernel.png',
      summary: 'Adapted reinforcement-learning neural architecture search with an RNN controller to automatically discover high-performing custom SVM kernel functions on MNIST.',
      topics: ['robustness'],
      links: [
        { label: 'ACM Paper', url: 'https://dl.acm.org/doi/10.1145/3319619.3321923', primary: true }
      ],
      bibtex: `@inproceedings{ayush2019improving,\n  title={Improving Classification Performance of Support Vector Machines via Guided Custom Kernel Search},\n  author={Ayush, Kumar and Sinha, Abhishek},\n  booktitle={Proceedings of the Genetic and Evolutionary Computation Conference Companion (GECCO)},\n  year={2019}\n}`
    }
  ];

  const TOPIC_DEFINITIONS = [
    { id: 'all', label: 'All' },
    { id: 'awards', label: '★ Best Papers' },
    { id: 'generative', label: 'Generative Models' },
    { id: 'multimodal', label: 'Multimodal & LLMs' },
    { id: 'representation', label: 'Representation & Few-Shot' },
    { id: 'robustness', label: 'Robustness & Optimization' }
  ];

  const state = {
    topic: 'all',
    search: '',
    sort: 'featured',
    view: 'list'
  };

  /* ------------------------------------------------------------------------
     2. Utility: Toast & Clipboard
     ------------------------------------------------------------------------ */
  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 2400);
  }

  async function copyToClipboard(text, successMsg) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      showToast(successMsg);
      return true;
    } catch {
      showToast('Unable to copy automatically — please copy manually.');
      return false;
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function formatAuthors(authorsStr) {
    const safe = escapeHtml(authorsStr);
    return safe.replace(/Abhishek Sinha\*?/g, (match) => `<strong>${match}</strong>`);
  }

  /* ------------------------------------------------------------------------
     3. Theme Toggle & Shortcuts Hint
     ------------------------------------------------------------------------ */
  const themeToggleBtn = document.getElementById('theme-toggle');
  function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', next);
    showToast(next === 'dark' ? 'Switched to dark studio theme' : 'Switched to warm paper theme');
  }
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
  }

  // Platform-aware ⌘K vs Ctrl K
  const isMac = /Mac|iPhone|iPod|iPad/i.test(navigator.platform || navigator.userAgent || '');
  const shortcutHint = document.getElementById('cmd-shortcut-hint');
  if (shortcutHint && !isMac) {
    shortcutHint.textContent = 'Ctrl K';
  }

  // Copy email button
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyEmailLabel = document.getElementById('copy-email-label');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const ok = await copyToClipboard('abhishek.sinha94@gmail.com', 'Copied abhishek.sinha94@gmail.com');
      if (ok && copyEmailLabel) {
        copyEmailLabel.textContent = 'Copied ✓';
        setTimeout(() => { copyEmailLabel.textContent = 'Copy Email'; }, 1800);
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. Scroll Progress, Nav Scroll-Spy & Mobile Drawer
     ------------------------------------------------------------------------ */
  const scrollProgress = document.getElementById('scroll-progress');
  const navLinks = Array.from(document.querySelectorAll('.main-nav .nav-link'));
  const observedSections = ['about', 'highlights', 'experience', 'publications', 'projects', 'honors']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  function updateScrollUI() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    if (scrollProgress) {
      scrollProgress.style.width = `${progress}%`;
    }

    // Active nav highlight
    let currentId = observedSections[0]?.id || 'about';
    const offset = 140;
    for (const sec of observedSections) {
      if (sec.offsetTop - offset <= scrollTop) {
        currentId = sec.id;
      }
    }
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === currentId);
    });
  }

  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  // Mobile Menu Drawer
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mobileDrawer.querySelectorAll('[data-mobile-link]').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Gentle Scroll Reveal Observer
     ------------------------------------------------------------------------ */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -24px 0px' }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  /* ------------------------------------------------------------------------
     5b. Collapsible Sections (Experience & Publications)
     ------------------------------------------------------------------------ */
  function setSectionCollapsed(sectionId, collapsed) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.classList.toggle('is-collapsed', collapsed);
    const btn = section.querySelector(`[data-collapse-section="${sectionId}"]`);
    if (btn) {
      btn.setAttribute('aria-expanded', String(!collapsed));
      const label = btn.querySelector('[data-collapse-label]');
      if (label) {
        label.textContent = collapsed ? 'Expand' : 'Collapse';
      }
    }
    if (!collapsed) {
      // Ensure any reveal items inside become visible smoothly
      section.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
    }
    setTimeout(updateScrollUI, 380);
  }

  document.querySelectorAll('[data-collapse-section]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.collapseSection;
      const section = document.getElementById(id);
      if (!section) return;
      const nextCollapsed = !section.classList.contains('is-collapsed');
      setSectionCollapsed(id, nextCollapsed);
    });
  });

  document.querySelectorAll('[data-expand-section]').forEach((banner) => {
    banner.addEventListener('click', () => {
      setSectionCollapsed(banner.dataset.expandSection, false);
    });
  });

  /* ------------------------------------------------------------------------
     6. Experience Timeline Filter
     ------------------------------------------------------------------------ */
  const expButtons = Array.from(document.querySelectorAll('[data-exp-filter]'));
  const expItems = Array.from(document.querySelectorAll('#experience-timeline .timeline-item'));

  expButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.expFilter;
      expButtons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', String(active));
      });
      expItems.forEach((item) => {
        const show = filter === 'all' || item.dataset.expType === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });

  /* ------------------------------------------------------------------------
     7. Publications Explorer (Filter, Search, Sort, View, BibTeX, Lightbox)
     ------------------------------------------------------------------------ */
  const topicPillsContainer = document.getElementById('pub-topic-pills');
  const pubsContainer = document.getElementById('publications-container');
  const pubSearchInput = document.getElementById('pub-search');
  const pubSearchClear = document.getElementById('pub-search-clear');
  const pubCountLabel = document.getElementById('pub-count-label');
  const pubFilterHint = document.getElementById('pub-active-filter-hint');

  function getTopicCount(topicId) {
    if (topicId === 'all') return PUBLICATIONS.length;
    return PUBLICATIONS.filter((p) => p.topics.includes(topicId)).length;
  }

  function renderTopicPills() {
    if (!topicPillsContainer) return;
    topicPillsContainer.innerHTML = TOPIC_DEFINITIONS.map((t) => {
      const active = state.topic === t.id;
      const count = getTopicCount(t.id);
      return `<button type="button" class="filter-pill ${active ? 'active' : ''}" data-topic="${t.id}" role="tab" aria-selected="${active}">
        <span>${t.label}</span>
        <span class="pill-count">${count}</span>
      </button>`;
    }).join('');

    topicPillsContainer.querySelectorAll('[data-topic]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.topic = btn.dataset.topic;
        renderTopicPills();
        renderPublications();
      });
    });
  }

  function buildGeminiVectorThumb(theme) {
    if (theme === 'gemini25') {
      return `
        <div class="pub-svg-thumb" style="background: linear-gradient(135deg, #EFF6FF 0%, #F5F3FF 100%);">
          <svg width="168" height="92" viewBox="0 0 180 96" fill="none" aria-hidden="true">
            <rect x="8" y="16" width="40" height="22" rx="6" fill="#FFFFFF" stroke="#BFDBFE" stroke-width="1.2"/>
            <text x="28" y="30" text-anchor="middle" fill="#1E40AF" font-family="JetBrains Mono, monospace" font-size="8.5">TEXT</text>
            <rect x="8" y="52" width="40" height="22" rx="6" fill="#FFFFFF" stroke="#C7D2FE" stroke-width="1.2"/>
            <text x="28" y="66" text-anchor="middle" fill="#4338CA" font-family="JetBrains Mono, monospace" font-size="8.5">VISION</text>
            <path d="M48 27 L72 44 M48 63 L72 52" stroke="#60A5FA" stroke-width="1.4" stroke-dasharray="3 2"/>
            <rect x="72" y="24" width="44" height="46" rx="10" fill="#1D4ED8"/>
            <path d="M94 35 L97 44 L106 47 L97 50 L94 59 L91 50 L82 47 L91 44 Z" fill="#FFFFFF"/>
            <path d="M116 47 L134 47" stroke="#6366F1" stroke-width="1.6"/>
            <polygon points="134,43.5 140,47 134,50.5" fill="#6366F1"/>
            <rect x="142" y="18" width="32" height="58" rx="7" fill="#FFFFFF" stroke="#A5B4FC" stroke-width="1.2"/>
            <circle cx="158" cy="37" r="7" fill="#DBEAFE" stroke="#3B82F6" stroke-width="1.2"/>
            <rect x="149" y="51" width="18" height="4" rx="2" fill="#818CF8"/>
            <rect x="149" y="59" width="13" height="4" rx="2" fill="#CBD5E1"/>
          </svg>
          <span style="font-family:var(--font-mono); font-size:0.68rem; color:#1E3A8A; letter-spacing:0.03em;">GEMINI 2.5 · NATIVE IMAGE GEN</span>
        </div>
      `;
    }
    return `
      <div class="pub-svg-thumb" style="background: linear-gradient(135deg, #F0F9FF 0%, #EEF2FF 100%);">
        <svg width="168" height="92" viewBox="0 0 180 96" fill="none" aria-hidden="true">
          <g stroke="#93C5FD" stroke-width="1.2">
            <rect x="10" y="22" width="14" height="48" rx="4" fill="#FFFFFF"/>
            <rect x="28" y="22" width="14" height="48" rx="4" fill="#EFF6FF"/>
            <rect x="46" y="22" width="14" height="48" rx="4" fill="#DBEAFE"/>
            <rect x="64" y="22" width="14" height="48" rx="4" fill="#BFDBFE"/>
          </g>
          <path d="M84 46 L108 46" stroke="#2563EB" stroke-width="1.5"/>
          <polygon points="108,42.5 114,46 108,49.5" fill="#2563EB"/>
          <rect x="118" y="20" width="52" height="52" rx="11" fill="#FFFFFF" stroke="#60A5FA" stroke-width="1.4"/>
          <text x="144" y="43" text-anchor="middle" fill="#1D4ED8" font-family="Newsreader, Georgia, serif" font-size="15" font-weight="600">1M+</text>
          <text x="144" y="57" text-anchor="middle" fill="#475569" font-family="JetBrains Mono, monospace" font-size="7.5">TOKENS</text>
        </svg>
        <span style="font-family:var(--font-mono); font-size:0.68rem; color:#1E3A8A; letter-spacing:0.03em;">GEMINI 1.5 · MULTIMODAL POST-TRAIN</span>
      </div>
    `;
  }

  function renderPublications() {
    if (!pubsContainer) return;

    const query = state.search.trim().toLowerCase();
    let list = PUBLICATIONS.filter((pub) => {
      const topicMatch = state.topic === 'all' || pub.topics.includes(state.topic);
      if (!topicMatch) return false;
      if (!query) return true;
      const haystack = `${pub.title} ${pub.authors} ${pub.venue} ${pub.year} ${pub.summary} ${pub.award || ''} ${pub.topics.join(' ')}`.toLowerCase();
      return haystack.includes(query);
    });

    if (state.sort === 'newest') {
      list = [...list].sort((a, b) => (b.year - a.year) || (a.featuredOrder - b.featuredOrder));
    } else {
      list = [...list].sort((a, b) => a.featuredOrder - b.featuredOrder);
    }

    pubsContainer.classList.toggle('grid-view', state.view === 'grid');

    if (pubCountLabel) {
      pubCountLabel.textContent = `Showing ${list.length} of ${PUBLICATIONS.length} publications`;
    }
    if (pubFilterHint) {
      const topicObj = TOPIC_DEFINITIONS.find((t) => t.id === state.topic);
      const parts = [];
      if (state.topic !== 'all' && topicObj) parts.push(`Topic: ${topicObj.label}`);
      if (query) parts.push(`Query: "${query}"`);
      pubFilterHint.textContent = parts.join(' · ');
    }

    if (list.length === 0) {
      pubsContainer.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <p style="margin:0 0 12px; font-weight:500;">No publications matched your current filter.</p>
          <button type="button" class="pub-action-btn primary" id="reset-pub-filters">Reset filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-pub-filters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.topic = 'all';
          state.search = '';
          if (pubSearchInput) pubSearchInput.value = '';
          if (pubSearchClear) pubSearchClear.classList.remove('visible');
          renderTopicPills();
          renderPublications();
        });
      }
      return;
    }

    pubsContainer.innerHTML = list.map((pub) => {
      const primaryUrl = pub.links[0]?.url || '#';
      const figureHtml = pub.image
        ? `<button type="button" class="pub-figure-btn" data-open-lightbox="${pub.id}" aria-label="Zoom figure for ${escapeHtml(pub.title)}">
            <img src="${pub.image}" alt="${escapeHtml(pub.title)} figure" loading="lazy">
            <span class="figure-zoom-hint" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            </span>
          </button>`
        : `<a href="${primaryUrl}" target="_blank" rel="noopener noreferrer" class="pub-figure-btn" style="cursor:pointer; padding:0;" aria-label="Read ${escapeHtml(pub.title)}">
            ${buildGeminiVectorThumb(pub.svgTheme)}
          </a>`;

      const linksHtml = pub.links.map((l) => `
        <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="pub-action-btn ${l.primary ? 'primary' : ''}">
          <span>${escapeHtml(l.label)} ↗</span>
        </a>
      `).join('');

      return `
        <article class="pub-card" id="pub-${pub.id}">
          <div>${figureHtml}</div>
          <div class="pub-body">
            <div class="pub-badges">
              <span class="venue-badge">${escapeHtml(pub.venue)}</span>
              ${pub.award ? `<span class="award-badge">★ ${escapeHtml(pub.award)}</span>` : ''}
              ${pub.role ? `<span class="role-badge">${escapeHtml(pub.role)}</span>` : ''}
            </div>
            <h3 class="pub-title">
              <a href="${primaryUrl}" target="_blank" rel="noopener noreferrer">${escapeHtml(pub.title)}</a>
            </h3>
            <p class="pub-authors">${formatAuthors(pub.authors)}</p>
            <p class="pub-summary">${escapeHtml(pub.summary)}</p>
            <div class="pub-actions">
              ${linksHtml}
              <button type="button" class="pub-action-btn" data-toggle-bibtex="${pub.id}" aria-expanded="false">
                <span>Cite (BibTeX)</span>
              </button>
            </div>
            <div class="bibtex-drawer" id="bibtex-${pub.id}">
              <div class="bibtex-header">
                <span>BibTeX Citation</span>
                <button type="button" class="pub-action-btn" data-copy-bibtex="${pub.id}" style="padding:3px 9px; font-size:0.72rem;">Copy BibTeX</button>
              </div>
              <pre class="bibtex-pre">${escapeHtml(pub.bibtex)}</pre>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Wire figure lightbox triggers
    pubsContainer.querySelectorAll('[data-open-lightbox]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pub = PUBLICATIONS.find((p) => p.id === btn.dataset.openLightbox);
        if (pub && pub.image) {
          openLightbox({
            src: pub.image,
            title: pub.title,
            caption: `${pub.venue} — ${pub.summary}`,
            paperUrl: pub.links[0]?.url || ''
          });
        }
      });
    });

    // Wire BibTeX toggles
    pubsContainer.querySelectorAll('[data-toggle-bibtex]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const drawer = document.getElementById(`bibtex-${btn.dataset.toggleBibtex}`);
        if (!drawer) return;
        const isOpen = drawer.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
      });
    });

    // Wire BibTeX copy
    pubsContainer.querySelectorAll('[data-copy-bibtex]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pub = PUBLICATIONS.find((p) => p.id === btn.dataset.copyBibtex);
        if (pub) {
          copyToClipboard(pub.bibtex, `Copied BibTeX for "${pub.shortVenue}"`);
        }
      });
    });
  }

  // Search input handlers
  if (pubSearchInput) {
    pubSearchInput.addEventListener('input', (e) => {
      state.search = e.target.value;
      if (pubSearchClear) {
        pubSearchClear.classList.toggle('visible', state.search.length > 0);
      }
      renderPublications();
    });
  }

  if (pubSearchClear) {
    pubSearchClear.addEventListener('click', () => {
      state.search = '';
      if (pubSearchInput) {
        pubSearchInput.value = '';
        pubSearchInput.focus();
      }
      pubSearchClear.classList.remove('visible');
      renderPublications();
    });
  }

  // Sort & View segmented buttons
  document.querySelectorAll('[data-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.sort = btn.dataset.sort;
      document.querySelectorAll('[data-sort]').forEach((b) => b.classList.toggle('active', b === btn));
      renderPublications();
    });
  });

  document.querySelectorAll('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.view = btn.dataset.view;
      document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b === btn));
      renderPublications();
    });
  });

  // Hero Interest Chips -> Jump & Filter Publications
  document.querySelectorAll('[data-jump-topic]').forEach((chip) => {
    chip.addEventListener('click', () => {
      const topic = chip.dataset.jumpTopic;
      setSectionCollapsed('publications', false);
      state.topic = topic;
      state.search = '';
      if (pubSearchInput) pubSearchInput.value = '';
      if (pubSearchClear) pubSearchClear.classList.remove('visible');
      renderTopicPills();
      renderPublications();
      const pubSection = document.getElementById('publications');
      if (pubSection) pubSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  renderTopicPills();
  renderPublications();

  /* ------------------------------------------------------------------------
     8. Figure Lightbox & Resume Preview Modals
     ------------------------------------------------------------------------ */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption-text');
  const lightboxLink = document.getElementById('lightbox-paper-link');
  const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

  function openLightbox({ src, title, caption, paperUrl }) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxCaption.textContent = caption || '';
    if (paperUrl) {
      lightboxLink.href = paperUrl;
      lightboxLink.style.display = 'inline-flex';
    } else {
      lightboxLink.style.display = 'none';
    }
    lightboxModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Project media click-to-lightbox
  document.querySelectorAll('[data-lightbox-img]').forEach((el) => {
    el.addEventListener('click', () => {
      openLightbox({
        src: el.dataset.lightboxImg,
        title: el.dataset.lightboxTitle || 'Project Figure',
        caption: el.dataset.lightboxCaption || '',
        paperUrl: ''
      });
    });
  });

  // Resume Preview Modal
  const resumeModal = document.getElementById('resume-modal');
  const resumeIframe = document.getElementById('resume-iframe');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const resumeCloseBtn = document.getElementById('resume-close-btn');

  function openResumeModal() {
    if (!resumeModal) return;
    if (resumeIframe && !resumeIframe.src) {
      resumeIframe.src = 'files/resume.pdf';
    }
    resumeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResumeModal);
  if (resumeCloseBtn) resumeCloseBtn.addEventListener('click', closeResumeModal);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  /* ------------------------------------------------------------------------
     9. Command Palette (⌘K / Ctrl+K)
     ------------------------------------------------------------------------ */
  const cmdModal = document.getElementById('cmd-modal');
  const cmdInput = document.getElementById('cmd-input');
  const cmdResults = document.getElementById('cmd-results');
  const openCmdBtn = document.getElementById('open-cmd-btn');
  const cmdCloseBtn = document.getElementById('cmd-close-btn');

  let cmdSelectedIndex = 0;
  let currentCmdItems = [];

  function buildCommandItems(query) {
    const q = query.trim().toLowerCase();

    const quickActions = [
      {
        group: 'Actions',
        label: 'Preview Resume (PDF)',
        sub: 'Modal',
        run: () => openResumeModal()
      },
      {
        group: 'Actions',
        label: 'Copy Email (abhishek.sinha94@gmail.com)',
        sub: 'Clipboard',
        run: () => copyToClipboard('abhishek.sinha94@gmail.com', 'Copied abhishek.sinha94@gmail.com')
      },
      {
        group: 'Actions',
        label: 'Toggle Light / Dark Theme',
        sub: 'Appearance',
        run: () => toggleTheme()
      },
      {
        group: 'Actions',
        label: 'Filter Best Paper Award Winners',
        sub: 'Publications',
        run: () => {
          setSectionCollapsed('publications', false);
          state.topic = 'awards';
          state.search = '';
          renderTopicPills();
          renderPublications();
          document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' });
        }
      },
      {
        group: 'Actions',
        label: 'Launch Interactive DQN Q-Maze Sandbox',
        sub: 'Projects',
        run: () => {
          const sb = document.getElementById('dqn-sandbox');
          const toggle = document.getElementById('toggle-dqn-sandbox');
          if (sb && !sb.classList.contains('open')) {
            sb.classList.add('open');
            toggle?.setAttribute('aria-expanded', 'true');
            const span = toggle?.querySelector('span');
            if (span) span.textContent = 'Hide Q-Maze Sandbox';
            initMazeOnce();
            solveQPolicy();
          }
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    ];

    const sections = [
      { group: 'Sections', label: 'About & Bio', sub: '#about', run: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
      { group: 'Sections', label: 'Frontier Launches & Highlights', sub: '#highlights', run: () => document.getElementById('highlights')?.scrollIntoView({ behavior: 'smooth' }) },
      { group: 'Sections', label: 'Experience & Education Timeline', sub: '#experience', run: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
      { group: 'Sections', label: 'Selected Publications', sub: '#publications', run: () => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' }) },
      { group: 'Sections', label: 'Selected Projects', sub: '#projects', run: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
      { group: 'Sections', label: 'Honors, Awards & Service', sub: '#honors', run: () => document.getElementById('honors')?.scrollIntoView({ behavior: 'smooth' }) }
    ];

    const papers = PUBLICATIONS.map((p) => ({
      group: 'Publications',
      label: p.title,
      sub: p.shortVenue,
      keywords: `${p.authors} ${p.venue} ${p.summary} ${p.award || ''}`,
      run: () => {
        setSectionCollapsed('publications', false);
        state.topic = 'all';
        state.search = '';
        if (pubSearchInput) pubSearchInput.value = '';
        if (pubSearchClear) pubSearchClear.classList.remove('visible');
        renderTopicPills();
        renderPublications();
        requestAnimationFrame(() => {
          const el = document.getElementById(`pub-${p.id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.borderColor = 'var(--accent)';
            setTimeout(() => { el.style.borderColor = ''; }, 1800);
          }
        });
      }
    }));

    const all = [...quickActions, ...sections, ...papers];
    if (!q) return [...quickActions, ...sections.slice(0, 4), ...papers.slice(0, 5)];
    return all.filter((item) => `${item.label} ${item.sub} ${item.keywords || ''}`.toLowerCase().includes(q));
  }

  function renderCmdResults() {
    if (!cmdResults) return;
    currentCmdItems = buildCommandItems(cmdInput ? cmdInput.value : '');
    cmdSelectedIndex = Math.min(cmdSelectedIndex, Math.max(0, currentCmdItems.length - 1));

    if (currentCmdItems.length === 0) {
      cmdResults.innerHTML = `<div style="padding:24px; text-align:center; color:var(--text-tertiary); font-size:0.88rem;">No matching sections, actions, or papers.</div>`;
      return;
    }

    let html = '';
    let lastGroup = '';
    currentCmdItems.forEach((item, idx) => {
      if (item.group !== lastGroup) {
        html += `<div class="cmd-group-label">${escapeHtml(item.group)}</div>`;
        lastGroup = item.group;
      }
      html += `
        <button type="button" class="cmd-item ${idx === cmdSelectedIndex ? 'selected' : ''}" data-cmd-idx="${idx}" role="option" aria-selected="${idx === cmdSelectedIndex}">
          <span style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${escapeHtml(item.label)}</span>
          <span class="cmd-item-sub">${escapeHtml(item.sub)}</span>
        </button>
      `;
    });

    cmdResults.innerHTML = html;
    cmdResults.querySelectorAll('[data-cmd-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.cmdIdx);
        executeCmdItem(idx);
      });
    });
  }

  function executeCmdItem(idx) {
    const item = currentCmdItems[idx];
    if (!item) return;
    closeCmdPalette();
    item.run();
  }

  function openCmdPalette() {
    if (!cmdModal) return;
    cmdModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (cmdInput) {
      cmdInput.value = '';
      cmdSelectedIndex = 0;
      renderCmdResults();
      setTimeout(() => cmdInput.focus(), 20);
    }
  }

  function closeCmdPalette() {
    if (!cmdModal) return;
    cmdModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openCmdBtn) openCmdBtn.addEventListener('click', openCmdPalette);
  if (cmdCloseBtn) cmdCloseBtn.addEventListener('click', closeCmdPalette);
  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) closeCmdPalette();
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', () => {
      cmdSelectedIndex = 0;
      renderCmdResults();
    });
    cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentCmdItems.length > 0) {
          cmdSelectedIndex = (cmdSelectedIndex + 1) % currentCmdItems.length;
          renderCmdResults();
          cmdResults.querySelector('.cmd-item.selected')?.scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentCmdItems.length > 0) {
          cmdSelectedIndex = (cmdSelectedIndex - 1 + currentCmdItems.length) % currentCmdItems.length;
          renderCmdResults();
          cmdResults.querySelector('.cmd-item.selected')?.scrollIntoView({ block: 'nearest' });
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        executeCmdItem(cmdSelectedIndex);
      }
    });
  }

  // Global keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdModal?.classList.contains('open')) {
        closeCmdPalette();
      } else {
        openCmdPalette();
      }
      return;
    }

    if (e.key === 'Escape') {
      if (cmdModal?.classList.contains('open')) closeCmdPalette();
      if (lightboxModal?.classList.contains('open')) closeLightbox();
      if (resumeModal?.classList.contains('open')) closeResumeModal();
      return;
    }

    const activeTag = document.activeElement?.tagName;
    if (e.key === '/' && activeTag !== 'INPUT' && activeTag !== 'TEXTAREA' && !cmdModal?.classList.contains('open')) {
      e.preventDefault();
      openCmdPalette();
    }
  });

  /* ------------------------------------------------------------------------
     10. Interactive Latent Diffusion / Manifold Field Canvas (Hero)
     ------------------------------------------------------------------------ */
  const latentCanvas = document.getElementById('latent-canvas');
  const heroSection = document.getElementById('about');
  const denoiseBtn = document.getElementById('canvas-denoise-btn');
  const pauseBtn = document.getElementById('canvas-pause-btn');
  const pauseLabel = document.getElementById('canvas-pause-label');
  const canvasStatus = document.getElementById('canvas-status');

  if (latentCanvas && latentCanvas.getContext) {
    const ctx = latentCanvas.getContext('2d');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let paused = prefersReduced;
    let mouse = { x: -9999, y: -9999, active: false };

    // Diffusion phase machine: 'ambient' | 'noising' | 'denoising' | 'settled'
    let phase = 'ambient';
    let phaseStart = 0;
    let rippleProgress = 0;
    let noiseLevel = 0;
    let lastTimestamp = 0;

    const PARTICLE_COUNT = 112;
    const particles = [];

    function resizeCanvas() {
      const rect = latentCanvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      latentCanvas.width = Math.floor(width * dpr);
      latentCanvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function computeManifoldPoint(p, t, cx, cy, scale) {
      // Elegant 3-lobe harmonic rose + concentric latent rings
      const theta = p.angle + t * 0.00032 * p.orbitDir;
      if (p.cluster === 0) {
        // Outer harmonic flower contour
        const r = scale * (0.37 + 0.085 * Math.cos(3 * theta));
        return { x: cx + Math.cos(theta) * r * 1.12, y: cy + Math.sin(theta) * r * 0.88 };
      } else if (p.cluster === 1) {
        // Middle rotated harmonic lobe
        const r = scale * (0.23 + 0.055 * Math.sin(3 * theta));
        return { x: cx + Math.cos(theta) * r * 1.08, y: cy + Math.sin(theta) * r * 0.92 };
      }
      // Inner compact latent core
      const r = scale * 0.115;
      return { x: cx + Math.cos(theta * 1.4) * r, y: cy + Math.sin(theta * 1.4) * r };
    }

    function seedParticles() {
      particles.length = 0;
      const w = width || 1100;
      const h = height || 560;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const cluster = i < 54 ? 0 : (i < 92 ? 1 : 2);
        const angle = (i / PARTICLE_COUNT) * Math.PI * 2 + (cluster * 0.7);
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          r: cluster === 2 ? 3.2 : (2.1 + (i % 4) * 0.55),
          cluster,
          angle,
          orbitDir: cluster === 1 ? -1 : 1,
          trail: []
        });
      }
    }

    function getPalette() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        return {
          c0: '96, 165, 250',   // luminous sky blue
          c1: '165, 180, 252',  // soft indigo
          c2: '251, 191, 36',   // warm amber gold
          guide: '96, 165, 250'
        };
      }
      return {
        c0: '29, 78, 216',      // deep editorial cobalt
        c1: '79, 70, 229',      // crisp indigo
        c2: '217, 119, 6',      // warm gold accent
        guide: '29, 78, 216'
      };
    }

    function setCanvasStatus(text) {
      if (canvasStatus && canvasStatus.textContent !== text) {
        canvasStatus.textContent = text;
      }
    }

    function triggerDenoiseCycle(now) {
      if (paused) {
        paused = false;
        if (pauseLabel) pauseLabel.textContent = 'Pause';
        pauseBtn?.setAttribute('aria-pressed', 'false');
        requestAnimationFrame(drawFrame);
      }
      phase = 'noising';
      phaseStart = now || performance.now();
      rippleProgress = 0.01;
      noiseLevel = 1.0;

      // Forward diffusion kick: inject visible Gaussian scatter
      const cx = width * 0.74;
      const cy = height * 0.48;
      particles.forEach((p) => {
        const angle = Math.atan2(p.y - cy, p.x - cx) + (Math.random() - 0.5) * 1.4;
        const speed = 4.5 + Math.random() * 8.5;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.trail = [];
      });
      setCanvasStatus('Forward noise · t = 1.00');
    }

    function drawManifoldGuide(cx, cy, scale, pal, emphasis) {
      const alpha = 0.075 + emphasis * 0.16;
      ctx.save();
      ctx.strokeStyle = `rgba(${pal.guide}, ${alpha.toFixed(3)})`;
      ctx.lineWidth = 1.1;
      ctx.setLineDash([4, 6]);

      // Outer harmonic rose guide curve
      ctx.beginPath();
      for (let s = 0; s <= 96; s++) {
        const th = (s / 96) * Math.PI * 2;
        const r = scale * (0.37 + 0.085 * Math.cos(3 * th));
        const gx = cx + Math.cos(th) * r * 1.12;
        const gy = cy + Math.sin(th) * r * 0.88;
        if (s === 0) ctx.moveTo(gx, gy);
        else ctx.lineTo(gx, gy);
      }
      ctx.closePath();
      ctx.stroke();

      // Inner guide circle
      ctx.beginPath();
      ctx.ellipse(cx, cy, scale * 0.23 * 1.08, scale * 0.23 * 0.92, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    function drawFrame(t) {
      lastTimestamp = t;
      ctx.clearRect(0, 0, width, height);
      const pal = getPalette();
      const cx = width * 0.75;
      const cy = height * 0.48;
      const scale = Math.min(width, height) * 0.92;

      // Update diffusion state machine
      let manifoldPull = 0.008;
      let guideEmphasis = 0.15;

      if (!paused) {
        if (phase === 'noising') {
          const elapsed = t - phaseStart;
          const progress = Math.min(1, elapsed / 680);
          noiseLevel = progress;
          rippleProgress = progress;
          manifoldPull = 0;
          guideEmphasis = 0.08;
          setCanvasStatus(`Forward noise · t = ${progress.toFixed(2)}`);
          if (progress >= 1) {
            phase = 'denoising';
            phaseStart = t;
          }
        } else if (phase === 'denoising') {
          const elapsed = t - phaseStart;
          const progress = Math.min(1, elapsed / 3800);
          const remainingNoise = Math.max(0, 1 - progress);
          noiseLevel = remainingNoise;
          manifoldPull = 0.045 + progress * 0.095;
          guideEmphasis = 0.35 + progress * 0.65;
          setCanvasStatus(`Denoising · t = ${remainingNoise.toFixed(2)}`);
          if (progress >= 1) {
            phase = 'settled';
            phaseStart = t;
            setCanvasStatus('Manifold converged · t = 0.00');
          }
        } else if (phase === 'settled') {
          const elapsed = t - phaseStart;
          manifoldPull = 0.075;
          guideEmphasis = 0.85 - Math.min(0.55, elapsed / 5000);
          if (elapsed > 3600) {
            phase = 'ambient';
            setCanvasStatus('Latent Field · Hover or Denoise');
          }
        } else {
          // Gentle ambient latent orbit
          manifoldPull = 0.012;
          guideEmphasis = 0.22;
        }
      }

      // Draw manifold contour guides
      drawManifoldGuide(cx, cy, scale, pal, guideEmphasis);

      // Draw expanding forward-noise ripple ring
      if (phase === 'noising' && rippleProgress > 0) {
        const ringR = rippleProgress * scale * 0.72;
        ctx.save();
        ctx.strokeStyle = `rgba(${pal.c2}, ${((1 - rippleProgress) * 0.55).toFixed(3)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Update particle kinematics
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!paused) {
          // Record short fading trail when moving swiftly
          if (phase === 'noising' || phase === 'denoising') {
            p.trail.push({ x: p.x, y: p.y });
            if (p.trail.length > 7) p.trail.shift();
          } else if (p.trail.length > 0) {
            p.trail.shift();
          }

          if (phase === 'noising') {
            p.vx += (Math.random() - 0.5) * 1.15;
            p.vy += (Math.random() - 0.5) * 1.15;
            p.vx *= 0.94;
            p.vy *= 0.94;
          } else {
            const target = computeManifoldPoint(p, t, cx, cy, scale);
            // Smooth score-vector pull toward latent manifold
            p.vx += (target.x - p.x) * manifoldPull * 0.22;
            p.vy += (target.y - p.y) * manifoldPull * 0.22;

            // Subtle ambient curl drift
            const curl = Math.sin(p.x * 0.005 + t * 0.0004) + Math.cos(p.y * 0.005 - t * 0.0003);
            const driftAmt = phase === 'ambient' ? 0.04 : 0.015;
            p.vx += Math.cos(curl) * driftAmt;
            p.vy += Math.sin(curl) * driftAmt;

            // Responsive mouse swirl & constellation attractor
            if (mouse.active) {
              const dx = mouse.x - p.x;
              const dy = mouse.y - p.y;
              const dist = Math.hypot(dx, dy);
              if (dist > 10 && dist < 210) {
                const factor = (1 - dist / 210);
                // Gentle tangential swirl + slight attraction
                p.vx += (dx / dist) * factor * 0.35 - (dy / dist) * factor * 0.24;
                p.vy += (dy / dist) * factor * 0.35 + (dx / dist) * factor * 0.24;
              }
            }

            p.vx *= 0.89;
            p.vy *= 0.89;
          }

          p.x += p.vx;
          p.y += p.vy;

          // Keep softly inside bounds
          if (p.x < 8) { p.x = 8; p.vx = Math.abs(p.vx) * 0.6; }
          if (p.x > width - 8) { p.x = width - 8; p.vx = -Math.abs(p.vx) * 0.6; }
          if (p.y < 8) { p.y = 8; p.vy = Math.abs(p.vy) * 0.6; }
          if (p.y > height - 8) { p.y = height - 8; p.vy = -Math.abs(p.vy) * 0.6; }
        }
      }

      // Draw manifold edges between nearby nodes
      const linkDist = phase === 'denoising' || phase === 'settled' ? 128 : 112;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const rgb = p.cluster === 0 ? pal.c0 : (p.cluster === 1 ? pal.c1 : pal.c2);

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const baseAlpha = (1 - d / linkDist) * (0.28 + guideEmphasis * 0.22);
            ctx.strokeStyle = `rgba(${rgb}, ${Math.min(0.55, baseAlpha).toFixed(3)})`;
            ctx.lineWidth = p.cluster === q.cluster ? 1.15 : 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // Bright edges to cursor when hovering
        if (mouse.active) {
          const md = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          if (md < 165) {
            ctx.strokeStyle = `rgba(${pal.c0}, ${((1 - md / 165) * 0.45).toFixed(3)})`;
            ctx.lineWidth = 1.1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle trails & glowing nodes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const rgb = p.cluster === 0 ? pal.c0 : (p.cluster === 1 ? pal.c1 : pal.c2);

        if (p.trail.length > 1) {
          ctx.beginPath();
          for (let k = 0; k < p.trail.length; k++) {
            const pt = p.trail[k];
            if (k === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          }
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(${rgb}, 0.34)`;
          ctx.lineWidth = p.r * 0.85;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        // Subtle outer halo
        ctx.fillStyle = `rgba(${rgb}, ${(0.16 + guideEmphasis * 0.14).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 2.1, 0, Math.PI * 2);
        ctx.fill();

        // Crisp core dot
        ctx.fillStyle = `rgba(${rgb}, ${(0.65 + guideEmphasis * 0.3).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!paused) {
        requestAnimationFrame(drawFrame);
      }
    }

    resizeCanvas();
    seedParticles();

    if (paused) {
      if (pauseLabel) pauseLabel.textContent = 'Play';
      pauseBtn?.setAttribute('aria-pressed', 'true');
      // Place particles cleanly on the manifold for static view
      const cx = width * 0.75;
      const cy = height * 0.48;
      const scale = Math.min(width, height) * 0.92;
      particles.forEach((p) => {
        const pt = computeManifoldPoint(p, 0, cx, cy, scale);
        p.x = pt.x;
        p.y = pt.y;
      });
      drawFrame(0);
    } else {
      // Begin with an immediate visible denoising convergence on load!
      phase = 'denoising';
      phaseStart = performance.now();
      requestAnimationFrame(drawFrame);
    }

    window.addEventListener('resize', () => {
      resizeCanvas();
      if (paused) drawFrame(lastTimestamp);
    });

    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = latentCanvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
        mouse.active = true;
      });
      heroSection.addEventListener('mouseleave', () => {
        mouse.active = false;
      });
    }

    if (denoiseBtn) {
      denoiseBtn.addEventListener('click', () => triggerDenoiseCycle(performance.now()));
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        paused = !paused;
        if (pauseLabel) pauseLabel.textContent = paused ? 'Play' : 'Pause';
        pauseBtn.setAttribute('aria-pressed', String(paused));
        if (!paused) {
          requestAnimationFrame(drawFrame);
        } else {
          setCanvasStatus('Latent Field · Paused');
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     11. Interactive DQN Q-Value Maze Game (AI Q-Agent + Manual Play)
     ------------------------------------------------------------------------ */
  const toggleDqnBtn = document.getElementById('toggle-dqn-sandbox');
  const dqnSandbox = document.getElementById('dqn-sandbox');
  const dqnCanvas = document.getElementById('dqn-canvas');
  const dqnRunBtn = document.getElementById('dqn-run-btn');
  const dqnRunLabel = document.getElementById('dqn-run-label');
  const dqnManualBtn = document.getElementById('dqn-manual-btn');
  const dqnDpad = document.getElementById('dqn-dpad');
  const dqnRandomBtn = document.getElementById('dqn-random-btn');
  const dqnClearBtn = document.getElementById('dqn-clear-btn');
  const dqnStatus = document.getElementById('dqn-status');

  let mazeInitialized = false;
  const GRID = 10;
  let walls = [];
  let values = [];
  let path = [];
  let animStep = -1;
  let animTimer = null;
  let isAnimatingAgent = false;

  // Manual play state
  let manualMode = false;
  let playerPos = [0, 0];
  let playerTrail = [[0, 0]];
  let playerSteps = 0;

  // Click-and-drag wall painting state
  let isPaintingWalls = false;
  let paintWallValue = true;
  let lastPaintedCell = '';

  function setRunBtnState(running) {
    isAnimatingAgent = running;
    if (dqnRunLabel) {
      dqnRunLabel.textContent = running ? '■ Stop Agent' : '▶ Play Q-Agent';
    }
  }

  function initWallsDefault() {
    walls = Array.from({ length: GRID }, () => Array(GRID).fill(false));
    const preset = [
      [0,2],[1,2],[2,2],[3,2],[3,1],
      [1,5],[2,5],[3,5],[4,5],[5,5],
      [5,1],[5,2],[5,3],[6,3],[7,3],
      [3,7],[4,7],[5,7],[6,7],[7,7],[7,6],
      [8,1],[8,2],[8,5],[2,8],[8,8]
    ];
    preset.forEach(([r, c]) => { walls[r][c] = true; });
    walls[0][0] = false;
    walls[GRID - 1][GRID - 1] = false;
  }

  function resetAgentState() {
    clearInterval(animTimer);
    animTimer = null;
    setRunBtnState(false);
    values = Array.from({ length: GRID }, () => Array(GRID).fill(0));
    path = [];
    animStep = -1;
  }

  function resetManualPlayer() {
    playerPos = [0, 0];
    playerTrail = [[0, 0]];
    playerSteps = 0;
  }

  function computeOptimalQTable() {
    const gamma = 0.94;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    let V = Array.from({ length: GRID }, () => Array(GRID).fill(0));
    V[GRID - 1][GRID - 1] = 1.0;

    for (let iter = 0; iter < 140; iter++) {
      const nextV = V.map((row) => [...row]);
      let maxDelta = 0;
      for (let r = 0; r < GRID; r++) {
        for (let c = 0; c < GRID; c++) {
          if (walls[r][c] || (r === GRID - 1 && c === GRID - 1)) continue;
          let bestQ = 0;
          for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < GRID && nc >= 0 && nc < GRID && !walls[nr][nc]) {
              bestQ = Math.max(bestQ, gamma * V[nr][nc]);
            }
          }
          maxDelta = Math.max(maxDelta, Math.abs(bestQ - V[r][c]));
          nextV[r][c] = bestQ;
        }
      }
      V = nextV;
      if (maxDelta < 1e-7) break;
    }

    if (V[0][0] <= 1e-9) {
      return { V, rollout: [] };
    }

    const rollout = [[0, 0]];
    const visited = new Set(['0,0']);
    let [r, c] = [0, 0];
    while (!(r === GRID - 1 && c === GRID - 1) && rollout.length < GRID * GRID) {
      let bestNext = null;
      let bestVal = -1;
      for (const [dr, dc] of dirs) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nr < GRID && nc >= 0 && nc < GRID && !walls[nr][nc] && !visited.has(`${nr},${nc}`)) {
          if (V[nr][nc] > bestVal) {
            bestVal = V[nr][nc];
            bestNext = [nr, nc];
          }
        }
      }
      if (!bestNext) break;
      [r, c] = bestNext;
      visited.add(`${r},${c}`);
      rollout.push([r, c]);
    }
    return { V, rollout };
  }

  function drawRoundedCell(ctx, x, y, w, h, r) {
    ctx.beginPath();
    if (typeof ctx.roundRect === 'function') {
      ctx.roundRect(x, y, w, h, r);
    } else {
      ctx.rect(x, y, w, h);
    }
    ctx.fill();
  }

  function drawMaze() {
    if (!dqnCanvas || !dqnCanvas.getContext) return;
    const ctx = dqnCanvas.getContext('2d');
    const size = dqnCanvas.width;
    const cell = size / GRID;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = isDark ? '#13161D' : '#FFFFFF';
    ctx.fillRect(0, 0, size, size);

    // Draw cells & Q-value heatmap
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        const x = c * cell;
        const y = r * cell;
        if (walls[r][c]) {
          ctx.fillStyle = isDark ? '#3B4559' : '#27272A';
          drawRoundedCell(ctx, x + 2, y + 2, cell - 4, cell - 4, 4);
        } else if (values[r][c] > 0.001) {
          const intensity = Math.pow(Math.min(1, values[r][c]), 0.65);
          ctx.fillStyle = isDark
            ? `rgba(96, 165, 250, ${(intensity * 0.44).toFixed(3)})`
            : `rgba(29, 78, 216, ${(intensity * 0.3).toFixed(3)})`;
          ctx.fillRect(x + 1, y + 1, cell - 2, cell - 2);
        }
        ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(22,22,20,0.09)';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, cell, cell);
      }
    }

    // Draw Q-agent optimal trail
    if (path.length > 1 && animStep >= 0) {
      const upto = Math.min(animStep, path.length - 1);
      ctx.strokeStyle = isDark ? '#60A5FA' : '#1D4ED8';
      ctx.lineWidth = 3.5;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      for (let i = 0; i <= upto; i++) {
        const [pr, pc] = path[i];
        const px = pc * cell + cell / 2;
        const py = pr * cell + cell / 2;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    // Draw manual player trail
    if (manualMode && playerTrail.length > 1) {
      ctx.save();
      ctx.strokeStyle = '#10B981';
      ctx.lineWidth = 3;
      ctx.setLineDash([4, 4]);
      ctx.lineCap = 'round';
      ctx.beginPath();
      for (let i = 0; i < playerTrail.length; i++) {
        const [pr, pc] = playerTrail[i];
        const px = pc * cell + cell / 2;
        const py = pr * cell + cell / 2;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.restore();
    }

    // Start (0,0)
    ctx.fillStyle = '#1D4ED8';
    drawRoundedCell(ctx, 4, 4, cell - 8, cell - 8, 5);

    // Goal (9,9)
    ctx.fillStyle = '#D97706';
    drawRoundedCell(ctx, (GRID - 1) * cell + 4, (GRID - 1) * cell + 4, cell - 8, cell - 8, 5);

    // Active AI agent marker
    if (path.length > 0 && animStep >= 0) {
      const [ar, ac] = path[Math.min(animStep, path.length - 1)];
      ctx.fillStyle = isDark ? '#F3F4F6' : '#161614';
      ctx.beginPath();
      ctx.arc(ac * cell + cell / 2, ar * cell + cell / 2, cell * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }

    // Manual player marker
    if (manualMode) {
      const [mr, mc] = playerPos;
      ctx.fillStyle = '#10B981';
      ctx.beginPath();
      ctx.arc(mc * cell + cell / 2, mr * cell + cell / 2, cell * 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  function solveQPolicy() {
    if (isAnimatingAgent) {
      clearInterval(animTimer);
      animTimer = null;
      setRunBtnState(false);
      if (dqnStatus) dqnStatus.textContent = 'Agent paused — press ▶ Play Q-Agent to run again.';
      return;
    }

    resetAgentState();
    const { V, rollout } = computeOptimalQTable();
    values = V;

    if (rollout.length === 0) {
      drawMaze();
      if (dqnStatus) dqnStatus.textContent = 'No reachable path to goal — click a wall to open a route, then press ▶ Play Q-Agent.';
      return;
    }

    path = rollout;
    animStep = 0;
    setRunBtnState(true);
    if (dqnStatus) {
      dqnStatus.textContent = `Q-policy converged · Agent navigating optimal path (${path.length - 1} steps)…`;
    }
    drawMaze();

    animTimer = setInterval(() => {
      animStep++;
      drawMaze();
      if (animStep >= path.length - 1) {
        clearInterval(animTimer);
        animTimer = null;
        setRunBtnState(false);
        if (dqnStatus) {
          dqnStatus.textContent = `Reached goal in ${path.length - 1} optimal steps! Add/remove blocks anytime and press ▶ Play Q-Agent.`;
        }
      }
    }, 80);
  }

  function setManualMode(enabled) {
    manualMode = enabled;
    if (dqnManualBtn) {
      dqnManualBtn.setAttribute('aria-pressed', String(enabled));
      dqnManualBtn.classList.toggle('primary', enabled);
      dqnManualBtn.textContent = enabled ? '✓ Manual Mode On' : '🎮 Play Manually';
    }
    if (dqnDpad) {
      dqnDpad.classList.toggle('visible', enabled);
    }
    if (enabled) {
      resetAgentState();
      resetManualPlayer();
      drawMaze();
      if (dqnStatus) {
        dqnStatus.textContent = 'Manual Play: use Arrow keys, WASD, or the D-pad below to reach the gold Goal! You can still click blocks.';
      }
    } else {
      drawMaze();
      if (dqnStatus) {
        dqnStatus.textContent = 'Click/drag cells to add walls, then press ▶ Play Q-Agent.';
      }
    }
  }

  function moveManualPlayer(dr, dc) {
    if (!manualMode) return;
    const [r, c] = playerPos;
    const nr = r + dr;
    const nc = c + dc;
    if (nr < 0 || nr >= GRID || nc < 0 || nc >= GRID) return;
    if (walls[nr][nc]) {
      if (dqnStatus) dqnStatus.textContent = `Blocked by wall! Steps: ${playerSteps}`;
      return;
    }
    playerPos = [nr, nc];
    playerSteps++;
    playerTrail.push([nr, nc]);
    drawMaze();

    if (nr === GRID - 1 && nc === GRID - 1) {
      const { V, rollout } = computeOptimalQTable();
      values = V;
      const optSteps = rollout.length > 0 ? rollout.length - 1 : playerSteps;
      drawMaze();
      if (dqnStatus) {
        const diff = playerSteps === optSteps
          ? 'Perfect — you matched the optimal Q-Policy!'
          : `Optimal Q-Policy takes ${optSteps} steps.`;
        dqnStatus.textContent = `🎉 Goal reached in ${playerSteps} steps! ${diff} Press ▶ Play Q-Agent to compare.`;
      }
    } else if (dqnStatus) {
      dqnStatus.textContent = `Manual Play · Steps: ${playerSteps} (Arrow keys / WASD / D-pad)`;
    }
  }

  function getCellFromPointer(e) {
    const rect = dqnCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const c = Math.floor(((clientX - rect.left) / rect.width) * GRID);
    const r = Math.floor(((clientY - rect.top) / rect.height) * GRID);
    if (r < 0 || r >= GRID || c < 0 || c >= GRID) return null;
    return [r, c];
  }

  function applyWallAtCell(r, c, value) {
    if ((r === 0 && c === 0) || (r === GRID - 1 && c === GRID - 1)) return;
    if (manualMode && r === playerPos[0] && c === playerPos[1]) return;
    if (walls[r][c] === value) return;
    walls[r][c] = value;
    resetAgentState();
    drawMaze();
    if (dqnStatus) {
      dqnStatus.textContent = manualMode
        ? 'Maze updated — keep navigating or press ▶ Play Q-Agent to solve it.'
        : 'Blocks updated — press ▶ Play Q-Agent to watch the agent solve your maze!';
    }
  }

  function initMazeOnce() {
    if (mazeInitialized) {
      drawMaze();
      return;
    }
    mazeInitialized = true;
    initWallsDefault();
    resetAgentState();
    resetManualPlayer();
    drawMaze();
  }

  if (toggleDqnBtn && dqnSandbox) {
    toggleDqnBtn.addEventListener('click', () => {
      const isOpen = dqnSandbox.classList.toggle('open');
      toggleDqnBtn.setAttribute('aria-expanded', String(isOpen));
      toggleDqnBtn.querySelector('span').textContent = isOpen ? 'Hide Q-Maze Sandbox' : '▶ Try Interactive Q-Maze';
      if (isOpen) {
        initMazeOnce();
        solveQPolicy();
      } else {
        resetAgentState();
        setManualMode(false);
      }
    });
  }

  if (dqnCanvas) {
    dqnCanvas.addEventListener('pointerdown', (e) => {
      const cell = getCellFromPointer(e);
      if (!cell) return;
      const [r, c] = cell;
      if ((r === 0 && c === 0) || (r === GRID - 1 && c === GRID - 1)) return;
      isPaintingWalls = true;
      paintWallValue = !walls[r][c];
      lastPaintedCell = `${r},${c}`;
      applyWallAtCell(r, c, paintWallValue);
    });

    dqnCanvas.addEventListener('pointermove', (e) => {
      if (!isPaintingWalls) return;
      const cell = getCellFromPointer(e);
      if (!cell) return;
      const key = `${cell[0]},${cell[1]}`;
      if (key === lastPaintedCell) return;
      lastPaintedCell = key;
      applyWallAtCell(cell[0], cell[1], paintWallValue);
    });

    window.addEventListener('pointerup', () => {
      isPaintingWalls = false;
      lastPaintedCell = '';
    });
  }

  if (dqnRunBtn) {
    dqnRunBtn.addEventListener('click', () => {
      initMazeOnce();
      solveQPolicy();
    });
  }

  if (dqnManualBtn) {
    dqnManualBtn.addEventListener('click', () => {
      initMazeOnce();
      setManualMode(!manualMode);
    });
  }

  if (dqnDpad) {
    dqnDpad.querySelectorAll('[data-move]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const [dr, dc] = btn.dataset.move.split(',').map(Number);
        moveManualPlayer(dr, dc);
      });
    });
  }

  // Keyboard controls for Manual Q-Maze Play
  document.addEventListener('keydown', (e) => {
    if (!manualMode || !dqnSandbox?.classList.contains('open')) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    const keyMap = {
      ArrowUp: [-1, 0], w: [-1, 0], W: [-1, 0],
      ArrowDown: [1, 0], s: [1, 0], S: [1, 0],
      ArrowLeft: [0, -1], a: [0, -1], A: [0, -1],
      ArrowRight: [0, 1], d: [0, 1], D: [0, 1]
    };
    const delta = keyMap[e.key];
    if (delta) {
      e.preventDefault();
      moveManualPlayer(delta[0], delta[1]);
    }
  });

  if (dqnRandomBtn) {
    dqnRandomBtn.addEventListener('click', () => {
      initMazeOnce();
      resetAgentState();
      resetManualPlayer();
      // Generate a guaranteed solvable random maze
      for (let attempt = 0; attempt < 30; attempt++) {
        for (let r = 0; r < GRID; r++) {
          for (let c = 0; c < GRID; c++) {
            walls[r][c] = Math.random() < 0.28;
          }
        }
        walls[0][0] = false;
        walls[GRID - 1][GRID - 1] = false;
        const { rollout } = computeOptimalQTable();
        if (rollout.length > 0) break;
      }
      if (manualMode) {
        drawMaze();
        if (dqnStatus) dqnStatus.textContent = 'New solvable maze ready — navigate with Arrow keys / WASD or D-pad!';
      } else {
        solveQPolicy();
      }
    });
  }

  if (dqnClearBtn) {
    dqnClearBtn.addEventListener('click', () => {
      initMazeOnce();
      resetAgentState();
      resetManualPlayer();
      walls = Array.from({ length: GRID }, () => Array(GRID).fill(false));
      drawMaze();
      if (dqnStatus) {
        dqnStatus.textContent = 'Cleared all walls — click/drag cells to build a maze, then press ▶ Play Q-Agent!';
      }
    });
  }

  // Redraw maze when theme changes
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      if (mazeInitialized) drawMaze();
    });
  }

  // Keep footer year current
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = String(Math.max(2026, new Date().getFullYear()));
  }
})();
