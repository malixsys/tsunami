# AAP's Tsunami

## Development

### Coding

```bash
yarn dev
```

Open [http://localhost:5000](http://localhost:3000) with your browser to see the result.

### Git

- command
  ```bash
  export GIT_SSH_COMMAND='ssh -i ~/.ssh/azoome -o IdentitiesOnly=yes'
    ```
- keychain
  ```bash
  ssh-add --apple-use-keychain ~/.ssh/azoome
  ```
- sign
  ```bash
  GIT_TRACE=1 git add -A && git commit -S --all --amend --no-edit -S --author "malixsys<malix@github.com>"  && git push -f                              
  ```

### Site

  - [TSUNAMI par Anthony](https://tsunami.aap.cool)

## Configuration

### DNS

| Hostname | Type   | Value               | TTL |
|----------|--------|---------------------|-----|
| tsunami  | 	CNAME | malixsys.github.io  | 600 |


### Pages 

- Config in [Repo > Settings > Pages](https://github.com/malixsys/tsunami/settings/pages)
- Use GitHub **Actions**

- Add Custom Domain 
    - `tsunami.aap.cool`

- See [Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)
