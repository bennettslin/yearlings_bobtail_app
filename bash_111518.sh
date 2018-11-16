# Terminal prompt
parse_git_branch() {
     git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

# Show current directory in iTerm tab.
# https://gist.github.com/phette23/5270658
if [ $ITERM_SESSION_ID ]; then
  export PROMPT_COMMAND='echo -ne "\033];${PWD##*/}\007"; ':"$PROMPT_COMMAND";
fi

alias clr="clear && printf '\e[3J'"
alias bashp="code ~/.bash_profile"
alias sbashp="source ~/.bash_profile"
alias bashr="code ~/.bashrc"
alias sbashr="source ~/.bashrc"
alias serv="python -m SimpleHTTPServer 1337"
alias hosts="subl /etc/hosts"
alias aj="ant jshint"
alias lsal="ls -al /opt/zillow/content/static-sdl/esstatic.*"
alias checkport="sudo lsof -i :1337 | grep LISTEN"

# Yearling's Bobtail aliases
alias yb="cd ~/workspace/yearlings_bobtail_app"
alias by="cd ~/Documents/bobtail_yearlings"
alias lyrics="cd ~/Documents/yearlings_bobtail_app/lyrics"
alias csc="curl \"http://api.soundcloud.com/tracks/13158665?client_id=9a75c80f2485b45360c7135eb3c4191e\""

alias mar="cd ~/projects/modern-advanced-react-workshop"
alias ys="yarn start"

# Heroku aliases
alias hl="heroku login"
alias hc="heroku config"
alias gpshm="git push heroku master"
alias hps="heroku ps"
alias hps0="heroku ps:scale web=0"
alias hps1="heroku ps:scale web=1"
alias ho="heroku open"
alias hl="heroku local"
alias hlt="heroku logs --tail"
alias ha="heroku addons"
alias hrn="heroku run node"
alias hrb="heroku run bash"

# Webpack aliases
alias cra="create-react-app"
alias nd="npm run dev"
alias nb="npm run build"
alias ns="npm run start"
alias nsb="npm run storybook"
alias nps="NODE_ENV=production npm start"
alias nl="npm run lint"
alias nt="npm run test"
alias ntw="npm run test:watch"
alias nrnsf="npm rebuild node-sass --force"

# npm link check.
alias lch="ls -al node_modules/\@zg-rentals/"
alias lcz="ls -al node_modules/\@zillow/"

function np {
    echo "Run build."
    npm run build
    echo "Run deploy."
    npm run deploy
}

# Mocha aliases
alias mt="mocha tests"

# Tutorial aliases
alias kb="cd ~/Tutorials/kanban_app"

# Zillow aliases
alias conc="cd ~/stash/CONFIG/concrete"
alias pre="cd ~/stash/SERVICES/zillow-web"
alias rrtest="cd ~/stash/SERVICES/tg.rentals-revenue.tests"
alias srp="cd ~/stash/FE/static-renterprofile"
alias bdp="cd ~/stash/FE/static-bdp"
alias bdpc="cd ~/stash/FE/bdp-content"
alias rsc="cd ~/stash/FE/rentals-shared-components"
alias hdc="cd ~/stash/FE/home-details-content"
alias bd="cd ~/stash/FE/building-details"
alias bdc="cd ~/stash/FE/building-details/building-details-content"
alias bdcm="cd ~/stash/FE/building-details-components"
alias rcfcm="cd ~/stash/FE/rental-contact-form-components"
alias sacf="cd ~/stash/FE/static-ads-contact-form"

alias rp="cd ~/stash/FE/renter-profile"
alias rpc="cd ~/stash/FE/renter-profile/renter-profile-content"
alias rpr="cd ~/stash/FE/renter-profile/renter-profile-render"

alias rcf="cd ~/stash/FE/rental-contact-form/rental-contact-form-content/packages/rental-contact-form"
alias rcfc="cd ~/stash/FE/rental-contact-form/rental-contact-form-content"
alias rcfr="cd ~/stash/FE/rental-contact-form/rental-contact-form-render"
alias rcfj="cd ~/stash/FE/rental-contact-form-js"
alias rcfu="cd ~/stash/FE/rental-contact-form-ui"

alias nsa="cd ~/stash/SERVICES/node-service-archetype"
alias tnj="cd ~/stash/FE/test-nextjs/test-content"

# Comet aliases
alias epoc="cd ~/workspace/experian-poc"
alias ajs="cd ~/workspace/applications-js"
alias aljs="cd ~/workspace/applications-landlord-js"
alias auth="cd ~/workspace/auth-check"
alias emr="cd ~/workspace/email-renderer"
alias pjs="cd ~/workspace/payments-js"
alias sjs="cd ~/workspace/screening-js"
alias hpw="cd ~/workspace/hotpads-web"
alias mui="cd ~/workspace/multibrand-ui"
alias ndc="cd ~/workspace/node-config"
alias reap="cd ~/workspace/renter-application"
alias rha="cd ~/workspace/renter-hub-api"
alias rhw="cd ~/workspace/renter-hub-web"
alias rma="cd ~/workspace/rental-manager-api"
alias rmw="cd ~/workspace/rental-manager-web"

# debugging aliases
alias log="script ~/Documents/screen.log"
alias seelog="code ~/Documents/screen.log"
alias rmlog="rm ~/Documents/screen.log"
alias cors="open -a Google\ Chrome\ Canary --args --disable-web-security --allow-file-access-from-files"

alias setu="code ~/workspace/userid.txt"
alias getu="pbcopy < ~/workspace/userid.txt"

# dock aliases
alias spock="defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'"
alias klock="killall Dock"

# git aliases
alias gitdiff="git diff-tree --no-commit-id --name-status -r"
alias gr="git reset"
alias grh="git reset HEAD~1"
alias gmod="git merge origin/develop"
alias ga="git add -A"
alias gib="git branch"
alias gbd="git branch -D"
alias gc="git commit -m"
alias gch="git checkout"
alias gchb="git checkout -b"
alias gcp="git cherry-pick"
alias gd="git diff"
alias gl="git log"
alias glp="git log -p"
alias gs="git status"
alias gcnd="git clean -nd"
alias gcfd="git clean -fd"
alias gplod="git pull origin develop"
alias gplom="git pull origin master"
alias gpsom="git push origin master"
alias frr="git checkout feature/rentals_revenue"
alias prr="git pull origin feature/rentals_revenue"
alias pshrr="git push origin feature/rentals_revenue"
alias rsa="ssh-add -K ~/.ssh/id_rsa"

# source ~/.bash_hotpads_mac

# source ~/.bashrc

# export PATH="/usr/local/opt/openssl/bin:/usr/local/bin:$PATH"

# export PATH="/Users/bennettl/.sprinter/zillow/bin:/usr/local/bin:$PATH"

# export PATH="/usr/local/bin:~/.sprinter/zillow/bin:$PATH"

export PATH="/usr/local/bin:$PATH"


export PS1="\[\033[32m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\]\n(ﾉ◕ヮ◕)ﾉ\[\033[34m\]*:･ﾟ✧ \[\033[00m\]"








#SPRINTER_sprinter
[ -r /Users/bennettl/.sprinter/sprinter/.env ] && . /Users/bennettl/.sprinter/sprinter/.env
#SPRINTER_sprinter



#SPRINTER_zillow
[ -r /Users/bennettl/.sprinter/zillow/.env ] && . /Users/bennettl/.sprinter/zillow/.env
#SPRINTER_zillow


#SPRINTERGLOBALS
[ -r "/Users/bennettl/.bashrc" ] && . /Users/bennettl/.bashrc
#SPRINTERGLOBALS

