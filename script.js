function makeLink(label, href, className) {
  const link = document.createElement("a");
  link.className = className;
  link.href = href;
  if (!href.startsWith("mailto:")) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }
  link.textContent = label;
  return link;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (node && value) {
    node.textContent = value;
  }
}

function normalizeTopics(topics) {
  if (!topics) {
    return [];
  }

  if (Array.isArray(topics)) {
    return topics.filter(Boolean);
  }

  if (typeof topics === "string") {
    return topics
      .split(",")
      .map((topic) => topic.trim())
      .filter(Boolean);
  }

  return [];
}

function formatMonthYear(value) {
  if (!value) {
    return "Recently updated";
  }

  const date = new Date(value);
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric"
  }).format(date);
}

function renderFeaturedProjects(config) {
  const container = document.getElementById("featured-projects");
  if (!container) {
    return;
  }

  container.innerHTML = "";

  config.featuredProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = project.spotlight
      ? "case-study case-study-spotlight"
      : "case-study";

    const metaChips = [
      project.category,
      project.language
    ]
      .filter(Boolean)
      .map((value) => `<span class="meta-chip">${escapeHtml(value)}</span>`)
      .join("");

    const tagMarkup = (project.tags || [])
      .map((tag) => `<span class="meta-chip">${escapeHtml(tag)}</span>`)
      .join("");

    const linkMarkup = (project.links || [])
      .map((link) => {
        const classes = link.primary ? "case-link case-link-primary" : "case-link";
        return `<a class="${classes}" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`;
      })
      .join("");

    const imageMarkup = project.imageUrl
      ? `
        <figure class="case-study-visual">
          <img src="${escapeHtml(project.imageUrl)}" alt="${escapeHtml(project.imageAlt || project.title)}">
        </figure>
      `
      : "";

    const calloutMarkup = project.callout
      ? `<p class="case-study-callout">${escapeHtml(project.callout)}</p>`
      : "";

    const bodyMarkup = `
      <div class="case-study-meta">${metaChips}</div>
      <h3>${escapeHtml(project.title)}</h3>
      <p class="case-study-summary">${escapeHtml(project.summary)}</p>
      <p class="case-study-detail">${escapeHtml(project.detail)}</p>
      ${calloutMarkup}
      <div class="case-study-meta">${tagMarkup}</div>
      <div class="case-study-links">${linkMarkup}</div>
    `;

    article.innerHTML = project.spotlight
      ? `
        <div class="case-study-spotlight-grid">
          <div class="case-study-body">
            ${bodyMarkup}
          </div>
          ${imageMarkup}
        </div>
      `
      : bodyMarkup;

    container.appendChild(article);
  });
}

function renderRepoItem(repo) {
  const item = document.createElement("article");
  item.className = "repo-item";

  const name = escapeHtml(repo.name);
  const description = escapeHtml(repo.description || "Public project on GitHub.");
  const language = escapeHtml(repo.language || "Repository");
  const htmlUrl = escapeHtml(repo.html_url);
  const homepage = repo.homepage || "";
  const homepageLabel = repo.homepageLabel || "Website";
  const stars = repo.stargazers_count || 0;
  const topics = normalizeTopics(repo.topics).slice(0, 4);

  const tagMarkup = topics.length
    ? `<div class="repo-tags">${topics.map((topic) => `<span class="repo-tag">${escapeHtml(topic)}</span>`).join("")}</div>`
    : "";

  const extraLink = homepage
    ? `<a class="repo-link" href="${escapeHtml(homepage)}" target="_blank" rel="noreferrer">${escapeHtml(homepageLabel)}</a>`
    : "";

  item.innerHTML = `
    <div class="repo-item-head">
      <h3><a href="${htmlUrl}" target="_blank" rel="noreferrer">${name}</a></h3>
      <span class="repo-language">${language}</span>
    </div>
    <p class="repo-text">${description}</p>
    ${tagMarkup}
    <div class="repo-meta">
      <span>Updated ${formatMonthYear(repo.updated_at)}</span>
      <span>${stars} stars</span>
    </div>
    <div class="repo-links">
      <a class="repo-link" href="${htmlUrl}" target="_blank" rel="noreferrer">Repository</a>
      ${extraLink}
    </div>
  `;

  return item;
}

function renderRepoList(container, repos) {
  container.innerHTML = "";

  if (!repos.length) {
    container.innerHTML = `
      <article class="repo-item repo-item-empty">
        <p>No public repositories to show yet.</p>
      </article>
    `;
    return;
  }

  repos.forEach((repo) => {
    container.appendChild(renderRepoItem(repo));
  });
}

async function loadRepoFeed(config) {
  const container = document.getElementById("repo-feed");
  if (!container) {
    return;
  }

  const configuredRepos = config.publicRepos || [];
  renderRepoList(container, configuredRepos);

  const configuredByName = new Map(
    configuredRepos.map((repo) => [repo.name, repo])
  );

  try {
    const response = await fetch(
      `https://api.github.com/users/${config.repoFeed.username}/repos?sort=updated&per_page=100`
    );

    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    const repos = await response.json();
    const visibleRepos = repos
      .filter((repo) => !repo.fork)
      .slice(0, config.repoFeed.limit)
      .map((repo) => {
        const fallback = configuredByName.get(repo.name) || {};
        return {
          ...fallback,
          ...repo,
          description: repo.description || fallback.description || "",
          homepage: repo.homepage || fallback.homepage || "",
          homepageLabel: fallback.homepageLabel || "Website",
          language: repo.language || fallback.language || "",
          topics: repo.topics || fallback.topics || []
        };
      });

    renderRepoList(container, visibleRepos);
  } catch (error) {
    // Keep the static repo list from the local config if GitHub is unavailable.
  }
}

function bootstrapPortfolio() {
  const config = window.PORTFOLIO_CONFIG;
  if (!config) {
    return;
  }

  document.title = config.site.title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", config.site.description);
  }

  setText("profile-name", config.profile.name);
  setText("profile-title", config.profile.title);
  setText("profile-bio", config.profile.bio);
  setText("profile-intro", config.profile.intro);
  setText("profile-location", config.profile.location);
  setText("profile-repo-count", String(config.profile.repoCount));
  setText("profile-focus", config.profile.focus);
  setText("profile-highlight", config.profile.highlight);
  setText("featured-summary", config.featuredSummary);
  setText("repo-feed-summary", config.repoFeedSummary);
  setText("footer-note", config.profile.footerNote);

  const avatar = document.getElementById("profile-avatar");
  if (avatar) {
    avatar.src = config.profile.avatarUrl;
    avatar.alt = `${config.profile.name} profile photo`;
  }

  const heroLinks = document.getElementById("hero-links");
  if (heroLinks) {
    heroLinks.innerHTML = "";
    heroLinks.appendChild(makeLink("GitHub", config.profile.githubUrl, "contact-link"));
    heroLinks.appendChild(makeLink("LinkedIn", config.profile.linkedinUrl, "contact-link"));
    heroLinks.appendChild(makeLink("Email", `mailto:${config.profile.email}`, "contact-link"));
  }

  const footerLink = document.getElementById("footer-github-link");
  if (footerLink) {
    footerLink.href = config.profile.githubUrl;
  }

  renderFeaturedProjects(config);
  loadRepoFeed(config);
}

document.addEventListener("DOMContentLoaded", bootstrapPortfolio);
