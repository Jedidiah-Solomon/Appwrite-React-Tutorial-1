# Generating a new SSH key and adding it to the ssh-agent

1. `ssh-keygen -t ed25519 -C "your_email@example.com"`

Response in CLI (Generating public/private ed25xxx key pair.
Enter file in which to save the key (/c/Users/hp/.ssh/id_ed25xxx):) 2. Hit enter

3. Enter File to Save the Key:
   When prompted to "Enter file in which to save the key", you can press Enter to accept the default file location e.g (/c/Users/hp/.ssh/id_ed25519).

Enter Passphrase:
When prompted to "Enter passphrase (empty for no passphrase)", you can either:

Enter a Passphrase: Type a secure passphrase and press Enter.
Leave Blank: Press Enter twice to proceed without a passphrase.

This creates two files for you

1. Your identification has been saved in /c/Users/hp/.ssh/id_ed25519
2. Your public key has been saved in /c/Users/hp/.ssh/id_ed25519.pub

**Note:**

Using a Passphrase: Adds security; recommended if you need to protect the private key.
No Passphrase: More convenient; potentially less secure, especially if the key is stored on a device that could be compromised.
Deciding whether to use a passphrase depends on your security requirements and convenience needs. If security is a priority, use a passphrase. If convenience is more important and the security risk is low (e.g., on a well-protected machine), you might choose to leave it empty.

Adding a new SSH key to your GitHub account
To configure your account on GitHub.com to use your new (or existing) SSH key, you'll also need to add the key to your account.

1. `clip < ~/.ssh/id_ed25519.pub` do this on terminal, this will automatically copy your public key or do it manually. Go to github - settings - SSH and GPG Key -
   Craetre one and give it a title, choose key type (either for auth or signing in).

Now clone projects to local machine with ssh

Remove ssh key

1. `rm -rf .ssh` do this on the .ssh directory
