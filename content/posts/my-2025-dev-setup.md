---
title: "My 2025 Apple Mac Development Setup"
date: "2025-02-07T16:00:00Z"
draft: false
categories:
  - Development
tags:
  - Apple
  - DevStuff
  - Howto
---

---

## Introduction

In this article I have captued my development setup on my personal Mac as of Feb 2025, I know everyone has their own unique setup but this is the one I have settled on which so far provides everything I need.  Will update this article as I tweak and install different languages and tools.

## Setup IDE

1.  Visual Studio Code Install - On this one no need to so anything special just download from the visual studio code website - code.visualstudio.com

## Install Package Manager

1.  Install Homebrew - head to https://brew.sh and follow the installation commands.  Once installed, don't forget the following basic configuration

    a) Add Brew to your path to make it available system wide (see intructions from installation)
    
    b) Opt in or Out of Analytics

    ```bash
        brew analytics off
    ```


    NOTE:  these are the mose used commands that I use to get things setup and updated


    ```bash
        brew --version  # Version Installed
        brew --list     # Displays all packages installed
        brew update # Updates Brew to Latest version
        brew cleanup # Removes outdates versions of packages
        brew doctor # Diagnoses potential issues with your Homebrew installation.
        brew autoremove #R emoves packages that were installed as dependencies but are no longer needed.
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

1.  Install iTerm - Installs via https://iterm2.com/ or simply use brew to install.

2. Install ohmyposh via the link https://ohmyposh.dev/docs/installation/macos

3.  Install ohmyposh fonts via the link https://ohmyposh.dev/docs/installation/fonts

4. Confirm zsh is the running shell with :-
```bash
oh-my-posh get shell
```
5.  Add the following to your .zprofile
```bash
if [ "$TERM_PROGRAM" != "Apple_Terminal" ]; then
eval "$(oh-my-posh init zsh)"
fi
```

NOTE:  where your .zprofile is note ….. this /Users/andyjenkins/.zprofile


5.  Install Nerd Fonts as per command 

```bash
brew install --cask font-fira-code-nerd-font
```

6.  Make sure that iTerm 2 is now using the installed Fonts to ensure everything displays correctly

![Screenshot](/static/Images/iTerm2Fonts.jpg)

7. Ensure Visual Studio Code is updated to use Nerd fonts, otherwise the Terminal will not display correctly.  Head to setting and search for ""terminal.integrated.fontFamily" - and set to "FiraCode Nerd Font Mono'"

```bash
"terminal.integrated.fontFamily": "'FiraCode Nerd Font Mono'"
```

## Install Python

installing Python on a mac tuerns out to be way more complicated than it needs to be!.  After lots of research and digging around on the easist way, I have settled on rye as an all in one package manager for python which can manage packages & environments.  To install rye follow the steps below

1.  Make sure xcode is installed

check if x-code tools installed 

xcode-select -p

Make sure installed and not mapped to a directory with spaces as that will cause problems with home brew

Also can check via the App store - just download the latest

if install and mapped to good directory such as "/Library/Developer/CommandLineTools"  then you just need to load xcode and accept any licnese terms

2.  Install rye as per the guide here https://mac.install.guide/python/install-rye

curl -sSf https://rye.astral.sh/get | bash

accept defaults but do not add to path at this stage this will be done pot install.

edit your .profile and add the following to add rye to the path 

source "$HOME/.rye/env"

restart the terminal

source /Users/andyjenkins/.zprofile

verify the rye version with the command

rye --version

verify the python version 

python --version - this gives the system python version

python3 --version - this gives the rye version of python

to check with version is being used you can use :-

python3 --version

this should then link to the rye version of python.

## Using Python in a Project

https://mac.install.guide/python/use-rye

## Install latest Git and Basic Config

brew update
brew doctor
brew install git

now we need to ensure brew git is part of the path.

```bash
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/andyjenkins/.zprofile && eval "$(/opt/homebrew/bin/brew shellenv)"
```
check the path

echo $PATH

now we can check its working by using

git --version

and then finally checking we are using the homebrew version of git with

which git 

this should show the homebrew directory

/opt/homebrew/bin/git

## Basic Git Configuration

Set user and email

git config --global user.name "Andy Jenkins"
git config --global user.email "xxxxx"

view your git config with 

 git config --list


 Now let setup SSH Keys :-

generate the new SSH keys :-

ssh-keygen -t ed25519 -C "your-email@example.com"

accept the defaults 

head over to the folder below to ensure key created

cd /Users/andyjenkins/.ssh

copy the contents of the PUBLIC key only 

cat ~/.ssh/id_ed25519.pub

Head over to github.com and in your settings select SSH and create a new Key.  When you do this need to make sure both Signing Key and Authentication Key Created.

Finally we need to ensure we are using SSH for future commits :-

this will show the current URL’s for fetch and pull.

Now we need to update to use SSH

git remote set-url origin git@github.com:andyjenkins1/theadminapp.git

then we need to test the connection ➖

ssh -T git@github.com

should say successfully authenticated

now we need to enable SSH signing for all commits ➖

git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519
git config --global commit.gpgsign true

Very good

Steps above key for getting verifed CHanges on github


# Other Useful Configurations

## Integrate ChatGPT into VS Code

As per https://help.openai.com/en/articles/10128592-how-to-install-the-work-with-apps-visual-studio-code-extension you can integrate the ChatGPT App into  VS Code. Download the VSIX file and from within VS Code bring up the command pallate with Shift-Cmd-P and select install from VSIX.

## Add VS Code to your path 

Use the following command to integrate into your path 

export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"

```javascript {class="line-numbers"}
console.log("Hello, World!");
function add(a, b) {
    return a + b;
}
```

```javascript {class="line-numbers"}
console.log("Hello, World!");
function add(a, b) {
    return a + b;
}
```
