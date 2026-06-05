# bantu-bot 🤖

An open-source GitHub Action that leverages OpenAI's API to automate issue triage, label management, and initial Pull Request reviews.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Features
* **Automated Issue Triage:** Analyzes issue descriptions and automatically applies relevant ecosystem labels.
* **PR Summarization:** Generates concise summaries of changes introduced in Pull Requests to assist maintainers.
* **Code Style & Bug Detection:** Highlights potential bugs or style deviations before human review.

## 🛠️ Installation & Setup

Integrate this assistant into your workflow by adding the following file to `.github/workflows/ai-triage.yml`:

```yaml
name: AI Triage
on:
  issues:
    types: [opened]
  pull_request:
    types: [opened]

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - name: Run Bantu Bot
        uses: your-username/bantu-bot@v1
        with:
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
