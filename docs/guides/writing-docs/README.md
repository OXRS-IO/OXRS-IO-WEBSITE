---
tags: [""]
---
# Writing Docs

::: tip Notice
These docs are a work in progress, if you have any issues getting things setup drop us a message on the SuperHouse [Discord](https://discord.gg/H6bbrAtS)
:::

## Getting started
There is a many different ways of editing the OXRS Documentation. We have tried to provide some guides below with the various methods available for those choosing to contribute.
  
## Edit pages using Github website
Most of the pages on the [OXRS Docs website](https://oxrs.io/) have been setup to allow you to edit them directly using the Github website interface. 


### Prerequisites
----
You must have a Github account to make changes using the Github website.
- [Github](https://github.com)


#### Editing pages online
Simply navigate to the page you're wanting to edit on the [OXRS Docs](https://oxrs.io/) website, then scroll to the bottom of the page and click on the [Edit this page](https://github.com/OXRS-IO/OXRS-IO-WEBSITE/edit/main/docs/guides/writing-docs/getting-started.md) link. This will redirect you to the pages repo location on the Github website.

::: tip
If you're not already logged into Github you will prompted to do so.
:::

You will then be presented with a simple in-page text editor, you will see two tabs `Edit file` and `Preview` to make your changes. The OXRS documents are written in Markdown, for a guide on Markdown and other supported elements please see our [Markdown Guide](/guides/writing-docs/markdown.md).

### Commiting your changes
----
Once you are happy with your changes, please add a description with option extended description in the `Commit changes` section at the bottom of the page and click `Commit changes`.  

This will create a merge request that will be reviewed by a member of the OXRS Core Team and merged once accepted.

::: tip
You cannot add/remove pages using this method.  
:::

## Edit pages locally
All of the pages on the [OXRS Docs website](https://oxrs.io/) can be edited including adding assets, new pages and navigation changes. The project is setup on Git and has a local development server built in to make editing locally easier. 

### Prerequisites
----
- [Git](https://github.com/git-guides/install-git)
- [Node.js v12+](https://nodejs.org/)
- [VSCode](https://code.visualstudio.com/) or some text editor  


### Installation
----
[TODO INSERT INTRO TEXT HERE]

#### Step 1 - Fork the Main Repo
----
Navigate to the [OXRS-IO-WEBSITE repo](https://github.com/OXRS-IO/OXRS-IO-WEBSITE) on Github.

Click the `Fork` button on the top right, and fork it to your Git account.

::: tip
This will create a clone of the repo on your own account. Here you can make the changes you wish without affecting the live project.
:::



#### Step 2 - Clone your Forked Repo locally
----
To clone and pull down your repo, click the `Code` button, and copy the url (select HTTPS or GitHub CLI whichever is your prefered method).

Then run the following command in your Terminal to pull down the repo.  
  
` $ git clone https://github.com/<username>/OXRS-IO-WEBSITE ` 

::: warning
Replace the url with the one copied from your Repo.
:::


#### Step 3 - Install and run website locally
----
After Forking the OXRS Main Repo and cloning your repo down to your local machine you can begin to install the project. To install the OXRS Doc Website and get the local development server running follow these steps:

1. Open project directory in chosen IDE.
2. Using Terminal cd into the project directory.
3. run command `npm i` this will install all the project dependancies.
4. To run the local development server run the following command in your terminal `npm run dev`.

::: tip
This will build and serve the project files and automatically launch your web browser showing your local version of the OXRS Docs website. 

The local development server has hot reloading and listens for changes in the directory files. This automatically rebuilds and reloads your browser to allow you to see your latest changes.
:::

5. To stop the local development server simple press `control+C` in the terminal running the development server.

:::warning
The development server can run slowly. Be aware that every change you make the development server is rebuilding the project and serving it your local browser so please be paitent.
:::


#### Step 3.1 - Validate changes to the NAV or Sidebar

If you have made any changes to the `config.nav.js` or `config.sidebar.js` files, validate your changes before commiting.  
```sh
npm run validate
```
It will run and validate all items conform to link standards.

#### Step 4 - Commit and Push your changes
----
Then next step is to commit, push the code up and rasie a Pull Request for youer changes to be reviewed and hopfully merged.  

In your terminal, run the following commands:

::: warning
Ensure you are located in your repos directory in your terminal for example `<user>:OXRS-IO-WEBSITE/` before running any of these commands.
:::

To see the current status of your local repo in your terminal run `git status` this will list all of your current uncommmited changes.

If you want to add any files youe have changed, run the following command in your terminal `git add {file path}` or `git add .` to add all.
  
Now we can commit the changes locallyby running the folling command in your terminal:

`git commit -m "<Add a message here explaining your changes>"`   
  
You can now push your changes to your Github account, simply enter the following command in your terminal:

`git push`


#### Step 5 - Raise a Pull Request
----
Navigate back to your repo on github.com

You should notice that the repo shows that the files have recently been updated. Please ensure you review all your changes, comments and other information to assist with the merge.

Finally you are now ready to rasie a Pull Request (PR).

In your Repo on Github select the tab `Pull requests` and click on the `New pull request` button.


#### Merge requests
----
Someone from the OXRS Core Team will review all merge requests and if any changes need to be made, they will comment on the PR (Pull Request) you have raised.

Once the merge has been accepted, it will be merged into the main branch and deployed automaticalto the live website.