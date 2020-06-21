
#!/usr/bin/env bash

git init
git remote add origin git@github.com:gusleaooliveira/api-temp.git
# git remote add origin https://github.com/gusleaooliveira/posts.git
git add .
git commit -m "alteração feita em:$(date +%d/%m/%Y-%k:%M:%S)"
git push -u origin master
