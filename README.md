# OXRS
Open eXtensible Rack System

https://oxrs.io/


## Getting started  
  
## Web  
  
Navigate to the file on the site you want to edit [https://oxrs.io/]  
Notes: You cannot add/remove pages using this method.  
  
  
When you are on the page you'd like to edit, scroll to the bottom and click the ```edit this page``` button/link.  
  
Make the changes in markdown, add a title and description for your changes and click ```propose changes```.  
This will create a merge request that will be reviewed and merged once accepted.  
  

## Git  

Requirements:
- Git  
- VsCode or some text editor  

Navigate to the OXRS repo [https://github.com/OXRS-IO/OXRS-IO-WEBSITE]  

Click the fork button on the top right, and fork it to your account.  
 * This will create a clone on your account that you can work on - it will not affect the live project.

Then in your repo, click the ```code``` button, and copy the url (select HTTPS if required)  

Then run the following command to pull down the repo (in terminal/command prompt)  
  
```git clone https://github.com/mrinc/OXRS```  
^ Replace the url with the one copied aobve.
  
Then edit the files that you want to edit.  
  
Then next step is to commit and push the code up for review.  

In cmd or terminal, run the following commands:  

```git status```  
^ This will list all of your changes.  
  
If you need to add any files, you can run the following:
```git add {file path}```  
  
In order for the files to be saved when we commit, we need to stage the changes, So run the following command for the files that you want to commit next:  
```git stage {file path}```   
  
Now we commit the changes (only locally though)   
```git commit -m "{Add a message here with your changes}"```   
  
Then the final touches to send it up to github (your repo though)  
```git push```  

Now let's return back to your repo on github.com  
There will most likely be a popup saying you've made changes, click here to create a merge/pull request, go ahead.   
Review all your changes, all comments and other information to assist with the merge.  
And then create the pull/merge request.   
  

### Merge requests

Someone of the core team will review all merge requests and if any changes need to be made, they will comment on the PR (Pull Request/merge request).  
Once the merge has been accepted, it will be merged into the main branch and deployed automatically.