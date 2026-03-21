window.PORTFOLIO_CONFIG = {
  site: {
    title: "John Andrew | Portfolio",
    description:
      "A lightweight portfolio for John Andrew, showcasing data science, analytics, and public health projects."
  },
  profile: {
    name: "John Andrew",
    title: "Data Scientist",
    focus: "Public health analytics, explainable ML, and dashboards",
    location: "Nairobi, Kenya",
    bio:
      "I build practical data science work that goes beyond notebooks, from data cleaning and modeling to documentation, deployment, and interfaces people can actually use.",
    intro:
      "My recent projects lean toward public health, machine learning, and analytical storytelling, especially when I can turn a research-style workflow into a clear product or dashboard.",
    highlight:
      "Applied machine learning, public health data, and decision-support interfaces.",
    avatarUrl: "https://avatars.githubusercontent.com/u/185175445?v=4",
    githubUrl: "https://github.com/andyombogo",
    linkedinUrl: "https://linkedin.com/in/john-andrew-dts",
    email: "andyombogo@gmail.com",
    repoCount: 7,
    footerNote:
      "This portfolio is published from GitHub Pages and backed by the public repositories listed below."
  },
  featuredSummary:
    "A small selection of projects that best represent how I approach applied data work: practical problems, interpretable outputs, and polished delivery.",
  repoFeedSummary:
    "A complete index of the public repositories currently visible on GitHub, with a live refresh on page load.",
  featuredProjects: [
    {
      repo: "open-health-risk-engine",
      category: "Explainable Machine Learning",
      title: "Open Health Risk Engine",
      language: "Python",
      summary:
        "An end-to-end mental health risk demo built from NHANES survey data and designed to feel like a serious applied machine learning case study.",
      detail:
        "The project combines a reproducible data pipeline, model comparison, SHAP-based explanation, automated tests, and an interactive Streamlit interface. It is the kind of work I enjoy most: using public data to build something analytical, interpretable, and deployment-ready.",
      tags: ["NHANES", "Streamlit", "SHAP", "XGBoost", "Healthcare"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/open-health-risk-engine"
        },
        {
          label: "Live demo",
          href: "https://andyombogo-open-health-risk-engine.hf.space"
        }
      ]
    },
    {
      repo: "vaccination-coverage-analysis-usa",
      category: "Interactive Dashboard",
      title: "Vaccination Coverage Dashboard",
      language: "Python",
      summary:
        "A deployment-focused Streamlit dashboard for exploring maternal vaccination coverage in the United States using CDC data.",
      detail:
        "This project emphasizes exploration and communication: filters, KPI cards, trend views, subgroup comparisons, and export options are all shaped around making the analysis easy to navigate. It shows how I think about turning a dataset into a usable analytical product.",
      tags: ["CDC", "Dashboard", "Public Health", "Streamlit"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/vaccination-coverage-analysis-usa"
        }
      ]
    },
    {
      repo: "art-coverage-app",
      category: "Data Analysis",
      title: "WHO ART Coverage Analysis",
      language: "HTML",
      summary:
        "A PySpark-based coverage analysis project with a lightweight web layer for presenting results in a more accessible way.",
      detail:
        "I like this project because it sits between data processing and communication. It takes a public-health dataset, analyzes it with a scalable workflow, and then pushes the findings toward a format that is easier to share than a notebook alone.",
      tags: ["PySpark", "Flask", "Public Health", "Visualization"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/art-coverage-app"
        }
      ]
    },
    {
      repo: "movies-dataset",
      category: "Data Exploration",
      title: "Movies Dataset Exploration",
      language: "Python",
      summary:
        "A smaller Python project centered on working with movie data through repeatable cleaning, exploration, and analysis.",
      detail:
        "Not every project needs a large deployment story. This repository represents the other side of my work: taking a dataset, structuring it well, and using code to make the exploratory process cleaner and easier to extend.",
      tags: ["EDA", "Python", "Data Wrangling"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/andyombogo/movies-dataset"
        }
      ]
    }
  ],
  publicRepos: [
    {
      name: "vaccination-coverage-analysis-usa",
      html_url: "https://github.com/andyombogo/vaccination-coverage-analysis-usa",
      description:
        "Deployment-ready Streamlit dashboard for exploring maternal vaccination coverage in the United States using CDC data.",
      language: "Python",
      homepage: "",
      homepageLabel: "",
      stargazers_count: 0,
      updated_at: "2026-03-21T17:02:33Z",
      topics: ["streamlit", "cdc", "dashboard", "public-health"]
    },
    {
      name: "open-health-risk-engine",
      html_url: "https://github.com/andyombogo/open-health-risk-engine",
      description:
        "Explainable mental health risk demo using NHANES, Streamlit, SHAP, and machine learning.",
      language: "Python",
      homepage: "https://andyombogo-open-health-risk-engine.hf.space",
      homepageLabel: "Live demo",
      stargazers_count: 0,
      updated_at: "2026-03-21T16:09:16Z",
      topics: ["data-science", "machine-learning", "mental-health", "streamlit", "shap"]
    },
    {
      name: "movies-dataset",
      html_url: "https://github.com/andyombogo/movies-dataset",
      description: "Python repository for movie data exploration, cleaning, and analysis.",
      language: "Python",
      homepage: "",
      homepageLabel: "",
      stargazers_count: 0,
      updated_at: "2025-03-03T11:45:49Z",
      topics: ["python", "data-analysis"]
    },
    {
      name: "art-coverage-app",
      html_url: "https://github.com/andyombogo/art-coverage-app",
      description:
        "WHO ART coverage analysis using PySpark, with a lightweight web interface for presenting the results.",
      language: "HTML",
      homepage: "",
      homepageLabel: "",
      stargazers_count: 0,
      updated_at: "2025-03-03T11:37:00Z",
      topics: ["pyspark", "flask", "visualization", "public-health"]
    },
    {
      name: "SDS-6103",
      html_url: "https://github.com/andyombogo/SDS-6103",
      description: "MSc Data Science coursework repository for Statistical Analysis for Computing.",
      language: "HTML",
      homepage: "",
      homepageLabel: "",
      stargazers_count: 0,
      updated_at: "2024-11-10T14:48:09Z",
      topics: ["coursework", "statistics", "data-science"]
    },
    {
      name: "design",
      html_url: "https://github.com/andyombogo/design",
      description: "Primer design guidelines repository.",
      language: "",
      homepage: "https://primer.style/design",
      homepageLabel: "Website",
      stargazers_count: 0,
      updated_at: "2024-10-23T14:57:15Z",
      topics: ["design", "guidelines"]
    },
    {
      name: "andyombogo",
      html_url: "https://github.com/andyombogo/andyombogo",
      description: "Config files and content for your GitHub profile README.",
      language: "",
      homepage: "https://github.com/andyombogo",
      homepageLabel: "Profile",
      stargazers_count: 1,
      updated_at: "2024-10-16T19:13:21Z",
      topics: ["github-profile", "config"]
    }
  ],
  repoFeed: {
    username: "andyombogo",
    limit: 20
  }
};
