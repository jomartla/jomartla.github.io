# 📋 Requirements & Setup Guide

## 🖥️ System Requirements

### Minimum Requirements
- **Operating System**: Windows 10/11, macOS 10.15+, or Linux
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 1GB free space
- **Internet**: Required for initial setup

### Software Requirements

#### 1. Ruby (Required)
- **Version**: Ruby 3.0+ (Ruby 3.2+ recommended)
- **Download**: https://rubyinstaller.org/ (Windows)
- **Verification**: `ruby --version`

#### 2. Bundler (Required)
- **Purpose**: Ruby dependency manager
- **Installation**: `gem install bundler`
- **Verification**: `bundle --version`

#### 3. Git (Required)
- **Purpose**: Version control and GitHub Pages
- **Download**: https://git-scm.com/
- **Verification**: `git --version`

## 🚀 Quick Setup

### Step 1: Install Ruby
**Windows:**
```powershell
# Download from https://rubyinstaller.org/
# Or using Chocolatey:
choco install ruby
```

### Step 2: Install Bundler
```bash
gem install bundler
```

### Step 3: Setup Project
```bash
# Navigate to your blog directory
cd C:\...\jomartla.github.io

# Install dependencies
bundle install
```

### Step 4: Run Blog
```bash
bundle exec jekyll serve
```

Visit: `http://localhost:4000`

## 🐛 Troubleshooting

### "bundle: command not found"
- Install Ruby first: https://rubyinstaller.org/
- Then install Bundler: `gem install bundler`

### "Could not locate Gemfile"
- Make sure you're in the blog directory
- Run: `cd C:\...\jomartla.github.io`