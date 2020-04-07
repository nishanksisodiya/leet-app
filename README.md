# leet
Lecture Engagement Evaluation Tool
<br><br>
## Steps to setup repo
###requirements
`npm`
###setup
```
git clone <repo url>
cd <repo folder>
npm install

# for serving (you'll mostly need this)
npm run serve

# for building (only needed when building for production)
npm run build
```
<br><br>
### Basic NPM commands
```
npm install
```

### Compiles and Creates Installable exe
```
npm run build
```

### Build vue app (in dist folder)
```
npm run build:dist
```

### Build electron app and install
```
npm run build:intsall
```

### Add, Commit and Push changes to github with comment "minuet changes for developement"
```
npm run push
```

### Bump Version patch number, Add, Commit and Push changes to github with comment "Patched somethings"
```
npm run patch-push
```

### Bump Version minor number, Add, Commit and Push changes to github with comment "Minor bug fixes and QOL improvement"
```
npm run minor-push
```

### Bump Version major number, Add, Commit and Push changes to github with comment "Major release"
```
npm run major-push
```

### Compiles and minifies for production and creates executable
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
