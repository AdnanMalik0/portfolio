const PROJECT_DETAILS = {
  solubility: {
    summary: "This MSc dissertation project tackles a hard scientific prediction problem: estimating aqueous solubility from noisy experimental data. The work compares a broad spread of machine learning approaches, tests the effect of feature selection on model quality, and uses consensus modelling to improve final prediction quality.",
    highlights: [
      "Benchmarked methods across five modelling families: linear, latent-variable, ensemble, kernel-based, and neural-network approaches.",
      "Used cross-validation, hyperparameter tuning, and error-aware evaluation rather than treating the target labels as perfectly clean.",
      "Kept alternate notebooks to show how performance changed when highly correlated features were retained or removed."
    ],
    assets: [
      "A full dissertation documenting the research question, experiments, and findings.",
      "A main notebook containing the modelling workflow and evaluation outputs.",
      "Comparison notebooks showing how feature-retention choices changed performance."
    ],
    noteFile: "project-details/solubility-prediction.md"
  },
  "image-caption": {
    summary: "An end-to-end captioning workflow combining transfer learning, NLP preprocessing, recurrent decoding, and comparative evaluation. The project uses a pre-trained ResNet-152 encoder with a sequence model to generate captions for a COCO subset.",
    highlights: [
      "Combined image-feature extraction and caption-sequence generation in one training pipeline.",
      "Built vocabulary, caption-cleaning, and train-validation-test split logic around COCO subset metadata.",
      "Compared caption quality with BLEU scoring and cosine-similarity-based sentence evaluation."
    ],
    assets: [
      "A full coursework submission showing the end-to-end implementation.",
      "COCO-subset image metadata and caption data used for training and evaluation.",
      "Separate training, validation, and test caption splits."
    ],
    noteFile: "project-details/image-caption-generation.md"
  },
  "cnn-classification": {
    summary: "A computer-vision coursework project focused on CNN design and tuning for TinyImageNet30 classification. It combines model improvement work with visual inspection of learned filters and feature maps from a pre-trained network.",
    highlights: [
      "Built a PyTorch CNN for 30-class Tiny ImageNet classification.",
      "Explored augmentation, dropout, and deeper convolutional structure to improve generalisation.",
      "Added filter and feature-map visualisation using AlexNet to examine what the model learns."
    ],
    assets: [
      "A full coursework submission showing model development, tuning, and interpretation.",
      "A 30-class Tiny ImageNet subset used for supervised image classification.",
      "Visual analysis using a pre-trained CNN to interpret learned filters and feature maps."
    ],
    noteFile: "project-details/cnn-image-classification.md"
  },
  "mlp-mnist": {
    summary: "A PyTorch classification project built around MNIST handwritten digits. The GitHub Repository focuses on core deep-learning mechanics: tensor preparation, simple network construction, optimisation with SGD, and comparing a shallower and deeper multilayer perceptron.",
    highlights: [
      "Built one-layer and two-layer MLP variants for direct comparison.",
      "Used torch.nn and torch.optim rather than hiding the workflow behind heavier abstractions.",
      "Saved trained model checkpoints and training-loss output for inspection."
    ],
    assets: [
      "A full PyTorch notebook implementing the training workflow.",
      "Saved trained models for the one-layer and two-layer variants.",
      "Training-loss output for comparing learning behaviour."
    ],
    noteFile: "project-details/mlp-mnist.md"
  },
  "mushroom-classification": {
    summary: "A high-stakes classification project in R comparing decision trees and random forests for mushroom edibility prediction. The work emphasises cross-validation, feature importance, and the practical risk of false positives in a poisonous-edibility setting.",
    highlights: [
      "Compared two tree-based model families using 10-fold cross-validation.",
      "Reviewed feature-importance behaviour and identified weaker predictors.",
      "Treated false-positive outcomes as the key real-world risk in model interpretation."
    ],
    assets: [
      "A full coursework report covering the modelling workflow and conclusions.",
      "Tree-based model comparison using cross-validation and feature-importance analysis.",
      "Risk-aware interpretation for edible-versus-poisonous predictions."
    ],
    noteFile: "project-details/mushroom-classification.md"
  },
  "mobile-price": {
    summary: "This project combines exploratory data analysis and supervised classification on a Kaggle mobile-phone dataset. The objective was to understand how device features such as RAM, battery, display size, and connectivity relate to price bands, then train a model to predict the price-range class.",
    highlights: [
      "Worked with labelled training data and separate test data across 21 hardware-related attributes.",
      "Used EDA and correlation analysis to understand which features most strongly relate to price range.",
      "Structured the project as both an analysis exercise and a practical classification workflow."
    ],
    assets: [
      "A full notebook covering exploratory analysis, ANOVA, and classification.",
      "A labelled training dataset plus a separate holdout test dataset.",
      "A workflow diagram showing the project pipeline."
    ],
    noteFile: "project-details/mobile-price-range.md"
  },
  "nhs-dental": {
    summary: "A public-sector data integration and analysis project built around NHS dental statistics in England. The work combines multiple raw sources into an analysis-ready dataset, then studies activity, geography, and deprivation relationships rather than relying on a single flat input file.",
    highlights: [
      "Merged five raw sources covering workforce, patients, geography mapping, and deprivation context.",
      "Separated the work into data preparation and downstream analysis notebooks.",
      "Produced both notebook outputs and a written report for interpretation."
    ],
    assets: [
      "A dedicated data-preparation notebook for merging and cleaning the source data.",
      "A separate analysis notebook for interpretation and visualisation.",
      "A written report plus a final processed dataset produced from multiple public sources."
    ],
    noteFile: "project-details/nhs-dental-statistics.md"
  },
  "serial-killers": {
    summary: "An R-based statistical analysis asking whether motive affects the age at which serial killers begin their killing career. The project is built around staged exploratory work, distribution checks, and hypothesis testing rather than a loose narrative summary.",
    highlights: [
      "Compared motive categories including organised-crime-related killing, Angel of Death cases, and escape-or-avoid-arrest cases.",
      "Tested the published benchmark that the average age at first kill is 27.",
      "Found evidence that some motive groups begin meaningfully earlier or later than that benchmark."
    ],
    assets: [
      "Multiple R scripts covering data understanding, distribution checks, and hypothesis testing.",
      "A written report explaining the analytical reasoning and results.",
      "A structured analysis dataset for motive-based comparison."
    ],
    noteFile: "project-details/serial-killers-age-analysis.md"
  },
  "school-performance": {
    summary: "This project studies whether school gender composition is associated with differences in school performance in England. It combines school metadata, OFSTED-style performance information, and pupil composition data to analyse both single-sex and mixed-school behaviour.",
    highlights: [
      "Used official UK school-performance data rather than a synthetic or classroom-only dataset.",
      "Compared girls-only, boys-only, and mixed schools across multiple performance measures.",
      "Found that higher female representation was associated with better overall school performance in the analysed data."
    ],
    assets: [
      "A full analysis notebook covering the statistical workflow.",
      "A written report explaining the interpretation and conclusions.",
      "Supporting public education datasets describing school type, pupil mix, and performance."
    ],
    noteFile: "project-details/school-gender-performance.md"
  },
  "hotel-revenue": {
    summary: "A business intelligence project built in Power BI to analyse hotel revenue and customer behaviour from January 2018 to September 2020. The work is framed around operational questions such as revenue trends, reservations, cancellations, guest volumes, and segment-level performance.",
    highlights: [
      "Organised the dashboard around clear commercial questions instead of generic charts.",
      "Analysed market-segment contribution, cancellations, monthly patterns, and guest demand.",
      "Included both a working .pbix file and a reusable Power BI template."
    ],
    assets: [
      "A completed Power BI dashboard for interactive business analysis.",
      "A reusable dashboard template.",
      "The supporting hotel revenue dataset and final dashboard visuals."
    ],
    noteFile: "project-details/hotel-revenue-analysis.md"
  },
  "walmart-sales": {
    summary: "A Tableau-based sales and customer analysis project using Walmart data from 2012 to 2016. The GitHub Repository focuses on interactive dashboarding and customer-segment behaviour, with a published Tableau Public version available for live review.",
    highlights: [
      "Built an interactive Tableau dashboard rather than a static report.",
      "Explored customer-segment purchase behaviour alongside overall sales trends.",
      "Published the dashboard externally, which makes the work easier to review end to end."
    ],
    assets: [
      "A completed Tableau workbook for interactive analysis.",
      "The supporting Walmart sales and customer dataset.",
      "A published live dashboard that can be reviewed directly."
    ],
    noteFile: "project-details/walmart-sales-analysis.md",
    extraLinks: [
      {
        label: "Tableau Public",
        href: "https://public.tableau.com/app/profile/adnan6443/viz/WalmartSalesitsCustomersAnalysis/Dashboard1"
      }
    ]
  },
  masarif: {
    summary: "A privacy-first React PWA for personal finance tracking that runs entirely in the browser. It supports CSV and Excel imports, deduplication, KPI-driven dashboards, mobile-friendly navigation, and offline use after first load.",
    highlights: [
      "Built as an offline-capable React 19 and Vite PWA with Workbox.",
      "Supports smart column detection, multi-file merge, duplicate review, and CSV export.",
      "Includes dashboard views, date-range controls, transaction exploration, and payee-level analysis."
    ],
    assets: [
      "A working live application that can be opened and tested directly.",
      "A production-style React codebase with reusable dashboard and data-exploration components.",
      "PWA support, installability, and deployment-ready frontend configuration."
    ],
    noteFile: "project-details/masarif.md"
  },
  "ev-fault": {
    summary: "A B.Tech capstone combining hardware telemetry, simple predictive modelling, and cloud-triggered alerting for electric-vehicle battery monitoring. The system monitors battery conditions in real time and pushes alerts when thresholds are breached.",
    highlights: [
      "Built around Arduino, NodeMCU, ThingSpeak, and IFTTT integrations.",
      "Used SOC and SOH estimation with linear regression for battery-state assessment.",
      "Focused on real-time monitoring plus remote notification rather than a static report."
    ],
    assets: [
      "A full project report covering the system design, prototype, and findings.",
      "A hardware stack including Arduino, NodeMCU, sensors, and cloud telemetry.",
      "A monitoring and alert workflow using ThingSpeak and SMS notifications."
    ],
    noteFile: "project-details/iot-ev-fault-detection.md"
  },
  "prolog-kb": {
    summary: "A knowledge-representation project modelling workplace structure, behaviour, and decision rules in Prolog. The work focuses on rule-based inference depth and deriving organisational outcomes from a structured fact base.",
    highlights: [
      "Defined facts and rules for hierarchy, behaviour, and workplace conditions.",
      "Reached inference depth 7 for promotion, dismissal, and transfer logic.",
      "Centred the exercise on explainable rule-based reasoning rather than statistical modelling."
    ],
    assets: [
      "A full project report covering the rule base and inference design.",
      "A Prolog fact base and rule set for workplace reasoning.",
      "Inference examples covering promotion, transfer, dismissal, and salary penalties."
    ],
    noteFile: "project-details/workplace-reasoning-knowledge-base.md"
  },
  "task-tracker": {
    summary: "A self-built React SPA for daily task planning with calendar scheduling, day views, ordered task steps, and checklist-based progress tracking. It includes a Cloudflare Workers backend with D1 database for cloud sync alongside local browser persistence and JSON export/import.",
    highlights: [
      "Built a multi-screen React app with calendar, day, and task-detail views and a Task Now jump-to-current flow.",
      "Added local browser persistence and JSON export/import for full data portability independent of the backend.",
      "Implemented a Cloudflare Workers backend with D1 for lightweight cross-device state sync, sized intentionally for a single-user tool."
    ],
    assets: [
      "A working React frontend codebase with context-driven state management across multiple screens.",
      "A Cloudflare Workers backend with D1 persistence for snapshot-based state sync.",
      "A Wrangler-based deployment setup for Cloudflare Pages."
    ],
    noteFile: "project-details/task-tracker.md"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks?.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navLinks?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
    });
  });

  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const certFilterBtns = Array.from(document.querySelectorAll('.cert-filter-btn'));
  const certCards = Array.from(document.querySelectorAll('.certs-grid .cert-card'));
  const certGrid = document.querySelector('.certs-grid');
  const projectSpotlight = document.getElementById('project-spotlight');
  const projectSpotlightTitle = document.getElementById('project-spotlight-title');
  const projectSpotlightCategory = document.getElementById('project-spotlight-category');
  const projectSpotlightDesc = document.getElementById('project-spotlight-desc');
  const projectSpotlightTags = document.getElementById('project-spotlight-tags');
  const projectSpotlightLinks = document.getElementById('project-spotlight-links');
  const projectSpotlightEmpty = document.getElementById('project-spotlight-empty');
  const projectSpotlightHighlightsWrap = document.getElementById('project-spotlight-highlights-wrap');
  const projectSpotlightHighlights = document.getElementById('project-spotlight-highlights');
  const projectSpotlightAssetsWrap = document.getElementById('project-spotlight-assets-wrap');
  const projectSpotlightAssets = document.getElementById('project-spotlight-assets');
  const projectSpotlightNoteWrap = document.getElementById('project-spotlight-note-wrap');
  const projectSpotlightNoteStatus = document.getElementById('project-spotlight-note-status');
  const projectSpotlightNoteContent = document.getElementById('project-spotlight-note-content');
  const projectSpotlightShell = document.querySelector('.project-spotlight-shell');
  const projectSpotlightClose = document.querySelector('.project-spotlight-close');
  const embeddedNotes = window.PROJECT_NOTE_CONTENT || {};
  const noteCache = new Map();
  let selectedProjectCard = null;
  let activeNoteRequest = 0;
  let lastFocusedElement = null;

  const renderList = (wrapEl, listEl, items = []) => {
    if (!wrapEl || !listEl) return;

    if (!items.length) {
      wrapEl.hidden = true;
      listEl.replaceChildren();
      return;
    }

    const children = items.map(item => {
      const li = document.createElement('li');
      li.textContent = item;
      return li;
    });

    listEl.replaceChildren(...children);
    wrapEl.hidden = false;
  };

  const escapeHtml = (value = '') => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const sanitizeUrl = (value = '') => {
    const url = value.trim();
    if (!url) return '#';

    if (/^(https?:|mailto:)/i.test(url) || /^(\/|\.\/|\.\.\/|#)/.test(url)) {
      return url;
    }

    return '#';
  };

  const renderInlineMarkdown = (value = '') => {
    const tokens = [];
    const stash = html => {
      const token = `@@TOKEN_${tokens.length}@@`;
      tokens.push(html);
      return token;
    };

    let output = value;

    output = output.replace(/`([^`]+)`/g, (_, code) => stash(`<code>${escapeHtml(code)}</code>`));
    output = output.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, url) => {
      const href = sanitizeUrl(url);
      const label = alt?.trim() ? `Image: ${escapeHtml(alt.trim())}` : 'View image';
      return stash(`<a href="${href}" target="_blank" rel="noopener">${label}</a>`);
    });
    output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
      const href = sanitizeUrl(url);
      return stash(`<a href="${href}" target="_blank" rel="noopener">${escapeHtml(label)}</a>`);
    });
    output = escapeHtml(output);
    output = output.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    output = output.replace(/~~([^~]+)~~/g, '<del>$1</del>');

    return output.replace(/@@TOKEN_(\d+)@@/g, (_, index) => tokens[Number(index)] || '');
  };

  const isBlankLine = line => !line.trim();
  const isListItem = line => /^[-*]\s+/.test(line);
  const isBlockQuote = line => /^>\s?/.test(line);
  const isRule = line => /^([-*_]){3,}\s*$/.test(line.trim());
  const isCodeFence = line => /^```/.test(line.trim());
  const isTableDivider = line => /^\|?(?:\s*:?-+:?\s*\|)+\s*$/.test(line.trim());
  const isSpecialBlockStart = line => (
    isBlankLine(line) ||
    isListItem(line) ||
    isBlockQuote(line) ||
    /^(#{1,6})\s+/.test(line) ||
    isRule(line) ||
    isCodeFence(line)
  );

  const parseTableRow = line => line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map(cell => renderInlineMarkdown(cell.trim()));

  const renderMarkdown = (markdown = '') => {
    const lines = markdown.replace(/\r\n?/g, '\n').split('\n');
    const blocks = [];

    for (let index = 0; index < lines.length; index += 1) {
      const line = lines[index];

      if (isBlankLine(line)) {
        continue;
      }

      if (isCodeFence(line)) {
        const language = line.trim().slice(3).trim();
        const codeLines = [];
        index += 1;

        while (index < lines.length && !isCodeFence(lines[index])) {
          codeLines.push(lines[index]);
          index += 1;
        }

        const languageAttr = language ? ` data-language="${escapeHtml(language)}"` : '';
        blocks.push(`<pre><code${languageAttr}>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        continue;
      }

      const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        blocks.push(`<h${level}>${renderInlineMarkdown(headingMatch[2].trim())}</h${level}>`);
        continue;
      }

      if (isRule(line)) {
        blocks.push('<hr>');
        continue;
      }

      if (line.includes('|') && index + 1 < lines.length && isTableDivider(lines[index + 1])) {
        const headers = parseTableRow(line);
        const rows = [];
        index += 2;

        while (index < lines.length && lines[index].includes('|') && !isBlankLine(lines[index])) {
          rows.push(parseTableRow(lines[index]));
          index += 1;
        }

        index -= 1;

        const headerHtml = headers.map(cell => `<th>${cell}</th>`).join('');
        const bodyHtml = rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
        blocks.push(`<table><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table>`);
        continue;
      }

      if (isListItem(line)) {
        const items = [];

        while (index < lines.length && isListItem(lines[index])) {
          items.push(`<li>${renderInlineMarkdown(lines[index].replace(/^[-*]\s+/, '').trim())}</li>`);
          index += 1;
        }

        index -= 1;
        blocks.push(`<ul>${items.join('')}</ul>`);
        continue;
      }

      if (isBlockQuote(line)) {
        const quoteLines = [];

        while (index < lines.length && isBlockQuote(lines[index])) {
          quoteLines.push(lines[index].replace(/^>\s?/, '').trim());
          index += 1;
        }

        index -= 1;
        blocks.push(`<blockquote>${quoteLines.map(item => `<p>${renderInlineMarkdown(item)}</p>`).join('')}</blockquote>`);
        continue;
      }

      const paragraphLines = [line.trim()];
      while (index + 1 < lines.length && !isSpecialBlockStart(lines[index + 1])) {
        paragraphLines.push(lines[index + 1].trim());
        index += 1;
      }

      blocks.push(`<p>${renderInlineMarkdown(paragraphLines.join(' '))}</p>`);
    }

    return blocks.join('');
  };

  const setNoteStatus = (message = '', isError = false) => {
    if (!projectSpotlightNoteStatus) return;

    projectSpotlightNoteStatus.textContent = message;
    projectSpotlightNoteStatus.hidden = !message;
    projectSpotlightNoteStatus.classList.toggle('is-error', isError);
  };

  const resetNoteContent = () => {
    activeNoteRequest += 1;
    setNoteStatus('');

    if (projectSpotlightNoteContent) {
      projectSpotlightNoteContent.innerHTML = '';
    }
  };

  const loadProjectNote = async detail => {
    if (!projectSpotlightNoteWrap || !projectSpotlightNoteContent) {
      return;
    }

    resetNoteContent();

    if (!detail?.noteFile) {
      projectSpotlightNoteWrap.hidden = true;
      return;
    }

    projectSpotlightNoteWrap.hidden = false;

    const requestId = activeNoteRequest;
    setNoteStatus('Loading project note...');

    try {
      let rendered = noteCache.get(detail.noteFile);

      if (!rendered) {
        const embeddedMarkdown = embeddedNotes[detail.noteFile];

        if (typeof embeddedMarkdown === 'string' && embeddedMarkdown.trim()) {
          rendered = renderMarkdown(embeddedMarkdown);
        } else {
          const response = await fetch(detail.noteFile);
          if (!response.ok) {
            throw new Error(`Unable to load note: ${response.status}`);
          }

          const markdown = await response.text();
          rendered = renderMarkdown(markdown);
        }

        noteCache.set(detail.noteFile, rendered);
      }

      if (requestId !== activeNoteRequest) {
        return;
      }

      projectSpotlightNoteContent.innerHTML = rendered;
      setNoteStatus('');
    } catch (error) {
      if (requestId !== activeNoteRequest) {
        return;
      }

      projectSpotlightNoteContent.innerHTML = '';
      setNoteStatus('The project note could not be loaded in the popup.', true);
    }
  };

  const setCardSelection = card => {
    projectCards.forEach(projectCard => {
      const isSelected = projectCard === card;
      projectCard.classList.toggle('is-selected', isSelected);
      projectCard.setAttribute('aria-expanded', String(isSelected));
    });
  };

  const getModalFocusableElements = () => {
    if (!projectSpotlight) return [];

    return Array.from(
      projectSpotlight.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
    ).filter(element => !element.hasAttribute('hidden'));
  };

  const hideProjectSpotlight = (restoreHash = true) => {
    if (!projectSpotlight) return;

    projectSpotlight.hidden = true;
    document.body.classList.remove('modal-open');
    setCardSelection(null);
    resetNoteContent();
    selectedProjectCard = null;
    lastFocusedElement?.focus?.();
    lastFocusedElement = null;
    if (restoreHash && location.hash.startsWith('#project-')) {
      history.pushState('', document.title, location.pathname + location.search);
    }
  };

  const cloneCardLinks = links => {
    if (!links) return [];

    return Array.from(links.children).map(link => link.cloneNode(true));
  };

  const openProjectSpotlight = card => {
    if (!projectSpotlight || !projectSpotlightTitle || !projectSpotlightCategory || !projectSpotlightDesc) {
      return;
    }

    const projectKey = card.dataset.project || '';
    const detail = PROJECT_DETAILS[projectKey];
    const title = card.querySelector('.project-title')?.textContent?.trim() || 'Project details';
    const desc = card.querySelector('.project-desc')?.textContent?.trim() || '';
    const category = card.querySelector('.project-cat-badge')?.textContent?.trim() || 'Project';
    const tags = card.querySelector('.project-tags');
    const links = card.querySelector('.project-links');
    const linkNodes = cloneCardLinks(links);

    if (detail?.extraLinks?.length) {
      detail.extraLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.className = 'btn btn-outline btn-sm';
        anchor.href = link.href;
        anchor.target = '_blank';
        anchor.rel = 'noopener';
        anchor.textContent = link.label;
        linkNodes.push(anchor);
      });
    }

    projectSpotlightTitle.textContent = title;
    projectSpotlightCategory.textContent = category;
    projectSpotlightDesc.textContent = detail?.summary || desc;

    if (projectSpotlightTags) {
      const tagClones = tags ? Array.from(tags.children).map(tag => tag.cloneNode(true)) : [];
      projectSpotlightTags.replaceChildren(...tagClones);
    }

    if (projectSpotlightLinks) {
      projectSpotlightLinks.replaceChildren(...linkNodes);
    }

    if (projectSpotlightEmpty) {
      projectSpotlightEmpty.hidden = Boolean(projectSpotlightLinks?.children.length);
    }

    renderList(projectSpotlightHighlightsWrap, projectSpotlightHighlights, detail?.highlights || []);
    renderList(projectSpotlightAssetsWrap, projectSpotlightAssets, detail?.assets || []);
    void loadProjectNote(detail);

    setCardSelection(card);
    selectedProjectCard = card;
    lastFocusedElement = document.activeElement;
    projectSpotlight.hidden = false;
    document.body.classList.add('modal-open');
    projectSpotlightShell?.scrollTo({ top: 0, behavior: 'auto' });
    projectSpotlightClose?.focus();

    if (projectKey) {
      history.pushState({ project: projectKey }, '', `#project-${projectKey}`);
    }
  };

  projectCards.forEach(card => {
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-controls', 'project-spotlight');
    card.setAttribute('aria-expanded', 'false');

    card.addEventListener('click', event => {
      if (event.target.closest('a, button')) {
        return;
      }

      openProjectSpotlight(card);
    });

    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }

      event.preventDefault();
      openProjectSpotlight(card);
    });
  });

  const projectSpotlightCopyLink = document.querySelector('.project-spotlight-copylink');
  projectSpotlightCopyLink?.addEventListener('click', () => {
    const url = location.href;
    navigator.clipboard?.writeText(url).then(() => {
      const orig = projectSpotlightCopyLink.textContent;
      projectSpotlightCopyLink.textContent = 'Copied!';
      setTimeout(() => { projectSpotlightCopyLink.textContent = orig; }, 1800);
    });
  });

  projectSpotlightClose?.addEventListener('click', hideProjectSpotlight);
  projectSpotlight?.addEventListener('click', event => {
    if (event.target === projectSpotlight) {
      hideProjectSpotlight();
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab' && !projectSpotlight?.hidden) {
      const focusableElements = getModalFocusableElements();
      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
        return;
      }
    }

    if (event.key === 'Escape' && !projectSpotlight?.hidden) {
      hideProjectSpotlight();
    }
  });

  const CARD_LIMIT = 3;
  const showMoreWrap = document.getElementById('projects-show-more-wrap');
  const showMoreBtn = document.getElementById('projects-show-more-btn');
  const showMoreCount = document.getElementById('projects-show-more-count');
  let cardsExpanded = false;

  function setProjectsBtnState(expanded, total) {
    if (!showMoreBtn) return;
    if (expanded) {
      showMoreBtn.firstChild.textContent = 'Show less';
      showMoreBtn.setAttribute('aria-expanded', 'true');
    } else {
      showMoreBtn.firstChild.textContent = 'Show all projects ';
      if (showMoreCount) showMoreCount.textContent = `(${total})`;
      showMoreBtn.setAttribute('aria-expanded', 'false');
    }
  }

  function applyCardCollapse(visibleCards) {
    if (visibleCards.length <= CARD_LIMIT) {
      if (showMoreWrap) showMoreWrap.hidden = true;
      return;
    }
    if (!cardsExpanded) {
      visibleCards.slice(CARD_LIMIT).forEach(c => { c.dataset.collapseHidden = 'true'; c.style.display = 'none'; });
    }
    if (showMoreWrap) showMoreWrap.hidden = false;
    setProjectsBtnState(cardsExpanded, visibleCards.length);
  }

  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      cardsExpanded = !cardsExpanded;
      const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
      const visible = Array.from(projectCards).filter(c => activeFilter === 'all' || c.dataset.category === activeFilter);
      if (cardsExpanded) {
        visible.forEach(c => { delete c.dataset.collapseHidden; c.style.display = ''; });
        setProjectsBtnState(true, visible.length);
      } else {
        visible.forEach((c, i) => {
          if (i >= CARD_LIMIT) { c.dataset.collapseHidden = 'true'; c.style.display = 'none'; }
        });
        setProjectsBtnState(false, visible.length);
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
      cardsExpanded = false;
      projectCards.forEach(c => { delete c.dataset.collapseHidden; });

      const filter = btn.dataset.filter;
      const matched = [];
      projectCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
        if (show) matched.push(card);
      });

      applyCardCollapse(matched);

      if (selectedProjectCard && filter !== 'all' && selectedProjectCard.dataset.category !== filter) {
        hideProjectSpotlight();
      }
    });
  });

  (function () {
    const allVisible = Array.from(projectCards).filter(c => c.style.display !== 'none');
    applyCardCollapse(allVisible);
  })();

  (function () {
    const hash = location.hash;
    if (!hash.startsWith('#project-')) return;
    const key = hash.slice('#project-'.length);
    const target = Array.from(projectCards).find(c => c.dataset.project === key);
    if (!target) return;
    if (target.dataset.collapseHidden || target.dataset.sectionHidden || target.style.display === 'none') {
      target.style.display = '';
      delete target.dataset.collapseHidden;
      delete target.dataset.sectionHidden;
    }
    openProjectSpotlight(target);
  })();

  const inferCertCategory = card => {
    const name = card.querySelector('.cert-name')?.textContent?.trim().toLowerCase() || '';
    const issuer = card.querySelector('.cert-issuer')?.textContent?.trim().toLowerCase() || '';

    if (
      name.includes('commendation') ||
      name.includes('merit') ||
      name.includes('appreciation')
    ) {
      return 'recognition';
    }

    if (
      issuer.includes('microsoft learn') ||
      name.includes('power bi') ||
      name.includes('powerbi') ||
      name.includes('data analysis')
    ) {
      return 'bi';
    }

    if (
      name.includes('machine learning') ||
      name.includes('data scientist') ||
      name.includes('advanced sql') ||
      name.includes('claude') ||
      name.includes('future-proof your career with ai')
    ) {
      return 'ml';
    }

    if (
      name === 'sql' ||
      name.includes('big data') ||
      name.includes('bootcamp') ||
      name.includes('data services')
    ) {
      return 'tools';
    }

    return 'all';
  };

  const certOrderRank = card => {
    const name = card.querySelector('.cert-name')?.textContent?.trim() || '';
    const category = card.dataset.category || inferCertCategory(card);

    const explicitOrder = {
      'Certificate of Commendation — MSc Poster Session': 1,
      'Certificate of Merit — Best Project, TechKnow-2016': 2,
      'Certificate of Appreciation — Technical Presentation': 3,
      'Data Scientist with Python Track': 4,
      'Applied Machine Learning: Foundations': 5,
      'Machine Learning Advanced Certification Training': 6,
      'Claude 101': 7,
      'Future-Proof Your Career with AI': 8,
      'Advanced SQL for Data Scientists': 9,
      'Get Started Building in Power BI': 10,
      'Copilot in Power BI': 11,
      'Discover Data Analysis': 12,
      'Certificate of Attendance - Power BI QA Course': 13,
      'Microsoft Learn Achievement': 14,
      'SQL': 15,
      'Big Data Hadoop and Spark Developer': 16,
      'Analytics Bootcamp 101': 17,
      'LatentView Data Services Foundation': 18
    };

    if (explicitOrder[name]) {
      return explicitOrder[name];
    }

    const categoryBase = {
      recognition: 100,
      ml: 200,
      bi: 300,
      tools: 400,
      all: 500
    };

    return categoryBase[category] || 999;
  };

  const certFeaturedRank = card => {
    const name = card.querySelector('.cert-name')?.textContent?.trim() || '';
    const featuredOrder = {
      'Certificate of Commendation — MSc Poster Session': 1,
      'Data Scientist with Python Track': 2,
      'Applied Machine Learning: Foundations': 3
    };

    if (featuredOrder[name]) {
      return featuredOrder[name];
    }

    return 100 + certOrderRank(card);
  };

  certCards.forEach(card => {
    if (!card.dataset.category) {
      card.dataset.category = inferCertCategory(card);
    }
  });

  const certShowMoreWrap = document.getElementById('certs-show-more-wrap');
  const certShowMoreBtn = document.getElementById('certs-show-more-btn');
  const certShowMoreCount = document.getElementById('certs-show-more-count');
  const CERT_CARD_LIMIT = 3;
  let certCardsExpanded = false;

  const defaultCertFilter = certFilterBtns[0]?.dataset.filter || 'all';

  const updateCertFilterCounts = () => {
    certFilterBtns.forEach(btn => {
      const countEl = btn.querySelector('.filter-count');
      if (!countEl) return;

      const filter = btn.dataset.filter || 'all';
      const total = filter === 'all'
        ? certCards.length
        : certCards.filter(card => card.dataset.category === filter).length;

      countEl.textContent = total;
    });
  };

  const setCertShowMoreState = (expanded, total) => {
    if (!certShowMoreBtn) return;

    if (expanded) {
      certShowMoreBtn.firstChild.textContent = 'Show less';
      certShowMoreBtn.setAttribute('aria-expanded', 'true');
      return;
    }

    certShowMoreBtn.firstChild.textContent = 'Show all certificates ';
    if (certShowMoreCount) certShowMoreCount.textContent = `(${total})`;
    certShowMoreBtn.setAttribute('aria-expanded', 'false');
  };

  const renderCertificates = () => {
    const activeFilter = document.querySelector('.cert-filter-btn.active')?.dataset.filter || defaultCertFilter;
    const sortRank = activeFilter === 'all' && !certCardsExpanded ? certFeaturedRank : certOrderRank;
    const orderedCards = certCards
      .slice()
      .sort((a, b) => sortRank(a) - sortRank(b));
    let matchedCount = 0;

    orderedCards.forEach(card => certGrid?.appendChild(card));

    orderedCards.forEach(card => {
      const matches = activeFilter === 'all' || card.dataset.category === activeFilter;
      if (!matches) {
        card.style.display = 'none';
        delete card.dataset.sectionHidden;
        return;
      }

      const shouldShow = certCardsExpanded || matchedCount < CERT_CARD_LIMIT;
      if (shouldShow) {
        delete card.dataset.sectionHidden;
        card.style.display = '';
      } else {
        card.dataset.sectionHidden = 'true';
        card.style.display = 'none';
      }

      matchedCount += 1;
    });

    if (certShowMoreWrap) {
      certShowMoreWrap.hidden = matchedCount <= CERT_CARD_LIMIT;
    }

    setCertShowMoreState(certCardsExpanded && matchedCount > CERT_CARD_LIMIT, matchedCount);
  };

  certShowMoreBtn?.addEventListener('click', () => {
    certCardsExpanded = !certCardsExpanded;
    renderCertificates();

    if (!certCardsExpanded) {
      document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  certFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilterBtns.forEach(button => button.classList.remove('active'));
      btn.classList.add('active');
      certCardsExpanded = false;
      renderCertificates();
    });
  });

  updateCertFilterCounts();
  renderCertificates();

  function initSectionCollapse(gridSelector, wrapId, btnId, countId, limit, sectionId) {
    const items = Array.from(document.querySelectorAll(gridSelector));
    const wrap = document.getElementById(wrapId);
    const btn = document.getElementById(btnId);
    const countEl = document.getElementById(countId);
    if (!wrap || !btn || items.length <= limit) return;
    let expanded = false;

    function collapse() {
      items.forEach((el, i) => {
        if (i >= limit) { el.dataset.sectionHidden = 'true'; el.style.display = 'none'; }
        else { delete el.dataset.sectionHidden; el.style.display = ''; }
      });
      if (countEl) countEl.textContent = `(${items.length})`;
      btn.firstChild.textContent = btn.dataset.labelMore || 'Show all ';
      if (countEl) btn.appendChild(countEl);
      btn.setAttribute('aria-expanded', 'false');
      wrap.hidden = false;
    }

    function expand() {
      items.forEach(el => { delete el.dataset.sectionHidden; el.style.display = ''; });
      btn.firstChild.textContent = 'Show less';
      btn.setAttribute('aria-expanded', 'true');
    }

    btn.dataset.labelMore = btn.firstChild.textContent;
    collapse();

    btn.addEventListener('click', () => {
      expanded = !expanded;
      if (expanded) {
        expand();
      } else {
        collapse();
        if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  initSectionCollapse('.awards-grid .award-card', 'awards-show-more-wrap', 'awards-show-more-btn', 'awards-show-more-count', 2, 'awards');

  document.querySelectorAll('.exp-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      const label = btn.querySelector('span');
      if (label) label.textContent = expanded ? 'Show details' : 'Hide details';
      const details = btn.nextElementSibling;
      if (details) details.hidden = expanded;
    });
  });

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(item => item.classList.remove('active'));
        const link = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (link) {
          link.classList.add('active');
          const container = link.closest('.nav-links');
          if (container) {
            const linkMid = link.offsetLeft + link.offsetWidth / 2;
            container.scrollTo({ left: linkMid - container.clientWidth / 2, behavior: 'smooth' });
          }
        }
      }
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(section => navObserver.observe(section));

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

