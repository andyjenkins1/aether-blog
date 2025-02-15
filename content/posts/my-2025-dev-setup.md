---
title: "My 2025 Apple Mac Development Setup"
date: "2025-02-07T16:00:00Z"
draft: false
thumbnail: /images/MyDevSetup.jpg
categories:
  - Development
tags:
  - Apple
  - DevStuff
  - Howto
---

## Introduction

In this article I have captued my development setup on my personal Mac as of Feb 2025, I know everyone has their own unique setup but this is the one I have settled on which so far provides everything I need.  Will update this article as I tweak and install different languages and tools.

## Setup IDE

Visual Studio Code Install - On this one, no need to do anything special just download from the visual studio code website - <a href="https://code.visualstudio.com" target="_blank"> Visual Studio Code</a>

{{< admonition type="tip" title="Tip" >}}
Some of the latest Github Co Pilot featues require the preview build of Visual Studio Code.  This typically has a daily update cadence.
{{< /admonition >}}

## Install Package Manager

Install Homebrew - head to <a href="https://brew.sh" target="_blank">brew.sh</a> and follow the installation commands.  
Once installed, don't forget the following basic configuration a) Make sure brew is added to your `.zprofile` to ensure it's part of the PATH and b) Opt out of analytics using `brew analytics off`.


{{< admonition type="note" title="Note" >}}
These are the most-used commands that I use to get things set up and updated.
{{< /admonition >}}

```bash
    brew --version  # Version Installed
    brew list     # Displays all packages installed
    brew update # Updates Brew to Latest version
    brew cleanup # Removes outdates versions of packages
    brew doctor # Diagnoses potential issues with your Homebrew installation.
    brew autoremove #Removes packages that were installed as deps. but are no longer needed.
    brew search <package_name>  # Searches for a package in the homebrew repo
    brew install <package_name> # Installs package
    brew info <package_name> # Provides detailed info on package
    brew upgrade <package_name> - # Upgrades Specified Package
    brew upgrade # Upgrades all Packages
    brew outdated # Lists all packages that need an update
    brew uninstall <package_name> # Removes Said Package
    brew install --cask <app_name> # Installs macOS applications (e.g. Visual Studio Code)
    brew list --cask # Lists all GUI apps installed
    brew uninstall --cask <app_name> # Removes a GUI App.
```

## Upgrading Your Terminal Game with Iterm and OhMyPosh

1.  Install iTerm2 - Installs via <a href="https://iterm2.com/" target="_blank">Iterm2</a> or simply use `brew install iterm2` to install.

2. Install ohmyposh via the link <a href="https://ohmyposh.dev/docs/installation/macos" target="_blank">OhMyPosh</a> or simply use `brew install ohmyposh` to instsll.

3.  Install ohmyposh fonts via the link <a href="https://ohmyposh.dev/docs/installation/fonts" target="_blank"> Oh My Posh Font Install </a>

4. Confirm zsh is the running shell with `oh-my-posh get shell`

5.  Add the following to your `.zprofile`

```bash
if [ "$TERM_PROGRAM" != "Apple_Terminal" ]; then
eval "$(oh-my-posh init zsh)"
fi
```

{{< admonition type="tip" title="Tip" >}}
Your .zprofile is installed in your home directory as a hidden file
{{< /admonition >}}

5.  Install Nerd Fonts as per command `brew install --cask font-fira-code-nerd-font`

6.  Make sure that iTerm 2 is now using the installed Fonts to ensure everything displays correctly

<img src="/images/iTerm2Fonts.jpg" alt="Screenshot" width="650" style="border-radius: 8px; box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);" />

<br><br>
7. Ensure Visual Studio Code is updated to use Nerd fonts, otherwise the Terminal will not display correctly.  Head to settings and search for `"terminal.integrated.fontFamily": "'FiraCode Nerd Font Mono'"`

## Install Python

{{< admonition type="warning" title="Warning" >}}
Installing Python on a mac turns out to be more complicated than it needs to be!.  After lots of research and digging around on the easist way, I have settled on rye as an all in one package manager for python which can manage packages & environments.  
{{< /admonition >}}

{{< admonition type="info" title="Info" >}}
Before installing Rye make sure the lastest Apple XCode Software is installed.  The best Rye install guide I have found is https://mac.install.guide/python/install-rye
{{< /admonition >}}

To install rye follow the steps below ...
<br><br>

1. Install with `curl -sSf https://rye.astral.sh/get | bash` - accept defaults but do not add to path at this stage this will be done pot install.

2. Edit your `.profile` and add the following to add rye to the path source `"$HOME/.rye/env"`

3.  Restart the terminal with `source /Users/andyjenkins/.zprofile`

4.  Verify the rye version with the command `rye --version`

5.  Verify the Python Version `python --version` - This gives the system python version

6.  Verifry the Rye Python Version  `python3 --version` - This gives the Rye version of Python

7.  Confirm the correct version of Python is being used with `which python`


## Using Python in a Project

<a href="https://mac.install.guide/python/use-rye" target="_blank">Using Rye in projects</a>


## Install latest Git and Basic Config

1. Setup brew ready for installing Git.

```bash
brew update
brew doctor
brew install git
```

2. Now we need to ensure brew git is part of the path.

```bash
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/andyjenkins/.zprofile && eval "$(/opt/homebrew/bin/brew shellenv)"
```

3. Check the path with  `echo $PATH`

4. Check the Git Version installed `git --version`

5. Finally check we are using the Homebrew Git and not the Apple Installed Git (which is normalled an older version) `which git`.  This should show the HomeBrew installation in `/opt/homebrew/bin/git`



## Basic Git Configuration

1.  Set user and email in the global git config file.

```bash
git config --global user.name "Andy Jenkins"
git config --global user.email "xxxxx"
```

2. View your git config with `git config --list`


3.  Now let setup SSH Key.  Generate new SSH Keys wth  `ssh-keygen -t ed25519 -C "your-email@example.com"` - Accept the default settings.

4.  Head over to the folder below to ensure key created `cd /Users/andyjenkins/.ssh`

5.  Copy the contents of the **PUBLIC** key only `cat ~/.ssh/id_ed25519.pub`

6.  Head over to <a href="https://github.com" target="_blank"> <i class="fa-brands fa-github"></i> GitHub
</a>and in your settings select SSH and create a new Key with the Public Key you have created.

{{< admonition type="note" title="Note" >}}
When you setup your SSH Key, Make sure both Signing Key and Authentication key are created.
{{< /admonition >}}

7. We need to ensure we are using SSH for future commits.  Use `git remote set-url origin git@github.com:andyjenkins1/yourapp.git`.

8.  We can test the connection with `ssh -T git@github.com`.  This should say _"successfully authenticated"_

9. We need to enable SSH signing for all commits 

```bash
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519
git config --global commit.gpgsign true
```

## Integrate ChatGPT into VS Code

As per https://help.openai.com/en/articles/10128592-how-to-install-the-work-with-apps-visual-studio-code-extension you can integrate the ChatGPT App into  VS Code. Download the VSIX file and from within VS Code bring up the command pallate with Shift-Cmd-P and select install from VSIX.

## Add VS Code to .zprofile

Use the following command to your `.zprofile` to integrate into your path `export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"`