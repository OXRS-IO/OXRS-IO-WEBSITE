---
tags: [""]
---
# Hardware / Software Versioning Guide
 Includes:
 Information on how version codes are created / changed between updates

All versioning will follow the standard versioning design of **MAJOR**.**MINOR**.**PATCH**-**TAG**  

### MAJOR
version when you make incompatible API changes.

### MINOR
version when you add functionality in a backwards compatible manner.

### TAG
Denotes features/pre-production builds available for use, but not actually production ready.


## Examples 

### 0.0.1 
This is the very first iteration of something.  
Next changes that are just bug fixes are 0.0.2 followed by 0.0.3 etc...

### 0.1.0
*When below version 1.0.0, the minor acts as a breaking change notification*  
So you've made breaking changes where 0.0.X won't match/align/work with everything from this version.

### 1.0.0 
This is the first major version denoting something is now production ready.

### 1.0.1  
You've made some bugfixes and small changes that do not affect or break the existing application/integrations/flow  

### 1.1.0-mynewfeature
This is a development build for mynewfeature that is accessable and contains breaking changes.  
This would be used for end-users to deploy your software/tool for testing before you release 1.1.0 to production.  

### 1.1.0 
You've now released your breaking change/feature update for mynewfeature into production meaning people can start using it, and it won't cause any major issues with other users of v1.0.X  
There are a few changes, but nothing that exists on 1.0.X would break.  

### 2.0.0-restructure
You've done a bunch of work, optimising things or making other changes and no tool/software that uses 1.X.X would work with your new version.  
This is a tag so end users can start work testing your new changes.  
note: bugfixes with a feature would increment the patch until you're ready.  
*eg: 2.0.1-restructure or 2.0.2-restructure*  

### 2.0.0 
You've just released version 2 of your tool, v1.X.X users cannot just switch over from v1 to v2.  