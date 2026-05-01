# 🐧 Linux Basic Commands

---

## 🖥️ System Info Commands

| Command | Full Name | What it does |
|--------|-----------|--------------|
| `pwd` | **P**rint **W**orking **D**irectory | Shows your current location in the file system |
| `whoami` | Who Am I | Shows the currently logged-in username |

---

## 📁 File & Directory Commands

| Command | Full Name | What it does |
|--------|-----------|--------------|
| `ls` | **L**i**s**t | Lists all files and folders in current directory |
| `mkdir` | **M**a**k**e **Dir**ectory | Creates a new folder |
| `cd` | **C**hange **D**irectory | Moves you into a different folder |

---

## 📂 Understanding `ls` Output

```
drwxr-xr-x  projects/       ← has /  →  it's a DIRECTORY (blue or ends with /)
-rw-r--r--  index.js        ← white  →  it's a FILE
lrwxrwxrwx  node_modules@   ← has @  →  it's a SHORTCUT (Symbolic Link)
```

---

## 🧭 `cd` — Navigation Examples

```bash
cd folderName        # go INTO a folder
cd ..                # go ONE level UP (back)
cd ../..             # go TWO levels UP
cd ~                 # go to HOME directory (your root)
cd /                 # go to ROOT of entire system
```

---

## 📦 `mkdir` — Create Folder Examples

```bash
mkdir myProject                    # creates one folder
mkdir src components utils         # creates multiple folders at once
mkdir -p src/components/Header     # creates nested folders in one shot
```

---

## 💡 Quick Real-World Flow (MERN Dev Style)

```bash
whoami                   # check who you are
pwd                      # check where you are
ls                       # see what's here
mkdir my-mern-app        # create your project folder
cd my-mern-app           # enter it
mkdir frontend backend   # create subfolders
ls                       # confirm they were created
```

---

> 💡 **Tip for MERN devs:** You'll use `cd`, `ls`, and `mkdir` constantly — when setting up Node projects, navigating to your React app, or organizing your Express server folders.