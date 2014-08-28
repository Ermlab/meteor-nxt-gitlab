Package.describe({
    summary: "Gitlab for meteor",
  version: "0.1.1",
  git: "https://github.com/Ermlab/meteor-nxt-gitlab.git"
});

Npm.depends({"nxt-gitlab":"0.9.1"});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
    api.export("GitLab");
    api.add_files("gitlab.js", "server");
});





