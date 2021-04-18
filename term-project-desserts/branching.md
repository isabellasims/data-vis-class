#### **never change anything in the master branch directly from github unless it is the readme**
#### **NEVER PULL THE MASTER BRANCH & EDIT SOMEONE ELSES CODE**
- instead, create a new branch, edit it, & have them review it before merging :D
- switch to the master branch, git pull, then branch & you will have everything that's on master 

# How to branch
### access and creation
- creating a branch

          git branch your-branch-name-here
    
- checking out your branch

         git checkout your-branch-name-here
    
- confirm you are on the correct branch:

          git status
 
### pulling your branch
- checkout your branch (see above)
- make sure you are on correct branch with git status (see above)
- git pull as per usual

### pushing to your branch:

- checkout your branch (see above)
- make sure you are on correct branch with git status (see above)
- push your code with git push as per usual
- if you get a command line message that provides a command to set origin to upstream, copy that and do it

    
### merging:

- when you're all set, contact a team member who knows how to merge to master and ask them to merge (for now)
- nothing ever really needs to be merged to master unless future operations require your code
