describe("zshrc scripts", () => {
  //   ##### Symlink #####
  // rm -rf ~/.ssh
  // ln -s ~/Google\ Drive/ALL/Config\ Files/.ssh ~/.ssh
  // rm -rf ~/Sites
  // ln -s ~/ToliCodes\ Dropbox/ALL/Sites ~/Sites
  // ##### oh my ZSH config #####
  // export ZSH="$HOME/.oh-my-zsh"
  // ZSH_THEME="agnoster"
  // plugins=(git)
  // source "$HOME/.oh-my-zsh/oh-my-zsh.sh"
  // ##### Node config #####
  // export NVM_DIR="$HOME/.nvm"
  // [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  // [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
  // export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"
  // ##### GIT #####
  // # Git Config
  // git config --global user.name "Anatoliy Zaslavskiy"
  // git config --global user.email "toli@tolicodes.com"
  // # git current branch
  // function current_branch() {
  //   git branch | awk '/^\* / { print $2 }'
  // }
  // function git_set_upstream() {
  //   hasOrigin=$(git config --get remote.origin.url)
  //   [[ -z $hasOrigin ]] && git push --set-upstream origin $(current_branch)
  // }
  // ##### AWS Timeouts #####
  // export AWS_SESSION_TTL=12h
  // export AWS_ASSUME_ROLE_TTL=12h
  // ##### Passwords and Keys #####
  // import from 1Password?
  // # Git Alisases
  // alias gl='git log --pretty=format:"%C(yellow)%h\\ %ad%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate --date=short'
  // alias ga='git add'
  // alias gd='git diff'
  // alias gs='git status -s'
  // alias gco='git checkout'
  // alias gcom='git checkout master'
  // alias gp='git_set_upstream && git pull'
  // alias gc='git commit -m'
  // alias gca='git commit --ammend --no-edit'
  // alias grm='git fetch && git rebase master'
  // alias gr='git reset --hard && git clean -fd'
  // alias gs="git status"
  // alias pr="gpp && hub pull-request -o -m \"$(git log -1 --pretty=%B)\""
  // # git push and pull
  // function gpp() {
  //   git_set_upstream
  //   git pull
  //   git push
  // }
  // # git pull and force push
  // function gfp() {
  //   git_set_upstream
  //   git push -f
  // }
  // # checkout branch and push it up
  // function gcob() {
  //   git checkout -b $1
  //   git_set_upstream
  // }
  // # add, commit push
  // function gacp() {
  //   git add .
  //   git commit -m \"$1\"
  //   git_set_upstream
  //   git push
  // }
  // # git reset to HEAD x commits
  // function grc() {
  //   git reset --hard "HEAD~$1"
  // }
  // ##### Docker #####
  // function nukeDocker () {
  //   # Stop all containers
  //   docker stop `docker ps -qa`
  //   # Remove all containers
  //   docker rm `docker ps -qa`
  //   # Remove all images
  //   docker rmi -f `docker images -qa `
  //   # Remove all volumes
  //   docker volume rm $(docker volume ls -qf)
  //   # Remove all networks
  //   docker network rm `docker network ls -q`
  // }
  // ##### Project Shortcuts #####
  // function go() {
  //   # ex: @infragen/cli would look in ~/Sites/infragen for packages named cli
  //   # and switch there
  //   if [[ $1 == *"@"* ]]
  //   then
  //     rootPkg=$(echo $1 | cut -d\/ -f1 | tr -d '@')
  //     cd ~/Sites/$rootPkg
  //     projects=$(lerna ls -l --json)
  //     location=$(echo $projects | jq --raw-output ".[] | select(.name==\"$1\") | .location")
  //     cd "$location"
  //   else
  //     case $1 in
  //       "specialCase") cd specialCasePath ;;
  //       # all other cases just get the project in sites
  //       *) cd ~/Sites/$1 ;;
  //     esac
  //   fi
  // }
  // #### ALIASES ####
  // alias sz='source ~/.zshrc'
});
