Package.describe({
    summary: "Gitlab for meteor"
});

Npm.depends({"nxt-gitlab":"0.9.1"});

Package.on_use(function (api) {
    api.export("GitLab");
    api.add_files("gitlab.js", "server");
});





